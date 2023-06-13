import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// navbar
import Navbar from '../layout/Navbar'
// pages
import Error from '../pages/error'
import Office from '../pages/office'
import OfficeButtons from '../pages/office/OfficeButtons'

export default function index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/office' element={<Office />} />
                <Route path='/office/:officeButton' element={<OfficeButtons />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
