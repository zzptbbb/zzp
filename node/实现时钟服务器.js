// 导入需要的模快
// 创建基本的服务器
// 将请求的url映射为本地文件的存放路径
// 读取文件类容并响应个客户端
// 优化请求路径
const fs = require('fs')
const http = require('http')
const { join } = require('path')
const path = require('path')
const serve = http.createServer()
serve.on('request', (req, res) => {
    const fapath = join(__dirname, req.url)
    console.log(fapath);
    fs.readFile('fapath', 'utf8', (err, data) => {
        if (err) {
            return res.end('<h1>404</h1>')
        } 
        res.end(data)
    })

})
serve.listen(8080, () => {
    console.log('启动服务器成功');
})
