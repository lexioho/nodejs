function hello() {
    console.log('Hello, world!');
}

function greet(name) {
    console.log('Hello, ' + name + '!');
}

exports.hello = hello;
exports.greet = greet;
// 代码可以执行，但是模块并没有输出任何变量:
// exports = {
//     hello: hello,
//     greet: greet
// };