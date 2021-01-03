module.exports = {
    configureWebpack: {
        resolve: {
            //extensions: [], //配置可以省略的文件后缀名
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'common': '@/common',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}