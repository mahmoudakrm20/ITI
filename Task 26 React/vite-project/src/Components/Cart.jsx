import React from 'react'

export default function Cart({  items}) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.filter(item => item.isInCart)
              .map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
