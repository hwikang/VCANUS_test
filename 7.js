function factorial(num){   
    if(num<2) return 1;
    if(num>10000) return "number is too big"
    return num * factorial(num-1);
}


let result = factorial(10001);
console.log(result)
