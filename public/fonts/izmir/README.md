# Izmir font files go here

Izmir (by Ahmet Altun) is a commercial typeface — it isn't bundled with this
project because that would mean redistributing a paid font without a license.

If you own a license (desktop or webfont), export/convert the styles you need
to `.woff2` (and optionally `.woff` as a fallback) and drop them in this folder
using these exact filenames — `src/index.css` already has `@font-face` rules
pointing at them:

```
public/fonts/izmir/
  Izmir-Regular.woff2
  Izmir-Medium.woff2
  Izmir-SemiBold.woff2
  Izmir-Bold.woff2
  Izmir-Italic.woff2
```

Only have some of the weights? Delete the matching `@font-face` block in
`src/index.css` (or point it at the closest weight you do have) — the site
will keep working either way, since the CSS falls back to Archivo (a free,
similarly geometric sans loaded from Google Fonts) for any weight it can't
find.

Most foundries (Fontspring, MyFonts) will convert desktop OTF/TTF purchases to
webfont formats for you, or you can run a licensed file through a tool like
`fonttools`/`sfnt2woff2` yourself.
