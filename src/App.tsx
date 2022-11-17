import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { AuthProtect } from './components/ForgotPassword/AuthProtect';
import { Layout } from './components/layout';
import { Cources } from './components/Courses';
import { LayoutAuth } from './components/LayoutAuth';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ForgotPassword } from './components/ForgotPassword';
import { ResetPassword } from './components/ForgotPassword/ResetPassword';
import { Home } from './components/Home';
import { ErrorPage } from './components/Err';
import Messenger from './components/Messenger';
import DetailCourse from './components/Courses/DetailCourse';
import './App.css';

function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<AuthProtect><Layout /></AuthProtect>}> */}
      <Route path={'/'} element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='cources'  >
          <Route path='' element={<Cources />} />
          <Route path='detail/:id' element={<DetailCourse />} />
        </Route>
        <Route path='messenger' element={<Messenger />} />

        <Route path='*' element={<ErrorPage />} />
      </Route>
      <Route path='account' element={<LayoutAuth />}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='reset-password' element={<ResetPassword />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>

    </Routes>

  );
}

export default App;
