const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const {useBabelRc, override} = require('customize-cra');


module.exports = override(
  useBabelRc()
);
