import React, { useState } from 'react'
import Transaction from './Transaction'

function DisplayTransactions({transactions, hasChange, setHasChange}) {

  let count = 1;

  function handleDelete (event) {
    const id = event.target.id;
    fetch (`http://localhost:8000/transactions/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    }).then(res => res.json()).then(data => {
      setHasChange(() => !hasChange)
    })

}    

  return (
    <div style={{background:"black" , color:"white"}}>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return <Transaction key={transaction.id}
             handleDelete={handleDelete}
              count={count++}
               transaction={transaction} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayTransactions
