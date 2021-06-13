const DEV1: unique symbol = Symbol("dev");
const PROD1: unique symbol = Symbol("prod");

const obj = {
  [DEV]: 30,
};

function showWarning(msg: string, mode: typeof DEV1 | typeof PROD1) {
  console.log(mode.description, msg);
}
