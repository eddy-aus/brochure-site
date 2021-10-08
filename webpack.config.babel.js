import 'on-the-case';
import CnamePlugin from 'cname-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import path from 'path';
import { address, namespace as ns, pages } from './src/config';

const commonConfig = {
  entry: './src/js/app.jsx',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/env',
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: 'style-loader',
            options: { injectType: 'singletonStyleTag' },
          },
          {
            loader: 'css-loader',
            options: { url: false },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CnamePlugin({
      domain: address.nakedDomain,
    }),
    new CopyPlugin({
      patterns: [{ from: path.join(__dirname, './src/static'), to: '.' }],
    }),
    ...pages.map(
      (page) =>
        new HtmlPlugin({
          inject: 'body',
          filename: './' + page.path + page.filename,
          template: path.join(__dirname, './src/html/index.html'),
          templateParameters: {
            ns,
            description: page.description,
            image: page.image,
            imageAlt: page.imageAlt,
            robots: page.robots,
            themeColor: page.themeColor,
            title: page.title,
            URL: page.URL,
          },
        }),
    ),
  ],
  resolve: {
    alias: {
      'react/jsx-runtime': require.resolve('./node_modules/react/jsx-runtime'),
      react: require.resolve('./node_modules/react'),
      'react-dom': require.resolve('./node_modules/react-dom'),
    },
    extensions: ['.js', '.jsx'],
  },
};

export default (env) => {
  if (env.development) {
    return {
      ...commonConfig,
      devServer: {
        port: 3000,
        static: ['src/static'],
      },
      mode: 'development',
      output: {
        filename: 'js/app.js',
        publicPath: '/',
      },
    };
  }

  return {
    ...commonConfig,
    mode: 'production',
    output: {
      filename: 'js/app.js',
      publicPath: address.URL,
    },
  };
};
