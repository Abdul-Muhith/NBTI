import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './OfficeMain.css'

export default function index() {
    const [officeButtons, setOfficeButtons] = useState([
        { id: 1, button: 'register', title: 'Register', bg: 'bgFour btn mb-1' },
        { id: 2, button: 'payment', title: 'Payment', bg: 'bgThree btn mb-1' },
        { id: 3, button: 'others', title: 'Others', bg: 'bgTwo btn mb-1' }
    ])
    {/* <Link to='others' className="bgThree btn mb-1">Others</Link> */ }
    {/* <Link to='payment' className="bgTwo btn mb-1">Payment</Link>  */ }

    return (
        <div className="d-flex border py-3 px-2">
            <div>
                <div className="top-left-btn">
                    {officeButtons.map((officeButton) => {
                        const { id, button, title, bg } = officeButton
                        return <Link key={id} to={button} state={{ id, title, button }} className={bg}>{title}</Link>
                    })}
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
    )
}
