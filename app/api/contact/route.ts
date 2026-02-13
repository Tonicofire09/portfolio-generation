import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, lang = 'pt' } = await req.json()

    const cvLink = lang === 'en'
      ? 'https://slabware.com/antonio-kiepert-cv-en.pdf'
      : 'https://slabware.com/antonio-kiepert-cv.pdf'

    // Send email to yourself (notification)
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'antoniohenriquekiepert@gmail.com',
      subject: `🎯 Novo Contato - ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0f1419;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%); border-radius: 16px; padding: 32px; border: 1px solid #2a3441;">
      <h1 style="color: #4ecdc4; margin: 0 0 24px 0; font-size: 24px;">📬 Novo Lead do Portfolio</h1>
      
      <div style="background: #1a1f2e; border-radius: 12px; padding: 24px; margin-bottom: 16px; border-left: 4px solid #4ecdc4;">
        <p style="color: #8b95a5; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Nome</p>
        <p style="color: #e8eaed; margin: 0 0 20px; font-size: 18px; font-weight: 600;">${name}</p>
        
        <p style="color: #8b95a5; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
        <p style="color: #4ecdc4; margin: 0 0 20px; font-size: 16px;">
          <a href="mailto:${email}" style="color: #4ecdc4; text-decoration: none;">${email}</a>
        </p>
        
        <p style="color: #8b95a5; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Mensagem</p>
        <p style="color: #c4c9d1; margin: 0; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
      
      <div style="text-align: center; padding-top: 16px;">
        <a href="mailto:${email}" style="display: inline-block; background: #4ecdc4; color: #0f1419; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
          Responder Agora →
        </a>
      </div>
    </div>
  </div>
</body>
</html>
      `,
    })

    // Send auto-reply with CV link to the visitor
    await resend.emails.send({
      from: 'Antonio Kiepert <onboarding@resend.dev>',
      to: email,
      subject: 'Obrigado pelo contato! 🚀',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f7fa;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <!-- Header with gradient -->
    <div style="background: linear-gradient(135deg, #4ecdc4 0%, #44a5ab 100%); border-radius: 16px 16px 0 0; padding: 40px 32px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0 0 12px; font-size: 28px; font-weight: 700;">Olá, ${name}! 👋</h1>
      <p style="color: #e8f5f4; margin: 0; font-size: 16px; opacity: 0.95;">Recebi sua mensagem e vou retornar em breve</p>
    </div>
    
    <!-- Main content -->
    <div style="background: #ffffff; padding: 40px 32px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      <p style="color: #2d3748; margin: 0 0 20px; font-size: 16px; line-height: 1.6;">
        Muito obrigado por entrar em contato através do meu portfolio! 
      </p>
      
      <p style="color: #2d3748; margin: 0 0 24px; font-size: 16px; line-height: 1.6;">
        Vou analisar sua mensagem com atenção e retornar o mais rápido possível.
      </p>
      
      <!-- CV Download CTA -->
      <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); border-radius: 12px; padding: 24px; margin: 32px 0; text-align: center; border: 2px solid #e2e8f0;">
        <p style="color: #4a5568; margin: 0 0 16px; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
          📄 Enquanto isso
        </p>
        <p style="color: #2d3748; margin: 0 0 20px; font-size: 16px;">
          ${lang === 'en' ? 'Download my full resume in PDF' : 'Baixe meu currículo completo em PDF'}
        </p>


        <a href="${cvLink}" style="display: inline-block; background: linear-gradient(135deg, #4ecdc4 0%, #44a5ab 100%); color: #ffffff; padding: 14px 36px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(78, 205, 196, 0.3);">
          ${lang === 'en' ? 'Download Resume →' : 'Baixar Currículo →'}
        </a>
      </div>
      
      <!-- Social Links -->
      <div style="border-top: 1px solid #e2e8f0; padding-top: 24px; margin-top: 32px;">
        <p style="color: #718096; margin: 0 0 16px; font-size: 14px;">Conecte-se comigo:</p>
        <div style="text-align: center;">
          <a href="https://www.linkedin.com/in/antonio-kiepert" style="display: inline-block; margin: 0 8px; color: #4ecdc4; text-decoration: none; font-size: 14px; font-weight: 500;">LinkedIn</a>
          <span style="color: #cbd5e0;">|</span>
          <a href="https://wa.me/5527988770632" style="display: inline-block; margin: 0 8px; color: #4ecdc4; text-decoration: none; font-size: 14px; font-weight: 500;">WhatsApp</a>
          <span style="color: #cbd5e0;">|</span>
          <a href="mailto:antoniohenriquekiepert@gmail.com" style="display: inline-block; margin: 0 8px; color: #4ecdc4; text-decoration: none; font-size: 14px; font-weight: 500;">Email</a>
        </div>
      </div>
      
      <!-- Signature -->
      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
        <p style="color: #2d3748; margin: 0 0 4px; font-size: 16px; font-weight: 600;">Antonio Kiepert</p>
        <p style="color: #718096; margin: 0; font-size: 14px;">Marketing Manager | Growth & Paid Media</p>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; padding-top: 24px;">
      <p style="color: #a0aec0; margin: 0; font-size: 12px;">
        Este é um email automático enviado a partir do meu portfolio
      </p>
    </div>
  </div>
</body>
</html>
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
