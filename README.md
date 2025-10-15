# assignment-2-template

Template Eleventy site for Assignment 2: Collection

## Navigation links

## Notes about images and building

If images aren't appearing, make sure the `source/img` folder is being copied to the output. This project now includes a passthrough in `eleventy.config.js` which copies `source/img` into `_site/img`.

To build the site from the `3101-assignment_2` folder run:

```bash
npm run build
```

Or from the repository root run:

```bash
npm --prefix 3101-assignment_2 run build
```

This will produce `_site/` and you should see images under `_site/img/` and page image references like `<img src="/img/bandage.png" />`.
