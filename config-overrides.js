const rewireReactHotLoader = require('react-app-rewire-hot-loader');
// const path = require('path');


module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  config.resolve.alias = {
    ...config.resolve.alias,
    // 'immutable': path.resolve(process.cwd(), 'node_modules', 'immutable'),
    'react-dom@experimental': '@hot-loader/react-dom',
  };
  return config;
};
