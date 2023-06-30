import React, { useContext } from 'react'
import { StudentContext } from '../../../services/contexts/StudentContext'
import { v4 as uuidv4 } from 'uuid'

export default function StudentsEducationalQualifications() {
    const {
        students, setStudents,
        studentPersonalInformations, setStudentPersonalInformations
    } = useContext(StudentContext)

    const { email } = studentPersonalInformations

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
