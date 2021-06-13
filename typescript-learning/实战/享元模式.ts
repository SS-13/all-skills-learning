// 享元模式 SOLID
interface Shape {
  draw(): void;
}

// 创建实现接口的实体类
class Circle implements Shape {
  private color: string;
  private x: number = 0;
  private y: number = 0;
  private radius: number = 0;

  constructor(color: string) {
    this.color = color;
  }

  public Circle(color: string) {
    this.color = color;
  }

  public setX(x: number): void {
    this.x = x;
  }
  public setY(y: number): void {
    this.y = y;
  }
  public setRadius(radius: number): void {
    this.radius = radius;
  }

  public draw(): void {
    console.log(this.color, this.x, this.y, this.radius);
  }
}

// 创建一个工厂，生成基于给定信息的实体类的对象
class ShapeFactory {
  private static circleMap = new Map<string, Shape>();

  public static getCircle(color: string): Shape {
    let circle: Circle = <Circle>this.circleMap.get(color);

    if (circle === null) {
      circle = new Circle(color);
      this.circleMap.set(color, circle);
      console.log("创建了圆", color);
    }

    return circle;
  }
}

// 圆的类 -> 黑圆、蓝圆 curry('color')(x,y)
class FlyweightPatternDemo {
  private static colors: string[] = ["red", "green", "blue", "white", "black"];
  constructor() {
    for (let i = 0; i < 20; ++i) {
      const circle: Circle = <Circle>(
        ShapeFactory.getCircle(FlyweightPatternDemo.getRandomColor())
      );
      circle.setX(FlyweightPatternDemo.getRandomX());
      circle.setY(FlyweightPatternDemo.getRandomY());
      circle.setRadius(100);
      circle.draw();
    }
  }

  private static getRandomColor(): string {
    return this.colors[Math.ceil(Math.random() * this.colors.length - 1)];
  }

  private static getRandomX(): number {
    return Math.random() * 100;
  }
  private static getRandomY(): number {
    return Math.random() * 100;
  }
}

new FlyweightPatternDemo();
