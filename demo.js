 // filter案例:选出数组中大于五的数  filter 接收两个参数，并最终返回一个新的数组。filter 的两个参数分别是：
// 第一个是回调函数。回调函数有三个参数分别当前的元素、当前元素的索引、原数组，可以在回调函数中进行一些操作，从而判断是否要保留这个元素，如果要保留，则回调函数需要返回 true ，反之则返回 false
// 在上面的代码中，只要当前的元素大于 5 ，item > 5 就会返回 true ，从而将该值保留，因此将原数组过滤后的新数组是 [6, 8, 9]
// 第二个参数用于指定回调函数执行时，this 的指向。上面的代码中并没有设置该参数，因此在回调中打印 this 时，其指向为 window 对象


//  let arr = [5, 6, 8, 10, 24];
//  let bigThanEightArr = arr.filter((item, index, arr) => {
// //  console.log(item, index, arr);
//  return item > 6
//  }, this);
//  console.log(bigThanEightArr); //[8,10,24]

//filter巧妙的去重
 var arr = ['A', 'B', 'A'];
 var r = arr.filter(function (element, index, self) {
     console.log(element); // 依次打印'A', 'B', 'C'
     console.log(index); // 依次打印0, 1, 2
     console.log(self); // self就是变量arr
     return self.indexOf(element) === index;//if 等于index说明第一次出现反之值是重复出现的数据
 
 });
 console.log(r);


 
//  js新语法 双问号语法
// ​ 在双问号的左边如果是null，undefined时，就返回右边的值，如果没有就返回左边的值。
const foo = null ?? 'my school';
// 输出: "my school"

const baz = 0 ?? 42;
// 输出: 0
var map = L.map('map').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);
