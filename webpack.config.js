module.exports = {
    mode: 'development',
    entry: './Website/static/js/index.js',
    output: {
        publicPath: 'http://127.0.0.1:8080/'
    },
    devServer:{
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
    },
    module: {
        rules: [
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          // {
          //   test: /\.(jpg|png)$/,
          //   use: {
          //     loader: 'url-loader',
          //   },
          // },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          // {
          //   test: /\.(jpe?g|png|gif|svg)$/i, 
          //   loader: 'file-loader',
          //   options: {
          //     name: '/public/icons/[name].[ext]'
          //   }
          // }
        ],
    },
    resolve: {
      extensions: ['*', '.js']
    },  
}