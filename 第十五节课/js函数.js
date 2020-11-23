//c语言
//int a = 123;

/*<!-- js里变量：var，let 常量：const
声明变量：var Apple = 20；
var lemon = “柠檬” ;
var banner = true；
var pear = null；
var orange = undefined;【var数字和字符串都可以赋值】-->
<!-- var peach = function peachSum(){} [function 函数] -->
<!-- var watermelon =  -->*/

//js 语言
//定义一个函数
//运行函数

let le = function banner(){
    console.log('banner')
}
le()

let le2 = function(){
    console.log('banner.le2')
}
le2()

function apple2(){
    let name = "apple2";
    function apple2son(){
        console.log("apple2son")
    }//定义函数
    apple2son()//调用函数
    return{
        apple2son:apple2son
    }
}
//apple2()//先调用母函数，子函数才能执行
apple2().apple2son()

var a1 = 123
var a2 = {}//{}为对象,语法糖，简写
console.log(typeof a1)
console.log(typeof a2)
var a3 = Object.create(null);

var a4 = function(){

}
//箭头函数
var a5 = (x,y)=>{
    console.log(x+y)
}
a5(5,4)
console.log(typeof a5)

var a5 = function apple5(){
    console.log('apple5');
    return 100;
}()
//apple5()
console.log(a5);

//闭包
//(function(){
   // console.log("江西软件大学")
//})()
(function(x,y){
    console.log("江西软件大学")
    console.log(x+y)
})(4,5)
//()(),前面定义函数，并执行，自我调用

//原型
var a7 = function(){
    console.log("a7 原型")
}
a7.prototype.apple = function(){
    console.log("apple");
}
a7.apple()


//原型
function Furit(){
    console.log("this is furit");
}
Furit.prototype.apple = function apple(){
    console.log("this ie apple");
}
var  a88 = new Furit();
console.log(a88)