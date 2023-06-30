import React, { useState } from 'react'

export default function StudentInfo() {
    const [basicInfo, setBasicInfo] = useState(false)
    const [educationalInfo, setEducationalInfo] = useState(false)
    const [contactInfo, setContactInfo] = useState(false)
    const [commercialInfo, setCommercialInfo] = useState(false)

    const handleBasicInfo = () => {
        setBasicInfo(!basicInfo)
        setEducationalInfo(false)
        setContactInfo(false)
        setCommercialInfo(false)
    }
    const handleEducationalInfo = () => {
        setEducationalInfo(!educationalInfo)
        setBasicInfo(false)
        setContactInfo(false)
        setCommercialInfo(false)
    }
    const handleContactInfo = () => {
        setContactInfo(!contactInfo)
        setBasicInfo(false)
        setEducationalInfo(false)
        setCommercialInfo(false)
    }
    const handleCommercialInfo = () => {
        setCommercialInfo(!commercialInfo)
        setBasicInfo(false)
        setEducationalInfo(false)
        setContactInfo(false)
    }

    return (
        <section className='bg-brand bg-brand-container'>
            <div className="container pt-1">
                <h1 className='mt-5 fs-4 text-center'>Student Details</h1>

                <div className="row mt-5 justify-content-center align-items-center">

                    <div className="col-lg-4">
                        <img
                            src='https://i.ibb.co/XSbS8Nf/earphone.jpg'
                            style={{ borderRadius: '1rem', boxShadow: '0 5px 15px #c4c4c44d' }}
                            className='img-fluid mx-auto d-block mb-3'
                            width={250} alt='Student Image'
                        />
                        <div className="d-flex justify-content-center align-items-center">
                            <button onClick={() => navigate('/students/studentid')} className='btn btn-dark mt-2 fw-bold'>Eddit Info</button>
                            <button onClick={() => navigate('/students/studentid')} className='btn btn-success mt-2 ms-2'>Make Payment</button>
                        </div>
                    </div>

                    <div className="col-lg-8 mb-3">
                        <div className="bg-white p-5 mt-4 mx-auto" style={{ borderRadius: '1rem', boxShadow: '0 5px 15px #c4c4c44d' }} >
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className='col-lg-4 col-md-7 mx-1 fs-5 fw-bold'>Basic Information</h3>
                                    <button onClick={handleBasicInfo} className='col-lg-3 col-md-5 col-sm-8'>{basicInfo ? 'Hide' : 'Show'}</button>
                                </div>
                                <hr className='mb-1' />

                                {basicInfo &&
                                    <section className="programs-card px-1 d-flex justify-content-around">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12 d-flex align-items-center">
                                                <div className="">
                                                    <span className='pe-2 text-danger'>FullName</span>
                                                </div>
                                                <div className="pt-3">
                                                    <h2 className='fs-6'>Student's Name BN</h2>
                                                    <h2 className='fs-6'>Student's Name EN</h2>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 d-flex align-items-center">
                                                <div className="">
                                                    <span className='pe-2 text-danger'>Father</span>
                                                </div>
                                                <div className="pt-3">
                                                    <h2 className='fs-6'>Father's Name BN</h2>
                                                    <h2 className='fs-6'>Father's Name EN</h2>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 d-flex align-items-center">
                                                <div className="">
                                                    <span className='pe-2 text-danger'>Mother</span>
                                                </div>
                                                <div className="pt-3">
                                                    <h2 className='fs-6'>Mother's Name BN</h2>
                                                    <h2 className='fs-6'>Mother's Name EN</h2>
                                                </div>
                                            </div>

                                            <div className="col-md-4 col-sm-12 d-flex align-items-center">
                                                <div className="">
                                                    <span className='pe-2 text-danger'>Payments</span>
                                                </div>
                                                <div className="pt-3">
                                                    <h2 className='fs-6'>Due Fee</h2>
                                                    <h3 className="fs-6">5000</h3>
                                                    <h2 className='fs-6'>Payable Fee</h2>
                                                    <h3 className="fs-6">13000</h3>
                                                </div>
                                            </div>

                                            <div className="col-md-4 col-sm-12 d-flex align-items-center">
                                                <div className="">
                                                    <span className='pe-2 text-danger'>Course Info</span>
                                                </div>
                                                <div className="pt-3">
                                                    <h2 className='fs-6'>Start Date</h2>
                                                    <h3 className="fs-6">12 July, 2021</h3>
                                                    <h2 className='fs-6'>Duration</h2>
                                                    <h3 className="fs-6">2 Years only</h3>
                                                </div>
                                            </div>

                                            <div className="col-md-4 col-sm-12 d-flex align-items-center">
                                                <div className="">
                                                    <span className='pe-2 text-danger'>Certificate</span>
                                                </div>
                                                <div className="pt-3">
                                                    <h2 className='fs-6'>Close Date</h2>
                                                    <h3 className="fs-6">12 July, 2024</h3>
                                                    <h2 className='fs-6'>Status</h2>
                                                    <h3 className="fs-6">Not Received Yet</h3>
                                                </div>
                                            </div>

                                            <div className="col-md-4 col-sm-12 d-flex align-items-center">
                                                <div className="">
                                                    <span className='pe-2 text-danger'>Contacts</span>
                                                </div>
                                                <div className="pt-3">
                                                    <h2 className='fs-6'>District, Thana</h2>
                                                    <h3 className="fs-6">District, District Sadar</h3>
                                                    <h2 className='fs-6'>Post Office, Village</h2>
                                                    <h3 className="fs-6">Post Bazar, Uttora</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                }
                            </div>
                            <div className='mt-4'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className='col-lg-5 col-md-7 fs-5 fw-bold'>Educational Information</h3>
                                    <button onClick={handleEducationalInfo} className='col-lg-3 col-md-5 col-sm-8'>{educationalInfo ? 'Hide' : 'Show'}</button>
                                </div>
                                <hr className='mb-1' />

                                {educationalInfo &&
                                    <p style={{ textAlign: 'justify' }} className='fs-6'>product.description The main compartment of a backpack typically has two large compartments, and these are often separated by a thin divider. There are also pockets on the outside of the bag, which can be used for carrying smaller items. Some backpacks also have a separate compartment for storing a laptop. A backpack is a type of bag that can be used for hiking, traveling, or everyday use. The main compartment of a backpack typically has two large compartments, and these are often separated by a thin divider. There are also pockets on the outside of the bag, which can be used for carrying smaller items. Some backpacks also have a separate compartment for storing a laptop.</p>
                                }
                            </div>
                            <div className='mt-4'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className='col-lg-5 col-md-7 fs-5 fw-bold'>Contact Information</h3>
                                    <button onClick={handleContactInfo} className='col-lg-3 col-md-5 col-sm-8'>{contactInfo ? 'Hide' : 'Show'}</button>
                                </div>
                                <hr className='mb-1' />

                                {contactInfo && <p style={{ textAlign: 'justify' }} className='fs-6'>product.description The main compartment of a backpack typically has two large compartments, and these are often separated by a thin divider. There are also pockets on the outside of the bag, which can be used for carrying smaller items. Some backpacks also have a separate compartment for storing a laptop. A backpack is a type of bag that can be used for hiking, traveling, or everyday use. The main compartment of a backpack typically has two large compartments, and these are often separated by a thin divider. There are also pockets on the outside of the bag, which can be used for carrying smaller items. Some backpacks also have a separate compartment for storing a laptop.</p>}
                            </div>
                            <div className='mt-4'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className='col-lg-5 col-md-7 fs-5 fw-bold'>Commercial Information</h3>
                                    <button onClick={handleCommercialInfo} className='col-lg-3 col-md-5 col-sm-8'>{commercialInfo ? 'Hide' : 'Show'}</button>
                                </div>
                                <hr className='mb-1' />

                                {commercialInfo && <>
                                    <div className='text-danger'>
                                        <del>15000</del>
                                        <span className='fs-3'> 4500 TAKA </span>
                                        <span className='fw-bolder'>12000</span>
                                    </div>

                                    <p style={{ textAlign: 'justify' }} className='fs-6'>product.description The main compartment of a backpack typically has two large compartments, and these are often separated by a thin divider. There are also pockets on the outside of the bag, which can be used for carrying smaller items. Some backpacks also have a separate compartment for storing a laptop. A backpack is a type of bag that can be used for hiking, traveling, or everyday use. The main compartment of a backpack typically has two large compartments, and these are often separated by a thin divider. There are also pockets on the outside of the bag, which can be used for carrying smaller items. Some backpacks also have a separate compartment for storing a laptop.</p>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Review /> */}
                <section className='mt-5 py-5'>
                    <h2 className='fs-4'>Reviews</h2>
                    <div className="container">
                        <div className="col-md-6">
                            <h3 className='fs-6'>Payable Fee: 12500 Taka</h3>
                            <h3 className='fs-6'>Due Amount: 8000 Taka</h3>
                            <h3 className='fs-6'>
                                Description:
                                <span className='text-success fw-bolder'> Good</span>
                                <span className='fw-bolder' style={{ color: '#FFA00A' }}> not Good</span>
                                <span className='text-danger fw-bolder'> Bad</span>
                            </h3>
                            <hr />
                        </div>
                        <div className="">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor='notify' className="form-label fs-4">Write a Student Review</label>

                                    <input id='notify' type='text' className="form-control fs-4" placeholder='Enter a Specific Title' />
                                    <span className='text-danger'>This field is required</span>

                                    <div className='my-3'></div>

                                    <textarea name="" id="" cols="30" rows="10" className="form-control fs-4" placeholder='Type a Noticed Message to Students_Name about h/his assential status...' />
                                    <span className='text-danger'>This field is required</span>
                                </div>

                                <input className='button-brand w-25 d-block mx-auto' type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </section>

            </div>
        </section>
    )
}
