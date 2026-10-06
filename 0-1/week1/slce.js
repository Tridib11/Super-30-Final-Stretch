function cutIt(str, startIndex, endIndex) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i < endIndex) {
      newStr += str[i];
    }
  }
  return newStr;
}

let value = "Tridib Ghosh";

console.log(value.slice(1, 6));
console.log(cutIt(value, 1, 6));
