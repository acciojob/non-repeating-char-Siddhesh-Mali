function firstNonRepeatedChar(str) {
    // Write your code here
    let character ;
    for(let chara of str){
        let count = 0;
        for(let i=0; i<str.length;i++){
            if(str.charAt(i)==chara){
                count++;
            }
        }
        if(count==1){
           character = chara;
        }
    }
    return character;
   }
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
