import React from 'react'

export default function Student(props) {
    return (
        <div>
            <ul>
                <li>Name : {props.name}</li>
                <li>Phone : {props.phone}</li>
            </ul>
        </div>
    )
}
