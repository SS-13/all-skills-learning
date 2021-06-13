// 类型不同是元组，类型相同是数组

// 数组
let arr: number[] = [1, 3, 4];
let arr2: Array<number> = new Array(4);
let arr3 = new Array<number>(5);
// console.log(arr2, arr3);
interface NumberArray {
  [index: number]: number;
}
let arr4: NumberArray = [1, 2, 3];

// 类数组
function sum() {
  let args: IArguments = arguments;
  // args.callee();
}

// 元组
// let arrAny: any[] = [1, "测试"];
let tuple: [number, string, boolean] = [1, "测试", false];

// 区别
function useFetch() {
  const response: string = "三双试试";
  const age: number = 30;
  return tuplify(response, age);
  //   return [response, age];
}

function tuplify<T extends unknown[]>(...elements: T): T {
  return elements;
}

// const [response] = useFetch();
