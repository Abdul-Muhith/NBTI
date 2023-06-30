import React, { useContext } from 'react'
import { StudentContext } from '../../../services/contexts/StudentContext'
import { v4 as uuidv4 } from 'uuid'

export default function StudentsOfficialInformations() {
    const {
        students, setStudents,
        studentPersonalInformations, setStudentPersonalInformations
    } = useContext(StudentContext)

    const { firstNameEN, lastNameEN, firstNameBN, lastNameBN, email, password, addressOne, addressTwo, city, state, zipCode, gender, mobile } = studentPersonalInformations

    const handleChange = (event) => {
        setStudentPersonalInformations({
            ...studentPersonalInformations,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setStudentPersonalInformations({
            firstNameEN: '',
            lastNameEN: '',
            firstNameBN: '',
            lastNameBN: '',
            email: '',
            password: '',
            addressOne: '',
            addressTwo: '',
            city: '',
            state: '',
            zipCode: '',
            gender: '',
            mobile: ''
        })

        const newCPstudent = { id: uuidv4(), studentPersonalInformations }
        console.log(newCPstudent)

        setStudents([...students, studentPersonalInformations])
        console.log(students)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h6 className='text-center text-success mt-4'>Bangladesh Nursing & Midwifery Council</h6>
            <h1 className='text-center text-success'>Student Registration Form</h1>
            <h3 className='text-center text-success mb-4'>কমিউনিটি প্যারামেডিক (সি.পি) কোর্স</h3>

            <h3>Personal Information</h3>

            <div className="form-group mb-3">
                <label htmlFor="email">Full Name (Bangla)</label>
                <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="তোমার নাম লিখ" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Full Name (English Capital Letter)</label>
                <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter Your Name" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Father's Name (Bangla)</label>
                <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="পিতার নাম লিখ" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Father's Name (English)</label>
                <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter Father's Name" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Mother's Name (Bangla)</label>
                <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="মাতার নাম লিখ" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Mother's Name (English)</label>
                <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter Mother's Name" />
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-2">
                    <label htmlFor="first-name" className='d-block'>Sex (Tick)</label>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
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
                            id="gridCheck"
                            name='gender'
                            value='female'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Female</label>
                    </div>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
                            name='gender'
                            value='others'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Others</label>
                    </div>
                </div>

                <div className="form-group col-md-6">
                    <label htmlFor="email">Date of Birth</label>
                    <input
                        className="form-control"
                        type="date"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group col-md-4">
                    <label htmlFor="inputState">Nationality</label>
                    <select onChange={handleChange} name='state' value={state} id="inputState" className="form-control">
                        <option defaultValue={state}>Choose...</option>
                        <option>Bangladeshi</option>
                    </select>
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">National ID No.</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter National ID No."
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Passport No.</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Passport No."
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Guardian's Name</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Guardian's Name"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Relation to Guardian</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Relation to Guardian"
                    />
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="inputState">Quota</label>
                <select onChange={handleChange} name='state' value={state} id="inputState" className="form-control">
                    <option defaultValue={state}>Choose...</option>
                    <option>Grand Daughter</option>
                    <option>Grand Son</option>
                    <option>Great Grand Daughter of Freedom Fighteer</option>
                    <option>Great Grand Son of Freedom Fighteer</option>
                </select>
            </div>

            <div className="form-row d-flex mb-3">
                <div className="form-group col-md-6">
                    <label htmlFor="first-name" className='d-block'>Religion (Tick)</label>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
                            name='gender'
                            value='islam'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Islam</label>
                    </div>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
                            name='gender'
                            value='hindu'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Hindu</label>
                    </div>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
                            name='gender'
                            value='buddhist'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Buddhist</label>
                    </div>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
                            name='gender'
                            value='christian'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Christian</label>
                    </div>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
                            name='gender'
                            value='others'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Others</label>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="first-name" className='d-block'>(*) Merital Status (Tick)</label>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
                            name='gender'
                            value='single'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Single</label>
                    </div>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
                            name='gender'
                            value='married'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Married</label>
                    </div>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
                            name='gender'
                            value='widow'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Widow</label>
                    </div>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
                            name='gender'
                            value='divorced'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Divorced</label>
                    </div>
                    <div className="form-check me-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="gridCheck"
                            name='gender'
                            value='separated'
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="gridCheck">Seprarated</label>
                    </div>
                </div>
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
                    <label htmlFor="email">Student's Mobile No.</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Mobile No."
                    />
                </div>
            </div>

            <h3>Present Address</h3>

            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Village/House/Road</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Village"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Division</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Division"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">District</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter District"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Thana/Upazilla</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Upazilla"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Post Office</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Post Office"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Postal Code</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Postal Code"
                    />
                </div>
            </div>

            <h3>Permanent Address</h3>

            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Village/House/Road</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Village"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Division</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Division"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">District</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter District"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Thana/Upazilla</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Upazilla"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Post Office</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Post Office"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Postal Code</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter Postal Code"
                    />
                </div>
            </div>

            <h3>Educational Qualification</h3>

            <div className="form-group mb-3">
                <label htmlFor="email">SSC/Equivalent</label>
                <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter College/University/Institution Name"
                />
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">GPA/Class</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="GPA or Class"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Year</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Passed Year"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Duration</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="e.g.2015-2018"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Country</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Country Name"
                    />
                </div>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">HSC/Equivalent</label>
                <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter College/University/Institution Name"
                />
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">GPA/Class</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="GPA or Class"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Year</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Passed Year"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Duration</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="e.g.2015-2018"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Country</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Country Name"
                    />
                </div>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">Bechelor's Degree</label>
                <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter College/University/Institution Name"
                />
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">GPA/Class</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="GPA or Class"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Year</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Passed Year"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Duration</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="e.g.2015-2018"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Country</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Country Name"
                    />
                </div>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">Masters</label>
                <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter College/University/Institution Name"
                />
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">GPA/Class</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="GPA or Class"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Year</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Passed Year"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Duration</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="e.g.2015-2018"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Country</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Country Name"
                    />
                </div>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="email">Mphil/Doctorate</label>
                <input
                    className="form-control"
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter College/University/Institution Name"
                />
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">GPA/Class</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="GPA or Class"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Year</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Passed Year"
                    />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Duration</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="e.g.2015-2018"
                    />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Country</label>
                    <input
                        className="form-control"
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Country Name"
                    />
                </div>
            </div>

            <small>আমি এই মর্মে অঙ্গিকার করছি যে, উপরে বর্ণিত আমার দেয়া বিবরণ সম্পূর্ণ সত্য। আমি আরো অঙ্গিকার করছি যে, অত্র প্রতিষ্ঠানের সকল নিয়ম-কানুন মেনে চলবো। প্রতিষ্ঠান বিরোধী কোন প্রকার কার্যকলাপ করবনা। প্রতিষ্ঠানের স্বার্থবিরোধী বা রাষ্ট্রীয় আইন-শৃঙ্খলা বিরোধী কোন প্রকার কার্যকলাপ করলে কর্তৃপক্ষ আমার দেয়া ভর্তি ও অন্যান্য ফিস বাজেয়াপ্তপূর্বক আমাকে অত্র প্রতিষ্ঠান হতে বহিস্কার করতে পারবেন। আমি প্রতিষ্ঠানে ভর্তি ফিস বাবদ প্রদেয় টাকা কোন প্রকার অজুহাতে বা কোন অবস্থায় ফেরত নিতে পারবনা।</small>

            <button type="submit" className="btn btn-primary mx-auto d-block">ভর্তি করুন</button>
        </form>
    )
}
