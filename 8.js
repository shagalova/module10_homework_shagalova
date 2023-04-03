let arr = new Map();
  arr.set("key_1", "val_1");
  arr.set("key_2", "val_2");
  arr.set("key_3", "val_3");

console.log(arr.get("key_1"));
console.log(arr.get("key_2"));
console.log(arr.get("key_3"));

for (let name of arr.keys()) {
  console.log(name);
}
for (let val of arr.values()) {
  console.log(val);
}
for (let elem of arr) {
  console.log(elem);
}

arr.forEach((value, key, map) => {
  console.log(`Ключ - ${key}, значение - ${value}`);
});