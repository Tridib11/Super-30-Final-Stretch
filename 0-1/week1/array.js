const personArray=["Tridib","Rohan","Lalu"]
const genderArray=["male","male","female"]
const numberOfArrays=personArray.length;

for(let i=0;i<numberOfArrays;i++){
  if(genderArray[i]=="male"){
    console.log(personArray[i])
  }
}