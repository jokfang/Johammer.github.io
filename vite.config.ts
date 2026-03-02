import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/.netlify/functions': 'http://localhost:8888'
    }
  },
  test: {
    setupFiles: ["./Test/setup.ts"],
    coverage: {
      reporter: ["text", "html"],
      all: true,
      include: [
        "src/App.tsx",
        "src/Maintenance.tsx",
        "src/common-rules.ts",
        "src/useAppDictionary.tsx",
        "src/state.ts",
        "src/main.tsx",
        "src/layouts/MainLayout.tsx",
        "src/components/DarkModeSwitch.tsx",
        "src/components/Header.tsx",
        "src/components/LanguagePicker.tsx",
        "src/components/MenuBar.tsx",
        "src/components/OutputFAQ.tsx",
        "src/components/Tutorial.tsx",
        "src/components/VersionHistory.tsx",
        "src/components/icons.tsx",
        "src/pages/Tools.tsx",
        "netlify/functions/**/*.ts"
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100
      }
    }
  }
})
