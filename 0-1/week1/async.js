function findSum(n) {
  let ans = 0;
  for (let i = 0; i <= 100; i++) {
    ans += i;
  }
  return ans;
}

function findSumTill100() {
  let ans = findSum(100);
  console.log(ans);
}

setTimeout(findSumTill100, 2000);
console.log("Hello world");
