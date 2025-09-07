import antfu from '@antfu/eslint-config';

export default antfu(
  {
    formatters: true,
    vue: true,
  },
  {
    rules: {
      'style/semi': ['error', 'always'],
      'style/brace-style': ['error', '1tbs'],
    },
  },
);
