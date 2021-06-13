// 基础类型
// 不要为了类型而类型
let isDone: boolean = false;
let num: number;
num = 0;
let hexLiteral: number = 0xf00d;
let myName: string = "Sam Shen";

// javascript:void(0);
let unusable: void = undefined;

function alertName(name: string): string {
  return "测试" + name;
}
function alertName1(name: string): void {
  alert("测试" + name);
}

// 类型推断
function getString(something: string | number): string {
  return something.toString();
}

// 枚举:一些固定参数集合
enum Days {
  Sun = 7,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

// console.log(Days["Sun"], Days[9]);

interface Person {
  readonly id: number;
  uname?: string;
  age: number;
  [propName: string]: any;
}

const shen: Person = {
  id: 33,
  age: 32,
};

shen["30"] = "xx";

// type
