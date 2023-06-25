import { useState } from 'react'

import dummyStudents from '../../pages/students/dummyStudents.json'
import { StudentContext } from './StudentContext'

const StudentStore = ({ children }) => {
    const [students, setStudents] = useState(dummyStudents)

    const [studentPersonalInformations, setStudentPersonalInformations] = useState({
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

    return (<>
        <StudentContext.Provider value={{
            students, setStudents,
            studentPersonalInformations, setStudentPersonalInformations
        }}>
            {children}
        </StudentContext.Provider>
    </>)
}
export default StudentStore