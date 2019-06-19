
function curry(){
    return (function resolver(){
        let arr = Array.prototype.slice.apply(arguments)
        p(arr)
        return function(){
            let innerArr = arr
            Array.prototype.push.apply(innerArr,arguments);
            return resolver.apply(null,innerArr)
        }
    })();
}

var addString = curry()
addString("This")("is")("a")("programming")("test") 
function p(arr){
    let text ="";
    arr.forEach(p=>text+=p+" ")
    console.log(text)
}