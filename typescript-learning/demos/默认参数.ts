type CoreIconName = "user" | "customer";

const opts: CoreIconName = "user";

type LiteralUnion<T extends U, U = string> = T | (U & {});
interface GreetSettings {
  greeting: string;
  duration: number;
  color?: false;
}

type Color = LiteralUnion<"red" | "black" | keyof GreetSettings>;
const c: Color = "greeting";

type Tyd = string & {};
type TTest = "foo" | "bar";
const xx: TTest = "bar";
type TTest2 = ("hello" | "world") | (string & {});
const xx2: TTest2 = "";

export { TTest };
