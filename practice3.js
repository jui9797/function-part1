/**
 * Task-3:
Write a function to count the number of vowels in a string.
 */
function countVowel(string){
    let count =0;
    for(let item of string){
        // console.log(item)
        if(item ==='a' || item === 'e' || item === 'i' || item === 'o' || item === 'u'){
            count++;
        }
    }
    return count;
}
const string ='hi i am web developer'
const vowelCount =countVowel(string);
console.log(vowelCount)