const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    },
        {
          test: /\.scss$/,
          loaders: ['style-loader',  {
            loader: 'css-loader',
            options: {
              modules: true,
            }
          }, 'sass-loader'],
          include: path.resolve(__dirname, '../'),
        }
        );

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};



