import React, { useContext } from 'react'

import { StudentContext } from '../../services/contexts/StudentContext'
import Student from './Student'

export default function Students() {
    const { students } = useContext(StudentContext)

    return (
        <>
            {students.map((student) =>
                < Student key={new Date().getTime().toString()} student={student} />
            )}
        </>
    )
}
