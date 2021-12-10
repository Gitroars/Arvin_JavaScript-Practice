const digitalDecipher = (eMessage,key)=>{
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
let resultNumber = [];
let keyIndex = 0;
let stringKey = key.toString();

let decodedMessage = "";



 for (let i=0;i<eMessage.length;i++){
     
     resultNumber.push(eMessage[i]-stringKey.charAt(keyIndex));
     keyIndex++;
     if(keyIndex==stringKey.length){
         keyIndex=0;
     }
    
 }
 
 for (let i=0;i<resultNumber.length;i++){
     let numIndex = number.indexOf(resultNumber[i]);
     let decodedAlphabet = alphabet[numIndex];
     decodedMessage += decodedAlphabet;
 }
 return decodedMessage;
}
console.log(digitalDecipher([20, 12, 18, 30, 21], 1939));
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)) ;
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100));