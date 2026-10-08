const users='{"name":"Tridib","age":24,"gender":"male"}'

const user=JSON.parse(users)
console.log(user)
console.log(user["gender"])

const user2=JSON.stringify(users)
console.log(user2)

