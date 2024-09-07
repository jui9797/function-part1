/***
 * Task-2:
You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2
sample-input:
numbers = [5,6,11,12,98, 5]
find: 25
output: 0
 */

const numbers2 = [5,6,11,12,98, 5]
let find2 =25
const call2 =duplicate(numbers2, find2);
function duplicate(array, find2){
    let count =0;
    for(let item of array){
        if(item === find2){
            count++;
        }
    }
    return count;
}
console.log(call2)



const numbers = [5,6,11,12,98, 5]
let find =5
const call =duplicate(numbers, find);
function duplicate(array, find){
    let count =0;
    for(let item of array){
        if(item === find){
            count++;
        }
    }
    return count;
}
console.log(call)

