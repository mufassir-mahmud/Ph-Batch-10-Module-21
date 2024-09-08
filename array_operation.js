// function sumOfArray(numbers){
//     let sum = 0
//     for(const number of numbers){
//        sum = sum + number
//     }
//     return sum
// }

// const numOfArray = [11,22,33,44,55];
// const result = sumOfArray(numOfArray)
// console.log(result);

// function evenOfArray(numbers){
//     const evens = []
//     for(const number of numbers){
//         if(number % 2 === 0){
//             evens.push(number)
//         }
//     }
//     return evens
// }

// const numOfArray = [11,22,33,44,55,66];
// const even = evenOfArray(numOfArray)
// console.log(even);

function evenOfArray(numbers){
    let sumOfEvens = 0
    for(const number of numbers){
        if(number % 2 === 0){
            sumOfEvens = sumOfEvens + number;
        }
    }
    return sumOfEvens
}

const numOfArray = [11,22,33,44,55,66];
const result = evenOfArray(numOfArray)
console.log(result);