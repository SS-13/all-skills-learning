const data1 = {
  a: 3,
  hello: "world",
};

// function get(o: object, name: string) {
//   return o[name];
// }
// console.log(get(data1, "cc"));

function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}

console.log(get(data1, "hello"));
