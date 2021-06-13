/*
ConstructorParameters => 类构造函数的、参数类型的元组

Exclude => 从另一个类型中排除了一个类型

Extract => 选择给可分配给另一个类型的子类型

InstanceTypes => 获取构造函数的实例类型

NonNullable => 从类型中排除null和undefined

Parameters => 函数参数类型的元组

Partial => 将对象中的所有属性设为可选

Readobly => 使对象中的所有属性为只读

ReadonlyArray => 制作给定类型的不可变数组

Pick => 从一个复合类型中，取出几个想要的类型组合

Record => 从键类型到值类型的映射

Required => 将对象中所有属性设为必需

ReturnType => 获取函数类型的返回类型

*/

interface User {
  id: number;
  age: number;
  name: string;
}
// Partial => 将对象中的所有属性设为可选
type PartialUser = Partial<User>;

// Required => 将对象中所有属性设为必需
type PullDownRefresh = Required<PartialUser>;

// Pick => 从一个复合类型中，取出几个想要的类型组合
type PickUser = Pick<User, "id" | "age">;

// 排除掉一些字段
type OmitUser = Omit<User, "id" | "age">;

// Exclude => 从另一个类型中排除了一个类型
type A1 = Exclude<"x" | "a", "x" | "y" | "z">;

type Select = "id" | "age";
type PartialSelect = Partial<Pick<User, Select>>;
type OmitSelect = Omit<User, Select>;

type Final = PartialSelect & OmitSelect;
const s2: Final = {
  name: "一灯",
  age: 32,
};

// 让部分可选，再让部分不可选
type SelectPartial<T, V extends keyof T> = Partial<Pick<T, V>> & Omit<T, V>;
type Final2 = SelectPartial<User, "id" | "age">;

interface FirstType {
  id: number;
  firstName: string;
  lastName: string;
}

interface SecondType {
  id: number;
  address: string;
  city: string;
}

// Extract => 选择给可分配给另一个类型的子类型
type ExtractType = Extract<keyof FirstType, keyof SecondType>;
type ExcludeType = Exclude<keyof FirstType, keyof SecondType>;

// Record => 从键类型到值类型的映射
// 将属性K 对应的T 转化为U
interface ProductIncart {
  id: number;
  name: string;
  label?: string;
}

type Product = ProductIncart[];

interface Test {
  [key: string]: ProductIncart;
}

class CarModel {
  products: Record<string, ProductIncart> = {
    laoyuan: {
      id: 20,
      name: "yideng",
    },
  };
}
