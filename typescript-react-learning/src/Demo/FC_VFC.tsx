import React, { FC, VFC } from "react";
type AppProps = {
  message: string;
};

const App1 = ({ message }: AppProps) => <div>{message}</div>;
const App2 = ({ message }: AppProps): JSX.Element => <div>{message}</div>;
const App3 = ({ message }: { message: string }): JSX.Element => (
  <div>{message}</div>
);
console.log(App3);
const App4: FC<AppProps> = ({ message: string }) => <div>message</div>;

// VFC 不带children
// const App5: VFC<AppProps> = ({ message: string, children }) => (
//   <div title={message}>{children}</div>
// );
