import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// navbar
import Navbar from '../layout/Navbar'
// Invalid pages
import Error from '../pages/error'
import CommingSoon from '../pages/error/CommingSoon'
// Signin & Signup Pages
import Signin from '../pages/signin'
import StudentSignup from '../pages/signup/StudenSignup'
import TeacherSignup from '../pages/signup/TeacherSignup'
import PartnerSignup from '../pages/signup/PartnerSignup'
import AuthorSignup from '../pages/signup/AuthorSignup'

import Home from '../pages/home'
import Students from '../pages/students'
import Office from '../pages/office'
import Registrations from '../pages/students'
import EducationalQualifications from '../components/registrations/form/StudentsEducationalQualifications'
import OfficialInformation from '../components/registrations/form/StudentsOfficialInformations'
import StudentsGallery from '../components/extra/StudentsGallery'
import StudentInfo from '../components/extra/StudentInfo'

export default function index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Signin />} />
                <Route path='/student-signup' element={<StudentSignup />} />
                <Route path='/teacher-signup' element={<TeacherSignup />} />
                <Route path='/partner-signup' element={<PartnerSignup />} />
                <Route path='/author-signup' element={<AuthorSignup />} />
                <Route path='/students' element={<Students />} />
                <Route path='/students/:studentid' element={<StudentInfo />} />
                <Route path='/office' element={<Office />} />
                <Route path='/office/:register' element={<Registrations />} />
                <Route path='/office/:register/educationalInfo' element={<EducationalQualifications />} />
                <Route path='/office/:register/officialInfo' element={<OfficialInformation />} />
                <Route path='/courses' element={<CommingSoon />} />
                <Route path='/about' element={<StudentsGallery />} />
                <Route path='/*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
