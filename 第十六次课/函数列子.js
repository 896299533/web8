var pi = function pitaya(){
    console.log("我是火龙果")
}()

let pea1 = 'return' + '`我是一粒${name}`';
let peanut5 = new Function('name',pea1);
console.log(peanut5("花生"))
var peanut6 = function(name){
    return "我是一粒"+ name;
}