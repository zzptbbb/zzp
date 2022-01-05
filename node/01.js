const fs = require('fs')
// fs.readFile('文件地址'[,可选读取格式],callback)
fs.readFile('./ind.text', 'utf-8', (err, su) => {
    // console.log(err,'---------',su);
})
// fs.writeFile('文件路径','写入的类容','写入的格式',callback)
fs.writeFile('./ind.txt', 'zzp', 'utf-8', (a, b) => {
    // console.log(a,b);
})
fs.readFile('./cheng.txt', 'utf-8', (err, dataStr) => {
    const newArr = dataStr.split(' ')
    const data = []
    newArr.forEach(val => {
        data.push(val.replace('=', ':'))
    })
    const str = data.join(' ')
    // console.log(str);
    fs.writeFile('./cg.txt', str, (e, s) => {
        // console.log(e, s);
    })
})
const path = require('path')
// path.join([...path]) 路劲拼接
const pathname = path.join('/a', '/b', '../')
console.log(pathname);
// path.join()
// 获取路径中最后一部分
const fapanem = './asd/sad/fff.html';
const aa = path.basename(fapanem, '.html')//获取文件名去除扩展名
const bb = path.extname(fapanem)//获取文件扩展名
console.log(bb);
