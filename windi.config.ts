import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,ts}'],
    exclude: [
      'node_modules',
      '.git',
      'excluded',
      'dist',
      'windi.config.{ts,js}',
      'tailwind.config.{ts,js}',
    ],
  },
  darkMode: 'class',
  safelist: 'select-none',
  attributify: true,
  alias: {
    'flex-center': 'flex items-center',
  },
})
