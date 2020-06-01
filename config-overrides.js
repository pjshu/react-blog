const rewireReactHotLoader = require('react-app-rewire-hot-loader');


module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  config.resolve.alias = {
    ...config.resolve.alias,
    'react-dom@experimental': '@hot-loader/react-dom',
  };
  console.log(config)
  config.optimization = {
    ...config.optimization,
    splitChunks: {
      ...config.optimization.splitChunks,
      minSize: 0,
      maxAsyncRequests: 5,   // 按需加载时候最大的并行请求数
      cacheGroups: {
        vendors: {// 项目基本框架等
          test: /\/(react|react-dom|react-router-dom|axios|use-methods)[\\/]/i,
          chunks: 'all',
          name: 'common',
          priority: 11,
          reuseExistingChunk: true,
        },
        common: { // 打包两个页面的公共代码
          minChunks: 2, // 引入两次及以上被打包
          name: 'common', // 分离包的名字
          chunks: 'all',
          priority: 8,
        },
      }
    }
  };
  return config;
};
