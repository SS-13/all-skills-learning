import React, { useEffect } from "react";

const App = (props: { timerMs: number }): React.ReactNode => {
  const { timerMs } = props;
  useEffect(() => {
    setTimeout(() => {
      console.log("xx");
    }, timerMs);
  }, [timerMs]);

  return null;
};

export default App;
