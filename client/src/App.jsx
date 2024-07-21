// import { lazy, Suspense } from "react";
import React from 'react';

import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Register from './components/register/Register';
import ErrorBoundary from './components/ErrorBoundary';
import RegisterCustomer from './components/register/RegisterCustomer';
import RegisterProvider from './components/register/RegisterProvider';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          <div id="box">
            <Header />
            {/* <Suspense fallback={<h1>Loading...</h1>}> */}
              <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.Register} element={<Register />} />
                <Route path={Path.RegisterCustomer} element={<RegisterCustomer />} />
                <Route path={Path.RegisterProvider} element={<RegisterProvider />} />
              </Routes>
            {/* </Suspense> */}
            <Home />
            <Footer />
          </div>
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
