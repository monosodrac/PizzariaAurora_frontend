import React from "react";
import Rotas from './Router'
import AuthProvider from './Contexts/authContexts'
import { ToastContainer } from 'react-toastify'

import "./Styles/main.scss"; 

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Rotas />
        <ToastContainer
          autoClose={5000}
        />
      </div>
    </AuthProvider>
  );
}