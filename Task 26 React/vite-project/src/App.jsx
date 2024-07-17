import './App.css';
import About from './Components/About';
import { Routes, Route } from 'react-router-dom';
import Company from './Components/Company';
import Team from './Components/Team';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import Menu from './Components/Menu';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    {
      id: '1',
      name: 'Large Burger',
      isInCart: false,
      count: 1,
      price: 90,
    },
    {
      id: '2',
      name: 'Large Fries',
      isInCart: false,
      count: 1,
      price: 50,
    },
    {
      id: '3',
      name: 'Large Water',
      isInCart: false,
      count: 1,
      price: 30,
    },
    {
      id: '4',
      name: 'Medium Burger',
      isInCart: false,
      count: 1,
      price: 70,
    },
    {
      id: '5',
      name: 'Medium Fries',
      isInCart: false,
      count: 1,
      price: 40,
    },
    {
      id: '6',
      name: 'Medium Water',
      isInCart: false,
      count: 1,
      price: 20,
    },
    {
      id: '7',
      name: 'Small Burger',
      isInCart: false,
      count: 1,
      price: 50,
    },
    {
      id: '8',
      name: 'Small Fries',
      isInCart: false,
      count: 1,
      price: 20,
    },
    {
      id: '9',
      name: 'Small Water',
      isInCart: false,
      count: 1,
      price: 10,
    },
  ]);

  const addToCart = (id) => {
    setItems((cart) =>
      cart.map((item) =>
        item.id === id ? { ...item, isInCart: !item.isInCart } : item
      )
    );
    console.log(items);
    
  };

  const cartItem = items.filter((item) => item.isInCart);
  

  return (
    <>
      <Navbar cartItem={cartItem} itemsNum={items.length} />
      <Routes>
        <Route path="/cart" element={<Cart  items={items}/>} />
        <Route path='/menu' element={<Menu addToCart={addToCart} items={items} />}/>
        <Route path="/about" element={<About />}>
          <Route path="team" element={<Team />} />
          <Route path="Company" element={<Company />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
