// function getLength(str: string | number): number {
//   return
// }

// 类型断言
function getLength2(str: string | number): number {
  // if ((str as string).length) {
  if ((<string>str).length) {
    return (<string>str).length;
  } else {
    return str.toString().length;
  }
}

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

interface A {
  msg: string;
}
type B = {
  msg: string;
};
function helper(options: A): A {
  return options;
}

// const xxA: A = {};
// const xxB: B = {};
// interface Window {
//   a: number;
// }
// interface Window {
//   b: string;
// }

// const s: Window = "";
declare module "koa-swig" {
  interface Vue {
    a: number;
  }
  interface Vue {
    b: string;
  }
}
