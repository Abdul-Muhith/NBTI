import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FindAstudent() {
    const navigate = useNavigate()

    return (
        <section>
            <div className="container my-5">
                <h1 className='fw-bold'>Find a Student</h1>
                <div className="programs-card py-3 my-5">

                    <div className="row">
                        <div className="col-md-1 ps-3">
                            <img className='img-fluid' src='https://i.ibb.co/XSbS8Nf/earphone.jpg' alt='Student Photo' />
                        </div>

                        <div className="col-md-7 p-3">
                            <h2 className='fs-5 fw-bold'>Khaled Saifullah</h2>
                            <h3 className='fs-6'>Community Paramedic</h3>
                        </div>

                        <div className="col-md-4 d-flex justify-content-around pt-3">
                            <button className='programs-apply-btn fw-bold'>Payment</button>
                            <button
                                onClick={() => { navigate('/students/studentId') }}
                                className='programs-details-btn fw-bold'
                            >Student Details</button>
                        </div>
                    </div>

                    <div className="row mt-3 ps-3">
                        <div className="col-md-1 text-center">
                            <strong className='text-danger'>Batch No.</strong> 01
                        </div>

                        <div className="col-md-2 d-flex align-items-center">
                            <div className="">
                                {/* <img src='' className='pe-2' alt='item name' /> */}
                                <span className='pe-2 text-danger'>Basic Info</span>
                            </div>
                            <div className="pt-3">
                                <h2 className='fs-6 fw-bold'>Father's Name</h2>
                                <h3 className="fs-6">Joynal Abedin</h3>
                                <h2 className='fs-6 fw-bold'>Mother's Name</h2>
                                <h3 className="fs-6">Rabiya Jannat</h3>
                            </div>
                        </div>

                        <div className="col-md-2 d-flex align-items-center">
                            <div className="">
                                <span className='pe-2 text-danger'>Payments</span>
                            </div>
                            <div className="pt-3">
                                <h2 className='fs-6 fw-bold'>Due Fee</h2>
                                <h3 className="fs-6">5000</h3>
                                <h2 className='fs-6 fw-bold'>Payable Fee</h2>
                                <h3 className="fs-6">13000</h3>
                            </div>
                        </div>

                        <div className="col-md-2 d-flex align-items-center">
                            <div className="">
                                <span className='pe-2 text-danger'>Course Info</span>
                            </div>
                            <div className="pt-3">
                                <h2 className='fs-6 fw-bold'>Start Date</h2>
                                <h3 className="fs-6">12 July, 2021</h3>
                                <h2 className='fs-6 fw-bold'>Duration</h2>
                                <h3 className="fs-6">2 Years only</h3>
                            </div>
                        </div>

                        <div className="col-md-2 d-flex align-items-center">
                            <div className="">
                                <span className='pe-2 text-danger'>Certificate</span>
                            </div>
                            <div className="pt-3">
                                <h2 className='fs-6 fw-bold'>Close Date</h2>
                                <h3 className="fs-6">12 July, 2024</h3>
                                <h2 className='fs-6 fw-bold'>Status</h2>
                                <h3 className="fs-6">Not Received Yet</h3>
                            </div>
                        </div>

                        <div className="col-md-3 d-flex align-items-center">
                            <div className="">
                                <span className='pe-2 text-danger'>Contacts</span>
                            </div>
                            <div className="pt-3">
                                <h2 className='fs-6 fw-bold'>District, Thana</h2>
                                <h3 className="fs-6">District, District Sadar</h3>
                                <h2 className='fs-6 fw-bold'>Post Office, Village</h2>
                                <h3 className="fs-6">Post Bazar, Uttora</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
