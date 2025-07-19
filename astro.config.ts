import { defineConfig, fontProviders, envField } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import pageInsight from "astro-page-insight";
import { SITE } from './src/site.config.ts';
import Sonda from 'sonda/astro';

export default defineConfig({
  // Site Configuration
  site: SITE.origin,
  base: SITE.basePathname,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  // Output Configuration
  output: 'static',

  // Environment Configuration
  env: {
    schema: {
      PORT: envField.number({ context: "server", access: "public", default: 4321 }),
      API_URL: envField.string({ context: "client", access: "public", optional: true }),
      API_SECRET: envField.string({ context: "server", access: "secret", optional: true }),
    },
    validateSecrets: true,
  },

  // Markdown Configuration
  markdown: {
    syntaxHighlight: {type: 'shiki', excludeLangs: ['mermaid']},
    // rehypePlugins: [rehypeAccessibleEmojis],
    shikiConfig: {
      themes: {dark: 'catppuccin-macchiato', light: 'catppuccin-latte'},
      wrap: true,
    },
  },

  // Server Configuration
  server: {
    port: import.meta.env.PORT || 4321,
  },

  // Font Configuration
  experimental: {
    contentIntellisense: true,
    fonts: [
        {
          provider: fontProviders.fontsource(),
          name: 'Inter',
          display: 'swap',
          styles: ['normal'],
          weights: ['400', '500', '600', '700'],
          subsets: ['latin'],
          cssVariable: '--font-inter',
        },
        {
          provider: fontProviders.fontsource(),
          name: 'Cal Sans',
          display: 'swap',
          styles: ['normal'],
          weights: ['400', '500', '600'],
          subsets: ['latin'],
          cssVariable: '--font-cal-sans',
        },
      ],
    },

  // Integrations
  integrations: [
    icon({
      iconDir: 'src/assets',
    }),

    sitemap(),

    partytown({
      // Load Partytown in the main thread for development
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    pageInsight(),
    Sonda()
  ],

  // Vite Configuration
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
    plugins: [
      tailwindcss(),
    ],
    build: {
      sourcemap: true
    }
  }
});
