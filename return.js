function add(num1, num2){
    const total = num1+num2;
    return total;
}
const sum = add(10,40);
console.log(sum);

function add2(x,y,z){
    return x+y+z
}
const sum2 = add2(3,5,9);
console.log(sum2);

function doMath(sum1, sum2){
    const sum = sum1+ sum2;
    const diff = sum1 - sum2;
    const mult = sum * diff;
    const division = mult / 2;
    return division;
}
const result = doMath(10,5);
console.log(result);