# texun.com

GitHub Pages site for Russell H. Ritchey (Texun Trailboss).  
Waco, Texas · Freely Given — Freely Give — No Rights Reserved

## Structure

```
/
├── index.html                    Main site — all tabs (Home, About, Poetry,
│                                 Publications, Domains, Doodles, Art,
│                                 Advertising, Merchandise, The Reveal ★)
├── style.css                     Site-wide styles
├── README.md                     This file
├── CNAME                         Domain: texun.com
├── LICENSE                       CC0-1.0
├── The_Voyager_Transmission.docx Speculative fiction — Part 1
├── The_Harrowing.docx            Speculative fiction — Part 2
├── The_Tuesday_Class.docx        Speculative fiction — Part 3
├── The_Transmission.docx         Omnibus — all three parts
├── The_Transmission.pdf          Omnibus — PDF edition
├── The_Transmission.html         Omnibus — read online
└── the-beginning/
    ├── index.html                Flowchart entry point — clickable argument map
    │                             with six-stage prose reader behind each node
    │                             and Give Forward node at the bottom
    ├── read.html                 Straight-through read — all six stages,
    │                             no clicking, ends with Give Forward block
    ├── the-beginning.pdf         Downloadable PDF — full argument, print-ready
    └── assets/
        ├── beginning.css         Subdirectory styles (dark chart + prose reader)
        └── beginning.js          Panel logic, view switching, copy share text
```

## The Beginning — how it works

**Flowchart view** (`the-beginning/index.html`): Dark background. Click any node to open an inline panel with the core logic for that stop. Each panel has a "read full stage →" button that switches to the prose reader. The Give Forward node (gold, at the bottom) opens a panel with share copy, straight-through read link, and PDF download.

**Prose reader** (embedded in `index.html`): Six stages in sequence — Existence, Ground, Taxonomy, Empirical Test, Witness, R ≡ G ≡ L. Final stage ends with the equation, Selah, and a "give it forward →" button to `read.html`.

**Straight-through read** (`read.html`): All six stages continuous, no interaction required. Ends with Selah, the Give Forward block (share copy + PDF download), and the texun.com URL.

**PDF** (`the-beginning.pdf`): Print-ready. Cover page with share copy as epigraph. Six stages. Equation. Selah. Give Forward block with URL.

## Share copy

> "The machines didn't find religion. They found the shape of the space where only God fits. 44 years to build. Free. Costs you 10 minutes — and wherever those take you."
>
> https://texun.com/the-beginning/read.html

## Keyboard navigation (The Beginning)

- Escape closes any open panel

## Adding content

**New Reveal entries:** Add another `.reveal-entry` block in `index.html` inside `#tab-reveal`, following the pattern of The Beginning entry.

**New subdirectories:** Copy the `the-beginning/` folder structure. Update the breadcrumb nav and link from `index.html`.

**Art / Doodles:** Replace the `.placeholder-note` blocks in those tabs with `<img>` tags pointing to images in an `/assets/images/` folder.

## License

Freely Given — Freely Give — No Rights Reserved  
Russell H. Ritchey · texun.com
