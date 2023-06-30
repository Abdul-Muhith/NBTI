import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { StudentContext } from '../../../services/contexts/StudentContext'

export default function StudentsPersonalInformations() {
    const navigate = useNavigate()

    const {
        students, setStudents,
        studentPersonalInformations, setStudentPersonalInformations
    } = useContext(StudentContext)

    const { id, fullNameBN, fullNameEN, fathersNameBN, fathersNameEN, mothersNameBN, mothersNameEN, dateOfBirth, gender, nationalIdNumber, passportNumber, guardiansNameEN, relationToGuardian, quota, nationality, religion, meritalStatus, email, mobile, preVillage, preDivision, preDistrict, preThana, prePostOffice, prePostalCode, perVillage, perDivision, perDistrict, perThana, perPostOffice, perPostalCode } = studentPersonalInformations

    const handleChange = (event) => {
        setStudentPersonalInformations({
            // ...studentPersonalInformations,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setStudentPersonalInformations({
            fullNameBN: '',
            fullNameEN: '',
            fathersNameBN: '',
            fathersNameEN: '',
            mothersNameBN: '',
            mothersNameEN: '',
            dateOfBirth: '',
            nationalIdNumber: '',
            passportNumber: '',
            guardiansNameEN: '',
            relationToGuardian: '',
            quota: '',
            nationality: '',
            religion: '',
            meritalStatus: '',
            email: '',
            mobile: '',
            preVillage: '',
            preDivision: '',
            preDistrict: '',
            preThana: '',
            prePostOffice: '',
            prePostalCode: '',
            perVillage: '',
            perDivision: '',
            perDistrict: '',
            perThana: '',
            perPostOffice: '',
            perPostalCode: ''
        })
        // { id: uuidv4(), }
        const newCPstudent = studentPersonalInformations

        setStudents([...students, newCPstudent])
        console.log(students)
    }
    // console.log(students)

    return (
        <form onSubmit={handleSubmit}>
            <h6 className='text-center text-success mt-4'>Bangladesh Nursing & Midwifery Council</h6>
            <h1 className='text-center text-success'>Student Registration Form</h1>
            <h3 className='text-center text-success mb-4'>কমিউনিটি প্যারামেডিক (সি.পি) কোর্স</h3>

            <h3>Personal Information</h3>

            <div className="form-group mb-3">
                <label htmlFor="fullNameBN">Full Name (Bangla)</label>
                <input
                    className="form-control"
                    type="text"
                    id="fullNameBN"
                    name="fullNameBN"
                    value={fullNameBN}
                    onChange={handleChange}
                    placeholder="তোমার নাম লিখ" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="fullNameEN">Full Name (English Capital Letter)</label>
                <input
                    className="form-control"
                    type="text"
                    id="fullNameEN"
                    name="fullNameEN"
                    value={fullNameEN}
                    onChange={handleChange}
                    placeholder="Enter Your Name" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="fathersNameBN">Father's Name (Bangla)</label>
                <input
                    className="form-control"
                    type="text"
                    id="fathersNameBN"
                    name="fathersNameBN"
                    value={fathersNameBN}
                    onChange={handleChange}
                    placeholder="পিতার নাম লিখ" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="fathersNameEN">Father's Name (English)</label>
                <input
                    className="form-control"
                    type="text"
                    id="fathersNameEN"
                    name="fathersNameEN"
                    value={fathersNameEN}
                    onChange={handleChange}
                    placeholder="Enter Father's Name" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="mothersNameBN">Mother's Name (Bangla)</label>
                <input
                    className="form-control"
                    type="text"
                    id="mothersNameBN"
                    name="mothersNameBN"
                    value={mothersNameBN}
                    onChange={handleChange}
                    placeholder="মাতার নাম লিখ" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="mothersNameEN">Mother's Name (English)</label>
                <input
                    className="form-control"
                    type="text"
                    id="mothersNameEN"
                    name="mothersNameEN"
                    value={mothersNameEN}
                    onChange={handleChange}
                    placeholder="Enter Mother's Name" />
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-2">
                    <label htmlFor="gender" className='d-block'>Sex (Tick)</label>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gender"
                            name='gender'
                            value='male'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Male</label>
                    </div>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="female"
                            name='gender'
                            value='female'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="others"
                            name='gender'
                            value='others'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="others">Others</label>
                    </div>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                        className="form-control"
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="nationality">Nationality</label>
                    <select onChange={handleChange} name='nationality' value={nationality} id="nationality" className="form-control">
                        <option defaultValue={nationality}>Choose...</option>
                        <option>Bangladeshi</option>
                    </select>
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="nationalIdNumber">National ID No.</label>
                    <input
                        className="form-control"
                        type="text"
                        id="nationalIdNumber"
                        name="nationalIdNumber"
                        value={nationalIdNumber}
                        onChange={handleChange}
                        placeholder="Enter National ID No."
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="passportNumber">Passport No.</label>
                    <input
                        className="form-control"
                        type="text"
                        id="passportNumber"
                        name="passportNumber"
                        value={passportNumber}
                        onChange={handleChange}
                        placeholder="Enter Passport No."
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="guardiansNameEN">Guardian's Name</label>
                    <input
                        className="form-control"
                        type="text"
                        id="guardiansNameEN"
                        name="guardiansNameEN"
                        value={guardiansNameEN}
                        onChange={handleChange}
                        placeholder="Enter Guardian's Name"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="relationToGuardian">Relation to Guardian</label>
                    <input
                        className="form-control"
                        type="text"
                        id="relationToGuardian"
                        name="relationToGuardian"
                        value={relationToGuardian}
                        onChange={handleChange}
                        placeholder="Enter Relation to Guardian"
                    />
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="quota">Quota</label>
                <select onChange={handleChange} name='quota' value={quota} id="quota" className="form-control">
                    <option defaultValue={quota}>Choose...</option>
                    <option>Grand Daughter</option>
                    <option>Grand Son</option>
                    <option>Great Grand Daughter of Freedom Fighteer</option>
                    <option>Great Grand Son of Freedom Fighteer</option>
                </select>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="fullNameBN">Religion</label>
                <input
                    className="form-control"
                    type="text"
                    id="fullNameBN"
                    name="fullNameBN"
                    value={religion}
                    onChange={handleChange}
                    placeholder="islam / hindu / buddhist / christian / others" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="fullNameBN">(*) Merital Status</label>
                <input
                    className="form-control"
                    type="text"
                    id="fullNameBN"
                    name="fullNameBN"
                    value={meritalStatus}
                    onChange={handleChange}
                    placeholder="single / married / widow / divorced / separated" />
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">E-mail Address</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter a Valid Mail"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="mobile">Student's Mobile No.</label>
                    <input
                        className="form-control"
                        type="text"
                        id="mobile"
                        name="mobile"
                        value={mobile}
                        onChange={handleChange}
                        placeholder="Enter Mobile No."
                    />
                </div>
            </div>

            <h3>Present Address</h3>

            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="preVillage">Village/House/Road</label>
                    <input
                        className="form-control"
                        type="text"
                        id="preVillage"
                        name="preVillage"
                        value={preVillage}
                        onChange={handleChange}
                        placeholder="Enter Village"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="preDivision">Division</label>
                    <input
                        className="form-control"
                        type="text"
                        id="preDivision"
                        name="preDivision"
                        value={preDivision}
                        onChange={handleChange}
                        placeholder="Enter Division"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="preDistrict">District</label>
                    <input
                        className="form-control"
                        type="text"
                        id="preDistrict"
                        name="preDistrict"
                        value={preDistrict}
                        onChange={handleChange}
                        placeholder="Enter District"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="preThana">Thana/Upazilla</label>
                    <input
                        className="form-control"
                        type="text"
                        id="preThana"
                        name="preThana"
                        value={preThana}
                        onChange={handleChange}
                        placeholder="Enter Upazilla"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="prePostOffice">Post Office</label>
                    <input
                        className="form-control"
                        type="text"
                        id="prePostOffice"
                        name="prePostOffice"
                        value={prePostOffice}
                        onChange={handleChange}
                        placeholder="Enter Post Office"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="prePostalCode">Postal Code</label>
                    <input
                        className="form-control"
                        type="text"
                        id="prePostalCode"
                        name="prePostalCode"
                        value={prePostalCode}
                        onChange={handleChange}
                        placeholder="Enter Postal Code"
                    />
                </div>
            </div>

            <h3>Permanent Address</h3>

            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="perVillage">Village/House/Road</label>
                    <input
                        className="form-control"
                        type="text"
                        id="perVillage"
                        name="perVillage"
                        value={perVillage}
                        onChange={handleChange}
                        placeholder="Enter Village"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="perDivision">Division</label>
                    <input
                        className="form-control"
                        type="text"
                        id="perDivision"
                        name="perDivision"
                        value={perDivision}
                        onChange={handleChange}
                        placeholder="Enter Division"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="perDistrict">District</label>
                    <input
                        className="form-control"
                        type="text"
                        id="perDistrict"
                        name="perDistrict"
                        value={perDistrict}
                        onChange={handleChange}
                        placeholder="Enter District"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="perThana">Thana/Upazilla</label>
                    <input
                        className="form-control"
                        type="text"
                        id="perThana"
                        name="perThana"
                        value={perThana}
                        onChange={handleChange}
                        placeholder="Enter Upazilla"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="perPostOffice">Post Office</label>
                    <input
                        className="form-control"
                        type="text"
                        id="perPostOffice"
                        name="perPostOffice"
                        value={perPostOffice}
                        onChange={handleChange}
                        placeholder="Enter Post Office"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="perPostalCode">Postal Code</label>
                    <input
                        className="form-control"
                        type="text"
                        id="perPostalCode"
                        name="perPostalCode"
                        value={perPostalCode}
                        onChange={handleChange}
                        placeholder="Enter Postal Code"
                    />
                </div>
            </div>

            <small>আমি এই মর্মে অঙ্গিকার করছি যে, উপরে বর্ণিত আমার দেয়া বিবরণ সম্পূর্ণ সত্য। আমি আরো অঙ্গিকার করছি যে, অত্র প্রতিষ্ঠানের সকল নিয়ম-কানুন মেনে চলবো। প্রতিষ্ঠান বিরোধী কোন প্রকার কার্যকলাপ করবনা। প্রতিষ্ঠানের স্বার্থবিরোধী বা রাষ্ট্রীয় আইন-শৃঙ্খলা বিরোধী কোন প্রকার কার্যকলাপ করলে কর্তৃপক্ষ আমার দেয়া ভর্তি ও অন্যান্য ফিস বাজেয়াপ্তপূর্বক আমাকে অত্র প্রতিষ্ঠান হতে বহিস্কার করতে পারবেন। আমি প্রতিষ্ঠানে ভর্তি ফিস বাবদ প্রদেয় টাকা কোন প্রকার অজুহাতে বা কোন অবস্থায় ফেরত নিতে পারবনা।</small>

            <div className="text-center d-block">
                <button
                    type="submit"
                    className="btn btn-success me-3 text-capitalize"
                    onClick={() => navigate('/office/register/educationalInfo')}
                >Educational
                </button>
                <button
                    type="submit"
                    className="btn btn-warning me-3"
                >ভর্তি করুন
                </button>
                <button
                    type="submit"
                    className="btn btn-info text-capitalize"
                    onClick={() => navigate('/office/register/officialInfo')}
                >Official
                </button>
            </div>
            {/* 
            {students.map((student) => {
                const id = new Date().getTime().toString()

                return (
                    <div key={id}>
                        <h3>Name EN : {student.fullNameEN}</h3>
                        <p>Student ID : {id}</p>
                    </div>
                )
            })} */}
        </form>
    )
}
// studentID: new Date().getTime().toString(),