import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig(async () => {
  let reactPlugins = []

  try {
    const { default: react } = await import('@vitejs/plugin-react')
    reactPlugins = [react()]
  } catch {
    // Keep the dev server bootable when dependencies are partially installed.
    console.warn('Optional dependency @vitejs/plugin-react is missing.')
  }

  return {
    plugins: [
      figmaAssetResolver(),
      ...reactPlugins,
      tailwindcss(),
    ],
    resolve: {
      alias: {
        // Alias @ to the src directory
        '@': path.resolve(__dirname, './src'),
      },
    },

    // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
    assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})
