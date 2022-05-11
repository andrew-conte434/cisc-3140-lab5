import React from 'react'
import Car from './Car'
import AddCar from './AddCar'
import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'

export default function Home() {

    const [input, setInput] = useState("")
    const [results, setResults] = useState([])

    const handleSubmit = async () => {
        let res
        isNaN(input) ? res = await fetch(`http://127.0.0.1:5000/api/make/${input}`, {mode : 'cors'}) :
                        res = await fetch(`http://127.0.0.1:5000/api/${input}`, {mode : 'cors'})
        const obj = await res.json()
        console.log(obj.data)
        setResults(obj.data)
    }

    return (
        <div className="page">
            <div className="menu">
                <Link to="/rankings">
                    <button>View Rankings</button>
                </Link>
                <Link to="/addCar">
                    <button>Add a Car</button>
                </Link>
                <button>Update Owner</button>
                <button>Delete a Car</button>
            </div>
            <div className="searchBar">
                <form className="form">
                    <input placeholder="search by ID or make"
                            type="text"
                            onChange={(e)=>setInput(e.target.value)}/>
                    <input 
                        type={"button"}
                        value={"Search"}
                        onClick={handleSubmit}
                    />
                </form>
            </div>
            <div className="cars">
                <ul>
                {results.map(car => {
                    return (
                        <div className="list">
                            <li>
                                <Car key = {car.ID}
                                    year = {car.Year}
                                    make = {car.Make}
                                    model = {car.Model}
                                    name = {car.Owner_Name}/>
                            </li>
                        </div>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}