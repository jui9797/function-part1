/**Task-1:
Write a function to convert temperature from Celsius to Fahrenheit. */
function converter(number){
    const fahrenhite =(number*9/5) +32;
    return fahrenhite
}
const celcious =56;
const fahren =converter(celcious);
console.log(`${celcious} degree celcious is equal to ${fahren} degree fahrenhite.`)