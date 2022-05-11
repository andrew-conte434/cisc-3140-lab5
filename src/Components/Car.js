import React from 'react'

export default function Car(props) {
    return (
        <div className="car">
            <div className="car-details">
                <ul>Model: {props.year} {props.make} {props.model}</ul>
                <ul>Owner Name: {props.name}</ul>

            </div>

        </div>
    )
}