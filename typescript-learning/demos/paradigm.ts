// 1. 范型
interface LengthWise {
  length: number;
}

function identity<T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const result = identity<string>("测试");
console.log(result);

// 2. 类型 实体类
class GenericNumber<T> {
  zeroValue: T | undefined;

  add: ((x: T, y: T) => T) | undefined;
}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
console.log(myGenericNumber.add(30, 50));

// 3.函数重载
function add(...rest: number[]): number;
function add(...rest: string[]): string;
function add(...rest: any[]) {
  let first = rest[0];
  if (typeof first === "number") {
    return rest.reduce((pre, cur) => pre + cur);
  }
  if (typeof first === "string") {
    return rest.join("");
  }
}

console.log(add(1, 2));
console.log(add("1", "2", "3"));

// 范型重载
function getData<T>(value: T): T {
  return value;
}
getData<number>(123);
getData<string>("123");

// 4. 范型接口
interface ConfigFn {
  <T>(value: T): void;
}

const getData2: ConfigFn = function <T>(value: T): void {
  console.log(value);
};

getData2<string>("1");

// 5. 范型动态数据
interface Bookmark {
  msg: string;
}
class BookmarksService<T extends Bookmark> {
  items: T[] = [];
}

class BookmarksService2<T extends Bookmark = Bookmark> {
  items: T[] = [];
}
// const s = new BookmarksService2();

// 6. 小彩蛋
// 'readonly' type modifier is only permitted on array and tuple literal types
// let err1: readonly Set<number>;
// let err2: readonly Array<number>;
let ok1: readonly boolean[];
let ok2: readonly [number, string];
