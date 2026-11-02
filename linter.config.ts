import type { Options } from '@lumirelle/linter-config'

/**
 * Linter options for both ESLint & Oxlint.
 */
export const options = {
  // A library, not an application: the library-specific slices of the `node`, `e18e` and
  // TypeScript Modules are enabled.
  type: 'lib',
  // Type-aware rules need the workspace's TypeScript config on both sides: the ESLint parser reads
  // it here, and Oxlint reads it in its own type-aware mode.
  typescript: { tsconfigPath: 'tsconfig.json' },
  oxlint: {
    typeAware: true,
    typeCheck: true,
  },
  // The root README is a symlink into `packages/`; the linters would follow it twice.
  ignores: ['.agents/**', '.claude/**', 'test/__snapshots__/**', '/README.md'],
} satisfies Options
