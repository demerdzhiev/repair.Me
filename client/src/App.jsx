import { useState } from "react";

import { AuthProvider } from "./contexts/authContext";
import Path from './paths';

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthProvider>
        <Header />
        <Home />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
