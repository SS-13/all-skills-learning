import "reflect-metadata";
// 通过装饰器生成ioc

function inject(serviceIdentifier: string) {
  return function (target: Object, targetKey: string, index: number) {
    Reflect.defineMetadata(serviceIdentifier, "老袁666", target);
  };
}

class IndexController {
  public indexService: string;
  constructor(@inject("xxx") indexService: string) {
    this.indexService = indexService;
  }
}

// IOC注入
const indexController = new IndexController("京城一灯");
console.log("🐻", indexController.indexService);
// JavaScript元编程
console.log("🍎", Reflect.getMetadata("xxx", IndexController));
