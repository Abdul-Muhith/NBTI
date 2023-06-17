import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './office.css'

import CourseName from './CourseName'

export default function OfficeButtons() {
    const { register } = useParams()

    return (<>
        <div className="col-md-12 col-lg-6 mb-3">
            <div className="d-flex border py-3 px-2">
                <div>
                    <div className="top-left-btn">
                        <Link to='/office/register' className="bgFour btn mb-1">Register</Link>
                        <Link to='/office/payment' className="bgTwo btn mb-1">Payment</Link>
                        <Link to='/office/others' className="bgThree btn mb-1">Others</Link>
                        <div className="search-box">
                            <label className="form-label">search</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                </div>
                <div>
                    <p><input type="checkbox" /> OFFICE</p>
                    <p><input type="checkbox" /> HOUSE</p>
                    <p><button className="bgOne btn search-box-btn">Print&Save</button></p>
                </div>
            </div>
        </div>

        <div className="col-md-12 col-lg-6 mb-3">
            <div className="border py-3 px-2">
                {register === 'register' && <CourseName />}
                {register === 'payment' && <h1>Comming Soon<strong> Payment</strong></h1>}
                {register === 'others' && <h1>Comming Soon<strong> Others</strong></h1>}
            </div>
        </div>
    </>)
}