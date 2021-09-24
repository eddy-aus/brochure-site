import 'on-the-case';
import CnameWebpackPlugin from 'cname-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { namespace, pages } from './src/config';

const commonWebpackConfig = {
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
          'style-loader',
          { loader: 'css-loader', options: { url: false } },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CnameWebpackPlugin({
      domain: 'www.eddy.com.au',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.join(__dirname, './src/static'), to: '.' }],
    }),
    ...pages.map((page) => {
      const dirname = 'dirname' in page ? page.dirname : './';
      const filename = 'filename' in page ? page.filename : 'index.html';
      const pageTitle = page.title.toTitleCase();

      return new HtmlWebpackPlugin({
        inject: 'body',
        filename: dirname + filename,
        template: path.join(__dirname, './src/html/index.html'),
        templateParameters: {
          namespace,
        },
      });
    }),
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
      ...commonWebpackConfig,
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
    ...commonWebpackConfig,
    mode: 'production',
    output: {
      filename: 'js/app.js',
      publicPath: 'https://www.eddy.com.au',
    },
  };
};
