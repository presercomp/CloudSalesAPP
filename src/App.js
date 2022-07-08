import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Sales from './components/Sales';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
      </Routes>
    </div>
  );
}

export default App;
