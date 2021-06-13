class Demo {
  private num: number;
  #selfNum: number;
  constructor() {
    this.num = 20;
    this.#selfNum = 13;
  }
}
const s = new Demo();
console.log((s as any).num);
// console.log((s as any).#selfNum);
