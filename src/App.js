import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Startsida from "./components/Startsida"
import BildArray from './components/BildArray';

function App() {
  /* 
    const [tasks, setTasks] = useState([]); tom lista för varukorg
  
    const addProduct = (newProduct) => {
      const found = tasks.find(task => task.id === newProduct.id)
      if (found === undefined) {
        setTasks([
          ...tasks, en syssla i taget
          newProduct
        ]);
      } else {
        found.qty += newProduct.qty
      }
  } */





  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Startsida />} />
         {/*  <Route path="/PIXX" element={<BildArray />} /> */}
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
