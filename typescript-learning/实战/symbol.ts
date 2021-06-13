const PROD: unique symbol = Symbol("pro mode");
const DEV: unique symbol = Symbol("dev mode");

function showWarning(msg: string, mode: typeof PROD | typeof DEV) {
  console.log(mode.description);
}

showWarning("出错了", PROD);
