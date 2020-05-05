// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  webpack: (config, _options) => {
    config.entry.main = [
      './src/server.ts'
    ]

    config.resolve = {
      extensions: ['.ts', '.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
    config.optimization = {
      namedChunks: true,
      minimize: true,
      minimizer: [new TerserPlugin()]
    }

    config.module.rules.push(
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      }
    )

    return config
  }
}
