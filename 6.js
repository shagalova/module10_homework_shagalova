//let arr = [1,5,0,"ono",false,8,10,true,3,"ono",false,5,10];

let arr = [5,5,5,5,5,5];

let arrTheSame = arr.filter(function(item, index, array) {

  return array.indexOf(item) === index;
});

console.log(arrTheSame);

if (arrTheSame.length === 1) {
  console.log(true);
} else {
  console.log(false);
}

