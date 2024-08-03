import React from 'react';

import { AuthProvider } from "./contexts/authContext";
import Path from "./paths";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import ErrorBoundary from './components/ErrorBoundary';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import ServiceList from './components/service-list/ServiceList';
import ServiceCreate from './components/service-create/ServiceCreate';
import ServiceDetails from './components/service-details/ServiceDetails';
import ServiceEdit from './components/service-edit/ServiceEdit';
import AuthGuard from './components/common/AuthGuard';


function App() {
  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          <div id="box">
            <Header />
              <Routes>
                <Route path={Path.Home} element={<Home />} />
                <Route path={Path.Register} element={<Register />} />
                <Route path={Path.Logout} element={<Logout />} />
                <Route path={Path.Login} element={<Login />} />
                <Route path={Path.Services} element={<ServiceList />} />
                <Route path={Path.ServiceDetails} element={<ServiceDetails />} />
                <Route path={Path.ServiceEdit} element={<ServiceEdit />} />
                <Route element={<AuthGuard />}>
                <Route path={Path.ServicesCreate} element={<ServiceCreate />} />

                </Route>
              </Routes>
            <Footer />
          </div>
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
