import React, { useEffect, useState } from 'react'
import './homePageCard.scss'

function HomePagecards() {
    const [fetchData, setFetchData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3100/")
            .then((res) => res.json())
            .then((data) => setFetchData(data))
    }, [])

    return (
        <div className='homePage_cards'>
            {fetchData.map((x) => (
                <div className="card">
                    <ul key={x._id}>
                        <li className='image'> <img src={x.image} alt="img" /></li>
                        <li>name:{x.name}</li>
                        <li>price:{x.price}$</li>
                        <li>year:{x.year} </li>
                    </ul>
                    <div className="add_and_like">
                        <div className="add"><i class="fa-brands fa-shopify"></i></div>
                        <div className="add"><i class="fa-regular fa-eye"></i></div>
                        <div className="add"><i class="fa-regular fa-heart"></i></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default HomePagecards