function Pear(name,price,origin,weight){
    this.name=name,
    this.price=price,
    this.origin=origin,
    this.weight=weight;
    this.printName = function(){
        console.log("this is pear" + this.name)
    }

}
Pear.prototype.printName2 = function(){
    console.log("this is printName 2")
}
var p1 = new Pear("一号梨",12,"河南",10)
p1.printName()
p1.printName2()

// Pear.printName()
// Pear.printName2()