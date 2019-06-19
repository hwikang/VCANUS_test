var math ={
    value : 0,
    add : function(num){
        this.value = this.value + num
        return this
    },
    sub : function(num){
        this.value = this.value - num
        return this
    }
}

var result = math.add(4).add(5).sub(3).value
console.log(result)