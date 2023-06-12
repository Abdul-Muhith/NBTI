import React from 'react'
import './home.css'

export default function index() {
    return (
        <div class="col-md-6 col-lg-4  mb-3">
            <div class="d-flex border py-3 px-2">
                <div>
                    <div class="top-left-btn">
                        <a class="bgFour btn mb-1" href="#">Register</a>
                        <a class="bgTwo btn mb-1" href="#">Payment</a>
                        <a class="bgThree btn mb-1" href="#">Others</a>
                        <div class="search-box">
                            <label class="form-label" for="">search</label>
                            <input class="form-control" type="text" />
                        </div>
                    </div>
                </div>
                <div>
                    <p><input type="checkbox" /> OFFICE</p>
                    <p><input type="checkbox" /> HOUSE</p>
                    <p><button class="btn btn-success search-box-btn">Print&Save</button></p>
                </div>
            </div>
        </div>
    )
}
