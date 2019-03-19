const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader,
  addDecoratorsLegacy,
  overrideDevServer,
  watchAll
} = require('customize-cra')
const path = require('path')
const theme = require('./package.json').theme
module.exports = {
  webpack: override(
    addWebpackAlias({
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@services': path.resolve(__dirname, 'src/services')
    }),
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      libraryDirectory: 'lib',
      style: true,
      legacy: true
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: theme
    }),
    addDecoratorsLegacy({
      legacy: true
    })
  ),
  devServer: overrideDevServer(watchAll())
}
