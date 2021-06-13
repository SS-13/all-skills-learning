import React, { useState } from "react";

interface IUser {}

const App = () => {
  const [val, toggle] = React.useState(false);
  // 复杂类型推倒
  const [user1, setUser1] = useState<IUser | null>(null);
  console.log(user1);

  const [user2, setUser2] = useState<IUser>({} as IUser);

  
};

export default App;
