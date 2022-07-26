const path = require("path");
module.exports = {
    //入口 
    entry: "./src/main.js",
    // 输出
    output: {
        // 文件输出路径所有文件打包目录
        path: path.resolve(__dirname, 'dist/js'),//绝对路径
        filename: "js/main.js",//入口文件打包名
        clean:true,//打包前将path整个目录清空，自动清空上次打包类容
    },
    // 加载器
    module: {
        rules: [
            //loader的配置
            {
                test: /\.css$/,//只检查.css文件
                use: [//执行顺序重下到上 重右到左
                    "style-loader", //将js通过css创建的style标签添加到html中
                    "css-loader"//将css资源编译为comminJS的模块到js中
                ],
            },
            {
                test: /\.less$/,
                // loader只能使用一个loader ，use可以使用多个
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {//打包图片优化
                test: /\.(png|jpe?g|webp|gif)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 // 小于10kb会转 优点：减少请求数量 缺点：体积大一点
                    }
                },
                //修改打包图片的名称地址 
                // [hash:10]名字去前十位
                generator: {
                    filename: 'static/images/[hash:10][ext][query]'
                  }
            },
              {//打包图片优化
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource',
             
                //修改打包图片的名称地址 
                // [hash:10]名字去前十位
                generator: {
                    filename: 'static/media/[hash:10][ext][query]'
                  }
            },
        ],
    },

    // 插件
    plugins: [
        // plugin的配置
    ],
    // 模式
    mode: 'development'
}