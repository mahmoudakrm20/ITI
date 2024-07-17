import React from 'react';

export default function Burger({ name, count, addCount, deleteItem , minusCount }) {
  return (
    <div className='flex flex-row w-80 items-center justify-between mt-8 m-auto'>
      <h1 className='text-red-500'>{name}</h1>
      <p>{count}</p>
      <div>
        <button className='mr-6 btn bg-gray-300 text-black' onClick={addCount}>+</button>
        <button className='mr-6 btn bg-gray-300 text-black' onClick={minusCount}>-</button>

        <button className='btn bg-red-300 text-black' onClick={deleteItem}>Delete</button>
      </div>
    </div>
  );
}