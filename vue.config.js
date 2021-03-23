module.exports = {
  // 访问的路径
  publicPath: '/',
  lintOnSave: true,
  // 打包后的文件
  outputDir: process.env.outputDir,
  // 静态资源 js css img fonts
  assetsDir: 'static',
  // 制定index.html文件输出路径
  indexPath: 'index.html',
  // 是否开启文件哈希
  filenameHashing: true,
  chainWebpack: (config) => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach((item) => {
      item
        .use()
        .loader('sass-loader')
        .end();
    });
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 20, // 换算的基数
            // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
            //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
            selectorBlackList: ['weui', 'mu'],
            propList: ['*'],
          }),
        ],
      },
    },
  },
};
