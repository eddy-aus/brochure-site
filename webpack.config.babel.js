// import CnameWebpackPlugin from 'cname-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { namespace } from './src/config';

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
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    // new CnameWebpackPlugin({
    //   domain: 'www.example.com',
    // }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.join(__dirname, './src/public'), to: '.' }],
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      inject: 'body',
      template: path.join(__dirname, './src/html/index.html'),
      templateParameters: {
        namespace,
        title: 'Welcome | Eddy Australia',
      },
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
        contentBase: path.join(__dirname, './dist'),
        port: 3000,
      },
      mode: 'development',
      output: {
        filename: 'js/app.js',
      },
    };
  }

  return {
    ...commonWebpackConfig,
    mode: 'production',
    output: {
      filename: 'js/app.js',
      publicPath: '.',
    },
  };
};
