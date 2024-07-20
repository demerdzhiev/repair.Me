import { useState } from "react";
import "./App.css";
import Header from "./components/header";


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
