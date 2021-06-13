import React, {
  MouseEvent,
  FormEvent,
  ChangeEvent,
  SyntheticEvent,
} from "react";
const App = () => {
  return (
    <button onClick={(event: MouseEvent<HTMLButtonElement>) => {}}>test</button>
  );
};

const App1 = () => {
  // 大事件
  const onChange1 = (e: FormEvent<HTMLInputElement>) => {};
  // react 合成事件
  const onChange2 = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as typeof e.target;
    // target.addEventListener()
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
    </div>
  );
};
export default App;
