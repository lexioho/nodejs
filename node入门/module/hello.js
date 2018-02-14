var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}
greet('Michael')
// 模块抛出
module.exports = greet;