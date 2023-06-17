import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// navbar
import Navbar from '../layout/Navbar'
// pages
import Error from '../pages/error'
import Office from '../pages/office'
import Registrations from '../pages/office/Registrations'
import CommingSoon from '../pages/error/CommingSoon'

export default function index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/office' element={<Office />} />
                <Route path='/courses' element={<CommingSoon />} />
                <Route path='/contact' element={<CommingSoon />} />
                <Route path='/about' element={<CommingSoon />} />
                <Route path='/office/:register' element={<Registrations />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
