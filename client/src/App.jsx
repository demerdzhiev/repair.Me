import { useState } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
