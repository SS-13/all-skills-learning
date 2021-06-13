const data2 = {
  a: 3,
  hello: "World",
};

// function get2(o: object, name: string) {
//   return o[name];
// }

function get2<T extends object, K extends keyof T>(o: T, name: K) {
  return o[name];
}

const result3 = get2(data2, "hello");

let s3 = "111";
//1.  <string>s3 = s3.toString()

//2. 声明接口

interface A2 {
  <T>(age: T): void;
}

type Test1 = <T>(arg: T) => number;

const getData1: A2 = <T>(age: T): void => {
  console.log(age);
};

const getData3: Test1 = <T>(age: T): number => {
  return <number>(age as unknown); // 双重断言
};

getData1<string>("");

// const s4: Test1 = (age: number) => {
//   return age + 1;
// };

// s4(1);

interface A3 {
  test<T>(age: T): void;
}
class YiDeng1 implements A3 {
  test<T>(age: T): void {
    console.log(age);
  }
}

const yd2 = new YiDeng1();
yd2.test(12);
