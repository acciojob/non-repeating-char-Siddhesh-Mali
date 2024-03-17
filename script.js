function firstNonRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const before = str.substring(0, i).indexOf(char);
      const after = str.substring(i + 1).lastIndexOf(char);
  
      if (before === -1 && after === -1) {
        return char;
      }
    }
  
    return "null";
  }

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
