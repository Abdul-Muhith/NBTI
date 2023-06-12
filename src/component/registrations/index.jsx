import React, { useState } from 'react'
import Students from './Students'
import NewStudent from './NewStudent'

const dummyStudents = [
    {
        name: 'Abdullah',
        phone: '01756894235'
    },
    {
        name: 'Saifullah',
        phone: '01723568945'
    }
]

export default function index() {
    // const [students, setStudents] = useState([dummyStudents])
    const [students, setStudents] = useState([])

    const handleNewStudent = (newStudent) => {
        // console.log(newStudent)
        // console.log(students)
        setStudents([...students, newStudent])
    }

    return (
        <div>
            {/* <Students students={dummyStudents} /> */}
            <NewStudent onNewStudent={handleNewStudent} />
            <Students students={students} />
        </div>
    )
}
