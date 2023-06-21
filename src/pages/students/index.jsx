import React from 'react'
import { useParams } from 'react-router-dom'
import './students.css'

import StudentStore from '../../services/contexts/StudentStore'
import Students from './Students'
import StudentRegistrations from './StudentRegistrations'

export default function index() {
    const { register } = useParams()

    return (
        <StudentStore>
            {register === undefined && < Students />}
            {register !== undefined && < StudentRegistrations />}
        </StudentStore>
    )
}