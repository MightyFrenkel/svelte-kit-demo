## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## What is Svelte?

In short, it's a UI framework that compiles your components to highly optimized vanilla
JavaScript. It does not use a virtual DOM like React.

## What is SvelteKit?

SvelteKit is a framework for building extremely high-performance web apps.

Building an app with all the modern best practices is fiendishly complicated. Those practices
include build optimizations, so that you load only the minimal required code; offline support;
prefetching pages before the user initiates navigation; and configurable rendering that allows
you to generate HTML on the server or in the browser at runtime or at build-time. SvelteKit does
all the boring stuff for you so that you can get on with the creative part.
