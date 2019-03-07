const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addLessLoader
} = require('customize-cra')
const path = require('path')
const theme = require('./package.json').theme
module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@layouts': path.resolve(__dirname, 'src/layouts'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@wraps': path.resolve(__dirname, 'src/wraps'),
    '@store': path.resolve(__dirname, 'src/store'),
    '@containers': path.resolve(__dirname, 'src/containers'),
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'lib',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  })
)
