module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/curryblog'
        : '/'
    ,
    productionSourceMap: false,
    transpileDependencies: [
        /\bvue-awesome\b/
      ]
}
