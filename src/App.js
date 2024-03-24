// App.js
import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import customTheme from './theme';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashboardPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/join' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;