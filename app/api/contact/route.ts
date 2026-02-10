import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json()

        // Send email to yourself (notification)
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'antoniohenriquekiepert@gmail.com',
            subject: `Contact from Portfolio - ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        })

        // Send auto-reply with CV link to the visitor
        await resend.emails.send({
            from: 'Antonio Kiepert <onboarding@resend.dev>',
            to: email,
            subject: 'Thanks for reaching out!',
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Hi ${name}!</h2>
          <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you as soon as possible.</p>
          <p>In the meantime, feel free to download my CV:</p>
          <a href="https://yourdomain.com/antonio-kiepert-cv.pdf" 
             style="display: inline-block; background: #000; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 16px 0;">
            Download My CV
          </a>
          <p>Best regards,<br>Antonio Kiepert</p>
        </div>
      `,
        })

        return NextResponse.json({ success: true }, { status: 200 })
    } catch (error) {
        console.error('Email error:', error)
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        )
    }
}
