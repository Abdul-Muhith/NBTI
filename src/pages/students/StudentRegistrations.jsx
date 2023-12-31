import React from 'react'
import { Link, useParams } from 'react-router-dom'

import CourseNameRadio from '../../components/courses/CourseNameRadio'

export default function OfficeButtons() {
    const { register } = useParams()

    return (<>
        <div className="bg-brand bg-brand-container">
            <div className="display-office">
                <div className='col-md-6 col-lg-4 py-3 px-2'>
                    <div className="mb-3 d-flex">
                        <div className="top-left-btn">
                            <Link to='/office/register' className="bgFour btn mb-1">Register</Link>
                            <Link to='/office/payment' className="bgTwo btn mb-1">Payment</Link>
                            <Link to='/office/others' className="bgThree btn mb-1">Others</Link>
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
                </div>

                {register === 'register' && <CourseNameRadio />}
                {register === 'payment' && <h1>Comming Soon<strong> Payment</strong></h1>}
                {register === 'others' && <h1>Comming Soon<strong> Others</strong></h1>}
            </div>
        </div>
    </>)
}