import React, { useState } from 'react'
import './addPage.scss'
import { Link, useNavigate } from 'react-router-dom'

function AddPage() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [year, setYear] = useState("")
    function addToHomePage() {
        fetch("http://localhost:3100/", {

            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                name: name,
                price: price,
                year: year
            }),

        })
        navigate("/")
    }

    return (
        <div className='addpage'>
            <div className='addpage_head'>

                <Link to={"/add"}>home</Link>
            </div>
            <h1> ADD PAGE</h1>
            <div>
                <form onSubmit={addToHomePage}>

                    <input type="text" placeholder='add name' onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder='add price' onChange={(e) => setPrice(e.target.value)} />
                    <input type="text" placeholder='year' onChange={(e) => setYear(e.target.value)} />
                    <button>Add</button>
                </form>

            </div>
        </div>

    )
}

export default AddPage