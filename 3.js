
let data =[1,1,3,5,5,5]

let sum = (x,y) => x+y;
//평균
let mean = data.reduce(sum)/data.length

//중간값
data.sort()
let median = 0;
if(data.length%2===0){
    median=(data[Math.floor(data.length/2)] + data[Math.floor(data.length/2)-1])/2
}else{
    median =data[Math.floor(data.length/2)]
}
//표준편차
let total = 0;
for(let i =0;i<data.length;i++){
    let deviation = mean - data[i];
    total +=deviation * deviation;
}
let stddev = Math.sqrt(total/data.length)

console.log(mean) //평균
console.log(median)//중간값
console.log(stddev)//표준편차
