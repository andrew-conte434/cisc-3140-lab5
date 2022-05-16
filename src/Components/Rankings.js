import React from "react";
import { useState, useEffect } from "react";
import CarRanked from './CarRanked'
import { Navigate, Link } from 'react-router-dom'


export default function Rankings() {

    const [rankings, setRankings] = useState([])

    useEffect(() => {
        async function fetchData(){
            const res = await fetch("http://127.0.0.1:5000/api/ranked", {mode : 'cors'})
            const obj = await res.json()
            setRankings(obj.data)
            console.log(rankings)
        }
        fetchData()
    }, [])


    return (
        <>
            <div className="homeButton">
                <Link to="/">
                    <button><span>Home</span></button>
                </Link>
            </div>
            <div className="rankings">
                <ul>
                {rankings.map(car => {
                    return (
                        <div className="list">
                            <li>
                                <CarRanked key = {car.Car_ID}
                                    id = {car.Car_ID}
                                    rank = {car.rank}
                                    year = {car.Year}
                                    make = {car.Make}
                                    model = {car.Model}
                                    score = {car.Car_Score}/>
                            </li>
                        </div>
                    )
                })}
                </ul>
            </div>
        </>
    )
}