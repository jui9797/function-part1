/**
 * Task-4:
Write a function to find the longest word in a given string.
sample-input: I am learning Programming to become a programmer
sample-output: Programming
 */
const sentence ='I am learning Programming to become a programmer'
const word =longest(sentence);
console.log(word);

function longest(sentence){
    const word2 =sentence.split(' ')
    // console.log(word2);
    let longestWord ='';
    for(let word of word2){
        // console.log(word);
        if(word.length > longestWord.length){
            longestWord =word;
        }
    }
    return longestWord;
}



function longer(sentence2){
    const word3 =sentence2.split(' ')
    console.log(word3)
    let longWord ='';
    for(let word of word3){
        if(word.length > longWord.length){
            longWord =word;
        }
    }
   return longWord;
}
const sentence2 ='we are learning web development';
const long =longer(sentence2);
console.log(long);

