// <>(){};

let arr1: number[] = [1, 2, 3, 4, 5, 6];
let ar = new Array<number>(4);

function test1() {
  const response: string = "test";
  const age: number = 30;
  // return [response, age] as const;
  return tuplify(response, age);
}

const items = test1();

const [response] = items;

function useFetch() {
  return [];
}

function sum() {
  const args: IArguments = arguments;
}




