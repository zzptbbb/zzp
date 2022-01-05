//常见基本服务器
// 1.导入http模块
// 2.创建web服务器实例
// 3.绑定request时间监听客户端请求
// 4.启动服务器
const http = require('http')
const serve = http.createServer();
serve.on('request', (req,res) => {
    // console.log(req.url,req.method);
    res.setHeader('Content-Type','text/html;charset=utf-8')//解决中文乱码
    res.end('解决中文乱码')//向客户端响应类容
})
serve.listen(8080, () => {
    console.log('启动服务器成功');
})
