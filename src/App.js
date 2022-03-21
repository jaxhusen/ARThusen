import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Startsida from "./components/Startsida"

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
        </Routes>
      </BrowserRouter>


      {/*             <BrowserRouter>
        <Header tasks={tasks} setTasks={setTasks} addProduct={addProduct}  />
        <Routes>
          <Route path="/products/:id" element={ <Product addProduct={addProduct} /> } />
          <Route path="/" element={ <Products addProduct={addProduct} /> } />
          <Route path="/Checkout" element={ <Checkout tasks={tasks} setTasks={setTasks} addProduct={addProduct} />} />
        </Routes>

        <Footer />
  </BrowserRouter> */}
    </div>
  );
}

export default App;
