// 1.获取请求地址
// 2设置默认的响应类容401
// 3.判断是否为/或/indexedDB.html首页
// 4判断是否请求的是/about.html页面
// 5设置响应头防止乱码
// 6.设置响应类容
const http = require('http')
const serve = http.createServer();
serve.on('request', (req,res) => {
    // console.log(req.url,req.method);
    let content='<h1 style="color:red">401 NOt found</h1>'
    if(req.url=='/index'){
        content='<h1>index</h1>'
    }
    res.setHeader('Content-Type','text/html;charset=utf-8')//解决中文乱码
    res.end(content)//向客户端响应类容
})
serve.listen(8080, () => {
    console.log('启动服务器成功');
})