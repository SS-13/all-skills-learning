class User {
  constructor(public name: string) {}
}

interface IConstruct<T extends new (...args: any[]) => any> {
  // 核心
  // ioc装载到容器中的话 校验
  type: new (...args: ConstructorParameters<T>) => InstanceType<T>;
}

type UserConstruct = IConstruct<typeof User>;
const constr: UserConstruct = {
  type: User,
};

// constr.type => new (name: string)=> User
const userInstance = new constr.type("京城一灯");

console.log(userInstance.name);
