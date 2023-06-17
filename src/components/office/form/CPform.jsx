import React from 'react'

export default function CPform() {
    return (
        <form>
            <h1 className='text-center text-success my-4'>শিক্ষার্থী ভর্তি ফর্ম</h1>

            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="first-name">First Name (English)</label>
                    <input type="name" className="form-control" id="first-name" placeholder="Enter First Name" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="last-name">Last Name (English)</label>
                    <input type="name" className="form-control" id="last-name" placeholder="Enter Last Name" />
                </div>
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="first-name">First Name (বাংলা)</label>
                    <input type="name" className="form-control" id="first-name" placeholder="নামের প্রথম অংশ লিখুন" />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="last-name">Last Name (বাংলা)</label>
                    <input type="name" className="form-control" id="last-name" placeholder="নামের শেষ অংশ লিখুন" />
                </div>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="email">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter a valid Email" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password for Profile</label>
                <input type="password" className="form-control" id="password" placeholder="Enter a strong Password" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="inputAddress">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group mb-3">
                <label htmlFor="inputAddress2">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row mb-3 d-flex">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                        <option>hello</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
            </div>
            <div className="form-group mb-3 d-flex">
                <div className="form-check me-3">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">Male</label>
                </div>
                <div className="form-check me-3">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">Female</label>
                </div>
                <div className="form-check me-3">
                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">Other</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary mx-auto d-block">ভর্তি করুন</button>
        </form>
    )
}
