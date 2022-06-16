const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    configureWebpack:{
        resolve: {
            // 别名配置
            alias: {
                "@": resolve("src"),
            }
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 37.5,
                        propList: ['*']
                    })
                ]
            }
        }
    },
}
