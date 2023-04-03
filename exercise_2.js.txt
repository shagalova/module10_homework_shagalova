let x;

if (typeof x === "number") {
  console.log ("x - число");
} else if (typeof x === "boolean") {
  console.log ("x - логический тип данных");
} else if (typeof x === "string") {
  console.log ("x - строка");
} else {
  console.log ("Тип x не определен");
}
