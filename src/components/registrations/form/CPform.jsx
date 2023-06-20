import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { StudentContext } from '../../../services/contexts/StudentContext'

export default function CPform() {
    const { students, setStudents } = useContext(StudentContext)

    const [cpStudent, setCPstudent] = useState({
        studentID: '',
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

    const { studentID, firstNameEN, lastNameEN, firstNameBN, lastNameBN, email, password, addressOne, addressTwo, city, state, zipCode, gender, mobile } = cpStudent

    const handleChange = (event) => {
        setCPstudent({
            ...cpStudent,
            studentID: new Date().getTime().toString(),
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setCPstudent({
            studentID: '',
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

        console.log(cpStudent)
        const newCPstudent = { myID: uuidv4(), cpStudent }

        setStudents((prevState) => {
            console.log(newCPstudent)
            return [...prevState, newCPstudent]
        })
        console.log(students)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className='text-center text-success my-4'>শিক্ষার্থী ভর্তি ফর্ম</h1>

            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="first-name">First Name (English)</label>
                    <input onChange={handleChange} name="firstNameEN" value={firstNameEN} type="name" className="form-control" id="first-name" placeholder="Enter First Name" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="last-name">Last Name (English)</label>
                    <input onChange={handleChange} name="lastNameEN" value={lastNameEN} type="name" className="form-control" id="last-name" placeholder="Enter Last Name" />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="first-name">First Name (বাংলা)</label>
                    <input onChange={handleChange} name="firstNameBN" value={firstNameBN} type="name" className="form-control" id="first-name" placeholder="নামের প্রথম অংশ লিখুন" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="last-name">Last Name (বাংলা)</label>
                    <input onChange={handleChange} name="lastNameBN" value={lastNameBN} type="name" className="form-control" id="last-name" placeholder="নামের শেষ অংশ লিখুন" />
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Email Address</label>
                <input onChange={handleChange} name="email" value={email} type="email" className="form-control" id="email" placeholder="Enter a valid Email" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password for Profile</label>
                <input onChange={handleChange} name="password" value={password} type="password" className="form-control" id="password" placeholder="Enter a strong Password" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="inputAddress">Address</label>
                <input onChange={handleChange} name="addressOne" value={addressOne} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="inputAddress2">Address 2</label>
                <input onChange={handleChange} name="addressTwo" value={addressTwo} type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input onChange={handleChange} name="city" value={city} type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select onChange={handleChange} name='state' value={state} id="inputState" className="form-control">
                        <option defaultValue={state}>Choose...</option>
                        <option>Sadar</option>
                        <option>Bazar</option>
                        <option>East</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input onChange={handleChange} name="zipCode" value={zipCode} type="text" className="form-control" id="inputZip" />
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="first-name">Mobile </label>
                <input onChange={handleChange} name="mobile" value={mobile} type="text" className="form-control" id="first-name" placeholder="Enter a Valid Mobile Number" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="first-name" className='d-block'>Gender </label>
                <div className="d-flex">
                    <div className="form-check me-3">
                        <input onChange={handleChange} value='male' className="form-check-input" type="radio" name='gender' id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">Male</label>
                    </div>
                    <div className="form-check me-3">
                        <input onChange={handleChange} value='female' className="form-check-input" type="radio" name='gender' id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">Female</label>
                    </div>
                    <div className="form-check me-3">
                        <input onChange={handleChange} value='other' className="form-check-input" type="radio" name='gender' id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">Other</label>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-primary mx-auto d-block">ভর্তি করুন</button>
        </form>
    )
}