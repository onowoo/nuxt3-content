import _Highlight from '/Volumes/Data/nuxt/nuxt3-content/node_modules/.pnpm/@nuxtjs+mdc@0.6.1_rollup@2.79.1/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":"dracula-soft"}