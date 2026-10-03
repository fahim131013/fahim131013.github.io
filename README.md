# Tanvir Ahmed Fahim — Personal Portfolio

Responsive static portfolio for https://fahim131013.github.io.

## Upload the update
1. Extract this ZIP.
2. Open `fahim131013/fahim131013.github.io` on GitHub.
3. Choose **Add file → Upload files**.
4. Drag all extracted files and the complete `assets` folder into the upload area. Keep `index.html` at the repository root. Do not upload the ZIP itself or nest the site inside another folder.
5. Commit the update, replacing the matching existing files.
6. Keep **Settings → Pages → Deploy from a branch → main → /(root)**.
7. Wait for the Pages deployment to complete, then refresh the website.

## Activate email messages — required once
The form sends visitor messages to **tanvirahmedfahim.baiust@gmail.com** using FormSubmit.

1. After publishing, open the live site's **Send me a message** form.
2. Submit a short test message and complete the service's CAPTCHA.
3. Check that Gmail inbox (and Spam) for the FormSubmit activation email. Click its confirmation link.
4. Submit another test from the live site. Confirm the message arrives and that Reply addresses the email entered in the form.

The destination and form validation are configured, but inbox activation and live delivery have not been completed by the builder. No Gmail password or API key is required. The form depends on FormSubmit availability. If it fails, visitors can use the email or WhatsApp links.

The form uses the service's default CAPTCHA plus a honeypot, and includes a short privacy notice. The thank-you URL is `https://fahim131013.github.io/thanks.html`; update `_next` in index.html if you change domain or repository path. Documentation: https://formsubmit.co/documentation.

## Included changes
- Removed the TAF mark from navigation and footer.
- Hero wording: Electrical and Electronic Engineer.
- Contact address: Birsreshto Captain Jahangir Hall, Cumilla 3501, Bangladesh.
- Google Scholar, ORCID, ResearchGate, LinkedIn, Facebook and WhatsApp icons and links.
- Updated personal email throughout the website and in both downloadable PDFs. Referee emails are unchanged.
- Removed the publication-status date sentence from the webpage.
- Five project galleries with three captioned figures each, matched to portfolio.docx.
- Nagorik TV certificate, Army photo and privacy-redacted retirement-card preview.
- Best Poster Award certificate, poster presentation and award ceremony gallery.
- Accessible enlarged previews with keyboard controls, focus restoration, full-size links and image-link fallback when JavaScript is unavailable.
- Responsive contact form and thank-you page.

## Image preparation
The clearer embedded originals from portfolio.docx are used where available. Consistent CSS framing provides project covers and thumbnails; the gallery displays the entire image without cropping. Diagrams, screenshots, scientific results and certificates retain their original text and data. Low-resolution source figures are not represented as recovered high-resolution evidence.

The Army portrait received AI-assisted color, exposure and clarity enhancement using the built-in image tool. The retirement card is an edited, redacted public preview; the unredacted card is not included. These files are `assets/gallery/army-portrait.png` and `assets/gallery/retirement-card-redacted.png`.

Editing prompts: preserve the Army portrait's identity, pose, uniform and outdoor setting while reducing excessive yellow/green saturation and improving exposure and natural clarity; preserve the retirement-card composition and visible service information while applying opaque bars over personal identifiers, parent names, permanent address, signatures and identifying strip.

## Files and maintenance
- `index.html`: text, links, project figures and embedded gallery configuration.
- `styles.css`: responsive design, image framing and motion.
- `script.js`: menu, publication filters, scroll effects, email copy and galleries.
- `thanks.html`: return page after form processing.
- `assets/gallery/`: 21 public portfolio images.
- `assets/portrait.png`: original homepage portrait.
- `assets/Tanvir-Ahmed-Fahim-CV.pdf` and `assets/Tanvir-Ahmed-Fahim-Resume.pdf`: updated personal email.

No build or package installation is needed. Open index.html for local browsing; submit the form only from the published website. Google Fonts are optional, with system-font fallbacks. Copy email normally requires HTTPS.

For a new paper, duplicate an article with class `paper`, set `data-status` to Published, Accepted or Under review, and update its filter count. Publication statuses are maintained manually. The degree retains its thesis-defense-pending note. Downloadable PDFs retain their supplied content apart from the personal email/contact-line layout.

For a new gallery image, add its file, add the corresponding entry to `gallery-data` in index.html, and update the gallery's thumbnail links and figure count. All public image files can be saved by visitors; preview controls are not download protection.
