// 1

let data = [
  ["The", "red", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Chocolate", "ice", "cream", "is", "awesome"],
  ["this", "is", "a", "long", "sentence"],
];

function groupeWords(array) {
  let res = [];
  array.forEach((element) => {
    res.push(element.join(" "));
  });
  console.log(res);
}

// groupeWords(data);

// 2

function Calculator() {
  this.calc = function (first, second, operator) {
    switch (operator) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "/":
        return first / second;
      case "*":
        return first * second;
      default:
        return "invalid opertator";
    }
  };
  return this.calc;
}

let newCalq = new Calculator();
// console.log(newCalq(1, 2, "+"));
// 3

let duplicate = [1, 2, 3, "a", "a", "f", 3, 4, 2, "d", "d"];

function removeDups(arr) {
  let res = arr.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
  });
  console.log(res);
}

// removeDups(duplicate);

//4

let arr = [
  { name: "Alice", job: "Data Analyst", country: "AU" },
  { name: "Bob", job: "Pilot", country: "US" },
  { name: "Lewis", job: "Pilot", country: "US" },
  { name: "Karen", job: "Software Eng", country: "CA" },
  { name: "Jona", job: "Painter", country: "CA" },
  { name: "Jeremy", job: "Artist", country: "SP" },
];

// 5

function reversing(str) {
  let splited = str.split(".");
  let res = [];
  for (let i = splited.length - 1; i >= 0; i--) {
    res.push(splited[i]);
  }
  let finalRes = res.join(".");
  console.log(finalRes);
}

// reversing("i.like.this.program.very.much");
