import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './office.css'

import OfficeMain from '../../components/office/OfficeMain'

export default function index() {

    return (
        <div className="col-md-6 col-lg-4  mb-3">
            <OfficeMain />
        </div>
    )
}
