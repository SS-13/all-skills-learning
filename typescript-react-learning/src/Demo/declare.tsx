import React, {
  MouseEvent,
  ReactChildren,
  ReactChild,
  ReactNode,
  CSSProperties,
  FormEventHandler,
} from "react";

export declare interface AppProps {
  onClick(event: MouseEvent<HTMLButtonElement>): void;
  // 不好，单一的元素，不考虑数组
  children1: JSX.Element;
  // 不接收字符串
  children2: JSX.Element | JSX.Element[];
  // ReactChildren不是类型，是实用程序
  children3: ReactChildren;
  // 接受子数组
  children4: ReactChild[];
  // 推荐
  children: ReactNode;
  functionChildren: (name: string) => ReactNode;
  // css in js
  style?: CSSProperties;
  // react 表单事件
  onChange: FormEventHandler<HTMLInputElement>;
  // 传递props, 明确不转发类型ref
  props: React.ComponentPropsWithoutRef<"button">;
  //
}

// 实例演示
// type Props = {
//   children: React.ReactNode;
// };

// function Com({ children }: Props) {
//   return <div>{children}</div>;
// }

// function App() {
//   return <Com>{{}}</Com>;
// }

// console.log(App);

/* 
React.createElement创建的元素
React.ReactNode都可以支持

*/
// const App = (): JSX.Element => {
//   return <></>;
// };

// const App1 = (): React.ReactNode => {
//   return 11;
// };
