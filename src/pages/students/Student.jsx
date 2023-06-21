import React, { useContext } from 'react'

export default function Student({ student }) {

    const { studentID, firstNameEN, lastNameEN, firstNameBN, lastNameBN, email, password, addressOne, addressTwo, city, state, zipCode, gender, mobile } = student

    return (<>
        <section className='bg-brand bg-brand-container'>
            <div className="container">
                <div className="row">
                    <div className="student-container col-lg-9">
                        <h1 className="mt-5 fs-4 student-container-title">Students</h1>
                        <div className="table-responsive pb-5">
                            <table className="table table-striped" style={{ border: '1px solid lightgrey' }}>
                                <thead style={{ backgroundColor: '#E9EEF4' }}>
                                    <tr className='text-center'>
                                        <th>Student ID</th>
                                        <th>First Name (English)</th>
                                        <th>Last Name (English)</th>
                                        <th>নামের প্রথম (বাংলা)</th>
                                        <th>নামের শেষ (বাংলা)</th>
                                        <th>Father's Name (English)</th>
                                        <th>বাবার নাম (বাংলা)</th>
                                        <th>Mother's Name (English)</th>
                                        <th>মায়ের নাম (বাংলা)</th>
                                        <th>Birth of Date</th>
                                        <th>Password</th>
                                        <th>Mobile</th>
                                        <th>Gender</th>
                                        <th>State</th>
                                        <th>City</th>
                                        <th>Email</th>
                                        <th>Nationality</th>
                                        <th>Address</th>
                                        <th>Zip Code</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='text-center'>
                                        <td className='bg-warning text-secondary'><a href="#">01</a></td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td><button className='btn btn-danger'>Remove</button></td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                        <td>Good</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className='btn btn-outline-danger'>Remove All Students</button>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-5 pb-2 d-none d-lg-block">
                        <div className='p-2 mt-2' style={{ border: '1px solid lightgrey' }}>
                            <h2 className="fs-5 text-center">
                                Sub Total: 33 Item(s)
                            </h2>
                            <h2 className="fs-5 text-center">
                                Price: 304 Taka
                            </h2>
                        </div>
                        <div style={{ border: '1px solid lightgrey' }} className="py-2">
                            <button className='btn btn-dark mx-auto d-block' disabled>Proced to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <h1 className='text-center display-1 mt-4 text-secondary bg-warning w-25 mx-auto d-block'>{studentID}</h1>
        <h4>
            <strong>Name </strong>
            <span>{firstNameEN + ' ' + lastNameEN}</span>
        </h4><hr />
        <h4>
            <strong>নাম </strong>
            <span>{firstNameBN + ' ' + lastNameBN}</span>
        </h4><hr />
        <h4>
            <strong>Email </strong>
            <span>{email}</span>
        </h4><hr />
        <h4>
            <strong>Password </strong>
            <span>{password}</span>
        </h4><hr />
        <h4>
            <strong>Address One </strong>
            <span>{addressOne}</span>
        </h4><hr />
        <h4>
            <strong>Address Two </strong>
            <span>{addressTwo}</span>
        </h4><hr />
        <h4>
            <strong>City </strong>
            <span>{city}</span>
        </h4><hr />
        <h4>
            <strong>State </strong>
            <span>{state}</span>
        </h4><hr />
        <h4>
            <strong>ZipCode </strong>
            <span>{zipCode}</span>
        </h4><hr />
        <h4>
            <strong>Gender </strong>
            <span>{gender}</span>
        </h4><hr />
        <h4>
            <strong>Mobile </strong>
            <span>{mobile}</span>
        </h4>
    </>)
}
