import React, { useRef, useEffect } from "react";

const App = (): React.ReactNode => {
  const divRef = useRef<HTMLDivElement>(null!);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    // if (!divRef.current) {
    //   throw new Error("对象不可用");
    // }
    intervalRef.current = setInterval(() => {}, 300);
    console.log(divRef.current.hidden);

    return () => clearInterval(intervalRef.current);
  });

  return <div ref={divRef}>etc</div>;
};

export default App;
