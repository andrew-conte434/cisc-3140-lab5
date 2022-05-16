import { React, useState } from "react";
import { Link } from "react-router-dom";

export default function AddCar(){

    const [Timestamp, setTimestamp] = useState("")
    const [ID, setID] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [make, setMake] = useState("")
    const [model, setModel] = useState("")
    const [scores, setScores] = useState("")

    const[result, setResult] = useState("")
    const[error, setError] = useState(false)
    const[success, setSuccess] = useState(false)

    const handleSubmit = async() => {
        setTimestamp("5-11-2022 1:38")
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                Timestamp : {Timestamp},
                Email : {email},
                Name : {name},
                Year : {year},
                Make : {make},
                Model : {model},
                Car_ID : {ID},
                scores : {scores}
            })
        }
        const res = await fetch("http://127.0.0.1:5000/api/car", requestOptions)
        const obj = await res.json()
        if('err' in obj){
            setError(true)
            setResult(`Error: Could not add Car: ${ID} to database`)
        } else {
            setSuccess(true)
            setResult(`Success`)
        }
    }

    return (
        <div className="page">
            <div className="header">
                <h2>Enter New Car Information</h2>
            </div>
            <form className="form">
                <label htmlFor="ID">ID Number:</label>
                <input type="text" name="ID" onChange={(e) => setID(e.target.value)}/>
                <label htmlFor="Name">Owner Name:</label>
                <input type="text" name="Name" onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="year">Year:</label>
                <input type="text" name="year" onChange={(e) => setYear(e.target.value)}/>
                <label htmlFor="make">Make:</label>
                <input type="text" name="make" onChange={(e) => setMake(e.target.value)}/>
                <label htmlFor="model">Model:</label>
                <input type="text" name="model" onChange={(e) => setModel(e.target.value)}/>
                <label htmlFor="scores">Scores:</label>
                <input type="text" name="scores" onChange={(e) => setScores(e.target.value)}/>
                <p><strong>Enter scores separated by commas with no spaces</strong></p>
                <input 
                        type={"button"}
                        value={"Submit"}
                        onClick={handleSubmit}
                    />
            </form>
            <div className="result">
                {(error || success) && <h3>{result}</h3>}
            </div>
        </div>
    )
}