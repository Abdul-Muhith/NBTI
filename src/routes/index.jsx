import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// navbar
import Navbar from '../layout/Navbar'
// pages
import Error from '../pages/error'
import Home from '../pages/home'
import Students from '../pages/students'
import Office from '../pages/office'
import Registrations from '../pages/students'

import CommingSoon from '../pages/error/CommingSoon'

export default function index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/students' element={<Students />} />
                <Route path='/office' element={<Office />} />
                <Route path='/office/:register' element={<Registrations />} />
                <Route path='/courses' element={<CommingSoon />} />
                <Route path='/about' element={<CommingSoon />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
