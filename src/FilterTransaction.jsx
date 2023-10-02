import React, { useState } from 'react'

function FilterTransaction({ setTransactions }) {

    const [inputText,setInputText] = useState("Search..");

    function filterByDescription (event) {
        event.preventDefault();
        setInputText(event.target.value)
        fetch("http://localhost:8000/transactions")
        .then(res => res.json())
        .then(transactions => {
            setTransactions(transactions.filter((transaction) => {
                if ((transaction.description).toLowerCase()
                .includes(inputText.toLowerCase())
             || inputText === "" || inputText === "Search..") return true;
            })); 
        })
    }

  return (
    <div style={{background:"black",color:"white"}}>
        <h3>Filter By Description</h3>
        <form onSubmit={filterByDescription}>
            <input name='filter'
             onChange={filterByDescription}
              value={inputText}
              style={{height:"50px"}}/>
            <button id="filter-button" style={{background:"green" , fontSize:"20px" , padding:"10px"}}>Filter</button>
        </form>
    </div>
  )
}

export default FilterTransaction
