import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './office.css'

export default function OfficeButtons() {

    return (
        <div className="col-md-6 col-lg-4  mb-3">
            <div className="d-flex border py-3 px-2">
                <div>
                    <div className="top-left-btn">
                        <Link to='register' className="bgFour btn mb-1">Register</Link>
                        <Link to='payment' className="bgTwo btn mb-1">Payment</Link>
                        <Link to='others' className="bgThree btn mb-1">Others</Link>
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
    )
}