import React, { useState } from 'react';
// import NewProduct from './components/NewProduct';

import Products from './projects/components/products';
import NewProduct from './projects/components/newProduct';
import A from './Testing/a'
import C from './Testing/c'
import App2 from './app2';
import Counter from './Testing/Counter'
import data from './projects/Tours/data'
import Tours from './projects/Tours/Tours';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Sirf Excel', 
      amount: 200, 
      date: new Date(2021, 2, 2) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    }
  ];

  function ProductData(data) {
    console.log("iam inside app.js")
    console.log(data)

  }

  
  return (
    <div className='app'>
    {/* //   <NewProduct newprod = {ProductData}></NewProduct>
    //   <Products items={products} />
    //   <App2></App2>  */}
      <A></A> 
      {/* <C></C> */}
      {/* <Counter></Counter> */}
    </div>
  );
  }


export default App;