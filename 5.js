let arr = [1,2,3,3,2];

console.log(arr.length);

let result = arr.map(function(item, index, array) {
  return item
});
console.log(result);

for (let i=0; i<arr.length; i++){
  console.log(arr[i]);
}