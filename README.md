# texun.com

GitHub Pages site for Russell H. Ritchey (Texun Trailboss).  
Waco, Texas · Freely Given — Freely Give — No Rights Reserved

## Structure

```
/
├── index.html              Main site — all tabs (Home, About, Poetry,
│                           Publications, Domains, Doodles, Art,
│                           Advertising, Merchandise, The Reveal ★)
├── style.css               Site-wide styles
├── README.md               This file
└── the-beginning/
    ├── index.html          The Beginning — six-stage prose reader
    └── assets/
        ├── beginning.css   Subdirectory styles
        └── beginning.js    Stage navigation (keyboard + click)
```

## Deployment

1. Push this repo to GitHub
2. Enable GitHub Pages (Settings → Pages → Branch: main → / (root))
3. Site available at https://texun.com (once DNS is pointed)

## Navigation — The Beginning

- Click stage names in the vector bar to jump
- Arrow keys (← →) navigate between stages
- "forward →" button always points to the next stage (dark, prominent)
- Final stage ends with the equation and Selah — no forward button

## Adding content

**New Reveal entries:** Add another `.reveal-entry` block in `index.html`  
inside `#tab-reveal`, following the pattern of The Beginning entry.

**New subdirectories:** Copy the `the-beginning/` folder structure.  
Update the breadcrumb nav and link from `index.html`.

**Art / Doodles:** Replace the `.placeholder-note` blocks in those tabs  
with `<img>` tags pointing to images in an `/assets/images/` folder.

## License

Freely Given — Freely Give — No Rights Reserved  
Russell H. Ritchey · texun.com
