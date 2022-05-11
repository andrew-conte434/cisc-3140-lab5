import React from 'react'

export default function CarRanked(props) {
    return (
        <div className="car">
            <div className="car-details">
                <ul>Rank: {props.rank}</ul>
                <ul>ID: {props.id}</ul>
                <ul>Model: {props.year} {props.make} {props.model}</ul>
                <ul>Overall Score: {props.score}</ul>
            </div>

        </div>
    )
}