# CE 3111 Complete Guide Website

**Structural Analysis and Design-I** — question-bank driven course guide for GitHub Pages.

> Made by **K.I.Rohan**

## What is included

- Responsive **Class Note** for Section A and Section B, arranged by the 8-set distribution.
- **Question Bank Analysis** with annual-core patterns, 3-of-4 strategy, theory list and proof/derivation priorities.
- **Question Bank Solution** workflow pages plus the bundled 244-page complete worked-solution archive.
- Dedicated **2024 Backlog Preparation** page showing the reversed printed section order and a 7-day crash plan.
- **Formula + Theory + Proof Hub** for final revision.
- Theme toggle, global topic search and persistent set-progress checkboxes (stored only in the browser via `localStorage`).
- Original QB and 2024 Backlog paper bundled under `/docs` for verification.

## Course-title note

The uploaded source materials identify **CE 3111 as “Structural Analysis and Design-I.”** The website therefore uses that verified source title. If your department wants the display label changed to “Mathematics-I”, replace the subtitle string in the HTML files; the study content itself is Structural Analysis.

## Repository structure

```text
CE3111_GitHub_Repository/
├── index.html
├── class-notes.html
├── qb-analysis.html
├── qb-solutions.html
├── backlog.html
├── formula-hub.html
├── 404.html
├── manifest.webmanifest
├── .nojekyll
├── assets/
│   ├── css/site.css
│   ├── js/data.js
│   ├── js/site.js
│   └── img/
└── docs/
    ├── section-a-class-note.pdf
    ├── section-b-class-note.pdf
    ├── question-bank-analysis.pdf
    ├── question-bank-solution-complete.pdf
    ├── formula-theory-proof.pdf
    ├── question-bank-2016-2024.pdf
    └── backlog-2024.pdf
```

## Deploy to GitHub Pages

1. Create a new GitHub repository, e.g. `CE3111-Complete-Guide`.
2. Upload the **contents** of this folder to the repository root.
3. Commit and push to the `main` branch.
4. Open **Repository → Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then **Save**.
7. GitHub will show your public Pages URL after deployment.

No build step, Node.js, React, package manager or database is required.

## Local preview

You can open `index.html` directly. For a more realistic local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Editing content

Most course content lives in `assets/js/data.js`. Edit a set once there and the class-note, solution, search and progress interfaces update together.

## PDF size note

`docs/question-bank-solution-complete.pdf` is large (~61 MB) but below GitHub's 100 MB single-file hard limit. If you later add much larger files, use Git LFS or host those PDFs separately.

## Source basis

The guide was built from the uploaded class notes, lecture slides, regular question bank (2016–2024), 2024 Backlog paper, topic-wise worked sheets, and the previously generated CE 3111 study PDFs.
