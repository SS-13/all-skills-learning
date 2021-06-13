/**
 * 1.抽象类可以具体实现，也可以定义抽象方法
 * 2.方法修饰符
 *      public 共有的，任何地方都可以访问到
 *      private 私有的，不能在类的外部使用
 *      protected 受保护的，能在子类中可以使用
 */
abstract class Animal {
  private age: number = 13;
  protected name: string = "旺财";
  abstract makeSounds(): void;
  public move(): void {
    console.log("动物移动");
  }
}

// 类即可是实体类，也可以是个类型
class Dog extends Animal {
  #region: string;
  private uname: string = "小白";
  constructor() {
    super();
    this.#region = "测试私有";
  }
  makeSounds() {
    console.log("汪汪汪");
  }
}

const dog: Animal = new Dog();
dog.move();
// dog.uname
console.log((dog as any).region);
// dog.makeSounds();

let animals: Animal[] = [dog];
