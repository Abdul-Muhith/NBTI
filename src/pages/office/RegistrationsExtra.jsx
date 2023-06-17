import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './office.css'

import OfficeMain from '../../components/office/OfficeMain'
import CourseName from './CourseName'

export default function OfficeButtons() {
    const { register } = useParams()

    return (<>
        <div className="col-md-12 col-lg-6 mb-3">
            <OfficeMain />
        </div>

        <div className="col-md-12 col-lg-6 mb-3">
            <div className="border py-3 px-2">
                {register === 'register' && <CourseName />}
                {register === 'payment' && <h1>Payment Section</h1>}
                {register === 'others' && <h1>Others Section</h1>}
            </div>
        </div>
    </>)
}