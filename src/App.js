import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login'
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />}></Route>
            <Route  path="/main" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
