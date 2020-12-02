+function lichee(){
    console.log("this is lichee");
}()
//lichee()
//li()

-function haw(){
    console.log("this is haw")
}()
//报错时，在前面加上+，-，！，void

let h2 = !function(){
    console.log("this is h2")
    return 0;//false
}()
//!表否定,变成布尔类型函数
console.log(h2)