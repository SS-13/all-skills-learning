// 1.不要去混淆es6中 =>
// : (x: number, y: number) => number
let myNum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// 2.函数默认参数
function buildName(firstName: string, lastName: string = "Cat") {
  return firstName + lastName;
}

// 3.剩余参数
function push(array: any[], ...items: any[]): void {
  items.forEach((item) => {
    array.push(item);
  });
}

let a = [4];
push(a, 1, 2, 3);
console.log("a:", a);

// 4.可选参数
function buidlName2(lastName: string, firstName?: string) {
  if (firstName) {
    return firstName + lastName;
  } else {
    return lastName;
  }
}

const tom = buidlName2("Tom", "cat");
const tom2 = buidlName2("Tom");

// 函数
() => {};
Function;

// es代码块 对象 函数
{
};
