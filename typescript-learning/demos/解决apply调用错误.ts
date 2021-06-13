interface Cat {
  name: string;
}

const bobTheCat: Cat = {
  name: "Bob",
};

function printCatName(this: Cat) {
  console.log(this.name);
}

// function printCatName() {
//   console.log(cat.name);
// }

printCatName.apply(bobTheCat);

// printCatName(bobTheCat);

// console.log("printCatName", printCatName.apply(bobTheCat));
