import globals from 'globals';
import eslint from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import reactPlugin from 'eslint-plugin-react';
import { config, configs } from 'typescript-eslint';
import * as reactHooksPlugin from 'eslint-plugin-react-hooks';
import { flatConfigs as importConfigs } from 'eslint-plugin-import-x';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default config(
  eslint.configs.recommended,
  ...configs.recommended,
  importConfigs.recommended,
  importConfigs.typescript,
  globalIgnores(['metro.config.js', './.rnstorybook/**', './.storybook/**']),
  {
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin
    },
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'react/jsx-uses-react': 0,
      'react/jsx-sort-props': [
        'error',
        {
          reservedFirst: true,
          shorthandFirst: true
        }
      ],
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/no-require-imports': 0
    },
    settings: {
      react: {
        version: 'detect'
      },
      'import-x/resolver': {
        node: {
          paths: ['./src/']
        }
      }
    }
  },
  eslintPluginPrettier
);
