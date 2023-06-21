import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

export default function index() {
    return (
        <div className="bg-brand bg-brand-container col-md-6 col-lg-4 mb-3">
            <div className="d-flex py-3 px-2">
                <div className="top-left-btn">
                    <Link to='register' className="bgFour btn mb-1">Register</Link>
                    <Link to='payment' className="bgTwo btn mb-1">Payment</Link>
                    <Link to='others' className="bgThree btn mb-1">Others</Link>
                    <div className="search-box">
                        <label className="form-label">search</label>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div>
                    <p><input type="checkbox" /> OFFICE</p>
                    <p><input type="checkbox" /> HOUSE</p>
                    <p><button className="bgOne btn search-box-btn">Print&Save</button></p>
                </div>
            </div>
            <h3 className="px-2 text-center text-danger display-1">
                <strong>
                    দৃশ্যমান PAGE টি অতি-শিঘ্রই আরও সুন্দর করে সা...জ...বে !!
                </strong>
            </h3>
        </div>
    )
}
