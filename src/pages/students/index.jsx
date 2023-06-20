import React from 'react'
import { useParams } from 'react-router-dom'
import './students.css'

import StudentStore from '../../services/contexts/StudentStore'
import Students from './Students'
import StudentRegistrations from './StudentRegistrations'

export default function index() {
    const { register } = useParams()

    return (
        <div className="col-md-12 col-lg-6 mb-3">
            <div className="border py-3 px-2">
                <StudentStore>
                    {register === undefined && < Students />}
                    {register !== undefined && < StudentRegistrations />}
                </StudentStore>
            </div>
        </div>
    )
}