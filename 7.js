let arr = [1,5,0,"ono",false,8,10,true,3,15];
let arrNumber = arr.filter(function (arr) {
  if (Number.isFinite(arr)) {
    return true
  }
});
console.log(arrNumber);

let arrOdd = arrNumber.filter(function (n) {
  return n % 2 === 1
});
console.log(arrOdd);
console.log("Количество нечетных - " + arrOdd.length);

let arrEven = arrNumber.filter(function (n) {
  
  return n % 2 === 0 && n !==0
});
console.log(arrEven);
console.log("Количество четных - " + arrEven.length);

let arrZero = arrNumber.filter(function (n) {
  
  return n ===0; 
});
console.log(arrZero);
console.log("Количество нулей - " + arrZero.length);
