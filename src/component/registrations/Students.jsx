import React from 'react'
import Student from './Student'

export default function Students(props) {
    return (
        <div>
            {props.students.map((student, index) => (
                < Student
                    key={index}
                    name={student.name}
                    phone={student.phone}
                />
            ))}
        </div>
    )
}
