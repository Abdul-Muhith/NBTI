import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import FindAstudent from '../../components/extra/FindAstudent'

export default function index() {
    return (<>

        <FindAstudent />

        <h3 className="px-2 text-center text-danger display-1">
            <strong>দৃশ্যমান PAGE টি অতি-শিঘ্রই আরও সুন্দর করে সা...জ...বে !!</strong>
            <h1 className='d-flex justify-content-center align-items-center text-center text-danger fw-bold mt-5'>404 <br /> Not Found</h1>
        </h3>
    </>)
}
