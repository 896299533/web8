function $(x){
    if (typeof x == "string"){
        let  targets = window.document.getElementsByTagName(x)
        if(targets.length>0){
            let  array = targets;
            for (let  index = 0; index < array.length;index++){
                    const element = array[index];
                    element.style.backgroundColor="red"
                }
        }
    }
}
$("div")