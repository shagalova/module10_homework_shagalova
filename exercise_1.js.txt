let num = prompt ("Введите число", "");
num = + num;
console.log (typeof (num) === "number");
if (isNaN(num)) {
  alert ("Упс, кажется, вы ошиблись");
} 
if (typeof (num) !== "number") {
  alert ("Упс, кажется, вы ошиблись");
}
else if (num / 2 === 0) {
  console.log ("ноль");
}
else if (num % 2 === 1 || num % 2 === -1) {
  console.log ("нечетное");
}
else {
  console.log ("четное");
}
