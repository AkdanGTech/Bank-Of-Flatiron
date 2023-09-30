import React, { useState } from 'react'

function Transaction({ transaction, handleDelete, count }) {

    const {id, date, description, category, amount} = transaction;

  return (

    <tr style={{background:"black" , color:"white"}}>
      <td>{count}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td><button id={id} onClick={handleDelete}>Delete</button></td>
    </tr>
    
  )
}

export default Transaction