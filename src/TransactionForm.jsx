import React, { useState } from 'react'

function TransactionForm({ hasChange, setHasChange }) {

    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "",
        amount: 0
    })

    function handleChange (event) {
        setFormData ({...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        if (formData.amount !== 0) {
            fetch ("http://localhost:3000/transactions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            setFormData({
                date: "Enter Date..",
                description: "Enter Description..",
                category: "Enter Category..",
                amount: 0
            })
            setHasChange(() => !hasChange)
        })
        }
    }

  return (
    <div style={{background:"grey", padding:"25px"}}>
        <h1 style={{background:"purple", paddingBlock: "20px"}}>BANK OF FLATIRON</h1>
        <h3 style={{color:"green", fontSize:"25px"}}>Enter New Transaction</h3>
        <form id="form-for-new" onSubmit={handleSubmit}>
            <input
             type='date'
              name='date'
               value={formData.date}
                onChange={handleChange}
                 placeholder='Enter Date'
                 style={{height: "50px"}} />
                 <br/>
            <input
             type='text'
              name='description'
               value={formData.description}
                onChange={handleChange}
                 placeholder='Enter Description'
                 style={{height: "50px"}}/>
                 <br/>
            <input
             type='text'
              name='category'
               value={formData.category}
                onChange={handleChange}
                 placeholder='Enter Category'
                 style={{height: "50px"}}/>
                 <br/>
            <input
             type='text'
              name='amount'
               value={formData.amount}
                onChange={handleChange}
                 placeholder=''
                 style={{height: "50px"}} />
                 <br/>
                 <br/>
            <button id="submit" type='submit' style={{background:"green" , fontSize:"25px" , padding:"20px"}}>Add Transaction</button>
        </form>
    </div>
  )
}

export default TransactionForm
