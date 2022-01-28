// level {2}
// level {2}
// Question 1
 
const removeEvenNumberInArray = (arr)=>{
    return arr.filter(n => n%2 !== 0)
}

const oddNumbersInArray = removeEvenNumberInArray([2,4,7,9,11,14,15])
console.log(oddNumbersInArray);

 // Question 2
 function UpperCase(str){
     let result = str.length
     for (let i = 0; i < result; i++){
         if (
             str[i] === 'a' ||
             str[i] === 'e' ||
             str[i] === 'i' ||
             str[i] === 'o' ||
             str[i] === 'u' 
         ){
             document.write(str[i].toUpperCase())
         }else {
            document.write(str[i])
         }
     }

 }

 var str = "sadafandjavascript"

// Question 3
var array = [2,87,5,89,15,110]
var largest = array[0]
for (i=0; i<= array.length; i++){
    if(largest < array[i]){
         largest = array[i]
    }
}

console.log(largest);
 

