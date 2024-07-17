import { useState } from 'react';
import Burger from './Burger';
import ResetButton from './ResetButton';
import Navbar from './Navbar';

export default function Items()  {
  const [items, setItems] = useState([
    { name: 'Burger', count: 0 },
    { name: 'Pizza', count: 0 },
    { name: 'Rice', count: 0 },
  ]);


  const addCount = (name) => {
    console.log(name)
    setItems(foodItems =>
        foodItems.map(item => item.name === name ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const minusCount = (name) => {
  setItems(foodItems => 
    foodItems.map(item => item.name ===name && item.count > 0 ? {...item , count:item.count -1 } : item   ))
 }

  const deleteItem = (name) => {
    setItems(foodItems =>
        foodItems.filter(item => item.name !== name)
    );
  };
  const resetCounts = () => {
    setItems(foodItems =>
        foodItems.map(item => ({ ...item, count: 0 }))
    );
  };


  return (
    <>
      <Navbar itemCount={items.length}/>
      {items.map(item => 
        <Burger name={item.name} count={item.count} 
        addCount={() => addCount(item.name)} deleteItem={() => deleteItem(item.name)} 
        minusCount={() => minusCount(item.name)}/>
      )}
      <ResetButton resetCounts={resetCounts} />
    </>
  );
}