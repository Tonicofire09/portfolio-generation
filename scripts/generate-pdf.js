const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const languages = [
        { html: 'cv-pt.html', pdf: 'antonio-kiepert-cv.pdf' },
        { html: 'cv-en.html', pdf: 'antonio-kiepert-cv-en.pdf' }
    ];

    for (const lang of languages) {
        // Path to the HTML file
        const htmlPath = path.join(__dirname, `../${lang.html}`);
        const pdfPath = path.join(__dirname, `../public/${lang.pdf}`);

        // Load the HTML file
        await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

        // Emulate screen media to keep the styling consistent with what the user sees
        await page.emulateMediaType('screen');

        // Generate PDF
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            scale: 0.8, // Slight scale down to ensure everything fits nicely
            margin: {
                top: '10mm',
                right: '10mm',
                bottom: '10mm',
                left: '10mm'
            }
        });

        console.log(`PDF generated at ${pdfPath}`);
    }
    await browser.close();
})();
