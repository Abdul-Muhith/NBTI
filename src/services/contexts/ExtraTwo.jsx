import React, { useContext } from 'react'

import { StudentContext } from '../../services/contexts/StudentContext'
import Student from './Student'

export default function Students() {
    const { students } = useContext(StudentContext)
    let studentID = 0

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
                                        <th>Full Name (Bangla)</th>
                                        <th>Full Name (English)</th>
                                        <th>Father's Name (Bangla)</th>
                                        <th>Father's Name (English)</th>
                                        <th>Mother's Name (Bangla)</th>
                                        <th>Mother's Name (English)</th>
                                        <th>Sex</th>
                                        <th>Date of Birth</th>
                                        <th>National ID No.</th>
                                        <th>Passport No.</th>
                                        <th>Guardian's Name</th>
                                        <th>Relation to Guardian</th>
                                        <th>Quota</th>
                                        <th>Nationality</th>
                                        <th>Religion</th>
                                        <th>Merital Status</th>
                                        <th>E-mail Address</th>
                                        <th>Student's Mobile No.</th>
                                        <th>Present Village/House/Road</th>
                                        <th>Present Division</th>
                                        <th>Present District</th>
                                        <th>Present Thana/Upazilla</th>
                                        <th>Present Post Office</th>
                                        <th>Present Postal Code</th>
                                        <th>Permanent Village/House/Road</th>
                                        <th>Permanent Division</th>
                                        <th>Permanent District</th>
                                        <th>Permanent Thana/Upazilla</th>
                                        <th>Permanent Post Office</th>
                                        <th>Permanent Postal Code</th>
                                        <th>SSC/Equivalent College/University/Institution Name</th>
                                        <th>HSC/Equivalent College/University/Institution Name</th>
                                        <th>Bechelor's Degree College/University/Institution Name</th>
                                        <th>Masters College/University/Institution Name</th>
                                        <th>Mphil/Doctorate College/University/Institution Name</th>
                                        <th>SSC/Equivalent GPA/Class</th>
                                        <th>HSC/Equivalent  GPA/Class</th>
                                        <th>Bechelor's Degree GPA/Class</th>
                                        <th>Masters GPA/Class</th>
                                        <th>Mphil/Doctorate GPA/Class</th>
                                        <th>SSC/Equivalent Year</th>
                                        <th>HSC/Equivalent Year</th>
                                        <th>Bechelor's Degree Year</th>
                                        <th>Masters Year</th>
                                        <th>Mphil/Doctorate Year</th>
                                        <th>SSC/Equivalent Duration</th>
                                        <th>HSC/Equivalent Duration</th>
                                        <th>Bechelor's Degree Duration</th>
                                        <th>Masters Duration</th>
                                        <th>Mphil/Doctorate Duration</th>
                                        <th>SSC/Equivalent Country</th>
                                        <th>HSC/Equivalent Country</th>
                                        <th>Bechelor's Degree Country</th>
                                        <th>Masters Country</th>
                                        <th>Mphil/Doctorate Country</th>
                                        <th>ব্যাচ নং</th>
                                        <th>ভর্তির তাং</th>
                                        <th>সিরিয়াল নং</th>
                                        <th>ফরম নং</th>
                                        <th>ভর্তি ফি</th>
                                        <th>প্রশিক্ষণের মেয়াদ</th>
                                        <th>অধ্যক্ষের স্বাক্ষর</th>
                                        <th>ছাত্র-ছাত্রীর স্বাক্ষর</th>
                                        <th>Profile Photo</th>
                                        <th>Students Password</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {students.map((student) => (<>
                                        < Student
                                            key={new Date().getTime().toString()}
                                            student={student}
                                            studentID={studentID += 1}
                                        />
                                    </>))}

                                </tbody>
                            </table>
                            <button className='btn btn-outline-danger'>Remove All Students</button>
                        </div>
                    </div>

                    <div className="col-lg-3 mt-5 pt-4 d-none d-lg-block">
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

                    <div className="col-lg-3 mt-5 py-3 d-lg-none fixed-bottom bg-brand bxx-shadow">
                        <div className='p-2 mt-2' style={{ border: '1px solid lightgrey' }}>
                            <h2 className="fs-5 text-center">
                                Sub Total: 33 Item(s)
                            </h2>
                            <h2 className="fs-5 text-center">
                                Price: 304 Taka
                            </h2>
                        </div>
                        <div style={{ border: '1px solid lightgrey' }} className="py-2">
                            <button className='btn btn-dark mx-auto d-block'>Proced to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </>)
}
