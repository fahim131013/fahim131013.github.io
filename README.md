# Tanvir Ahmed Fahim — Personal Portfolio

A responsive static portfolio for https://fahim131013.github.io.

## Publish on GitHub Pages
1. Extract the downloaded ZIP on your computer.
2. Open the repository `fahim131013/fahim131013.github.io`.
3. Choose **Add file → Upload files**.
4. Drag the CONTENTS of the extracted folder into GitHub, including the `assets` folder. `index.html` must be at the top level of the repository, not inside another folder. Do not upload the ZIP itself.
5. Choose **Commit changes**. Replace the existing README if prompted.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**. Choose **main** and **/(root)**, then **Save**.
8. Wait for the Pages deployment to finish. Open https://fahim131013.github.io and refresh.

## Preview on your computer
Open `index.html` in your browser. No build tools are needed. An internet connection loads the optional Google Fonts; local fonts are used if unavailable. All content, animations, images, and filters otherwise run locally. Copy email may require HTTPS; the visible email link remains usable.

## Files
- `index.html`: all portfolio text, publications, project descriptions, and links.
- `styles.css`: colours, typography, responsive layout, and animations.
- `script.js`: publication filtering, mobile navigation, scroll effects, and copy email.
- `assets/portrait.png`: supplied portrait, unchanged.
- `assets/Tanvir-Ahmed-Fahim-CV.pdf`: supplied academic CV, unchanged.
- `assets/Tanvir-Ahmed-Fahim-Resume.pdf`: supplied professional resume, unchanged.
- `favicon.svg`: browser icon.

## Updating content
Edit text in `index.html` and commit the change. For each new paper, copy a complete `<article class="paper">` entry, set its `data-status` to `Published`, `Accepted`, or `Under review`, and update the filter count in the corresponding button. Add `hidden` to non-published entries. Keep manuscript statuses accurate. The counts are based on the supplied October 2026 academic CV, not live citation services.

Replace either PDF while retaining the same filename to update its download. Both original PDFs contain contact and referee details: review them before public upload and substitute a public CV if desired. The webpage itself uses only the professional email and city/country, and does not list referee contact details.

The degree is marked thesis defense pending, matching both CVs. Internship dates are displayed at month level because the two CVs differ on the start day. Leadership dates are shown at year level where the CVs differ on months. The 28 GHz publication DOI is taken from the PDF's embedded hyperlink to avoid the malformed text extraction of its underscore.

## Accessibility and behaviour
Keyboard navigation, visible focus indicators, skip link, responsive mobile menu, image alternative text, accessible filter buttons, and reduced-motion support are included. There are no tracking scripts, backend services, forms, or package dependencies. External fonts use Google Fonts. Paper links open the DOI or publisher page. Personal profile links use the supplied addresses.
