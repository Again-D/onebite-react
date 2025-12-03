import "./App.css";

import Register from "./components/Register";

// 리렌더링이 진행되는 경우 세가지
// 1. state 값이 변경될 때
// 2. props 값이 변경될 때
// 3. 부모 컴포넌트가 리렌더링될 때

function App() {
  return (
    <>
      <Register />
    </>
  );
}

export default App;
