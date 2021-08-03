const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-dark-mode'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });
    config.resolve.extensions.push('.ts', '.tsx', '.scss');
    config.resolve.alias = {
      '@components': resolve('../components'),
      '@configs': resolve('../configs'),
      '@types': resolve('../types'),
      '@utils': resolve('../utils'),
      '@styles': resolve('../styles'),
      '@hooks': resolve('../hooks'),
      '@assets': resolve('../assets'),
      '@recoil': resolve('../states/recoil'),
      '@redux': resolve('../states/redux'),
    };
    // Return the altered config
    return config;
  },
};
