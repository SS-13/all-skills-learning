const data: string = "京城一灯";
console.log(data);

const yd = (yideng: string, user: string) => {};
type Params = Parameters<typeof yd>;
const x = (...data: Params) => {
  const [yideng] = data;
  console.log(yideng, "yideng");
};

x("ceshi", "sam");
