import { defineConfig } from 'unocss'
import icons from './icons'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        uil: () => import("@iconify-json/uil/icons.json").then(i => i.default)
      }
    }),
  ],
  safelist: icons
})