import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      coverage: {
        include: ['src/components/**/*.{vue,ts,tsx}'], // Ajuste para incluir apenas componentes
        exclude: ['src/components/**/__tests__/*.spec.{ts,tsx}', 'src/components/icons'] // Exclui os arquivos de teste específicos
      },
      root: fileURLToPath(new URL('./', import.meta.url)),
      server: {
        deps: {
          inline: ['vuetify']
        }
      }
    }
  })
)
