/*

1.  !  非空断言操作符
2.  ?. 可选链
3.  ?? 空值合并运算符
4.  ?: 可选属性
5.  &  多种类型叠加
6.  |  多种类型中的一种
7.  _  数字分隔符如1_464_301
8.  <> Typescript泛型
9.  @  装饰器语法
10. #  类的私有字段
11. -? 移除了可选属性中的 `?`

*/

// 1.  !  非空断言操作符
function nonEmptyAssertion(maybeString: string | undefined | null): void {
  const onlyString: string = maybeString;
  const ignoreUndefinedAndNull: string = maybeString!;
}

// 2.  ?. 可选链
// ?. 和 && 区别 ： ?. 只判断 undefined和null，&&（与运算） 专门用于检测 falsy 值
function getElement<T>(arr?: T[], index: number = 0) {
  return arr?.[index];
}
// const elements: number | undefined
const elements = getElement<number>();

// 3.  ?? 空值合并运算符
const foo = null ?? "default string"; // default string
const bar = 0 ?? 42; // 0

// 4.  ?: 可选属性
interface optionalAttributes {
  greetWord: string;
  maybe?: string;
}

// 5.  &  多种类型叠加
type PointX = { x: number };
type PointY = { y: number };
type Point = PointX & PointY;
const point: Point = { x: 1, y: 1 };

// 6.  |  多种类型中的一种
type Gender = "Male" | "Female";
const sex: Gender = "Male";

// 7.  _  数字分隔符如1_464_301
const myPhoneNumber: number = 134_824_37881;

// 8.  <> Typescript泛型
function myTuplify<T extends unknown[]>(...elements: T): T {
  return elements;
}

// 9.  @  装饰器语法
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class Greeter {
  property = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter("world"));

// 10. #  类的私有字段
// #和private区别
class Person {
  public name: string = "Sam Shen";
  private email: string = "samfec@163.com";
  #age: number = 32;

  getAge(): number {
    return this.#age;
  }

  getEmail(): string {
    return this.email;
  }
}

// 11. -? 移除了可选属性中的 `?`
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

interface IUser {
  name: string;
  age: number;
  department: string;
}

type optionalUser = Partial<IUser>;
type mustUser = MyRequired<optionalUser>;
type testUser = Required<Partial<IUser>>;
