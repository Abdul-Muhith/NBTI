import { useState } from 'react'

import dummyStudents from '../../pages/students/dummyStudents.json'
import { StudentContext } from './StudentContext'

const StudentStore = ({ children }) => {
    const [students, setStudents] = useState(dummyStudents)

    const [studentPersonalInformations, setStudentPersonalInformations] = useState({
        fullNameBN: '',
        fullNameEN: '',
        fathersNameBN: '',
        fathersNameEN: '',
        mothersNameBN: '',
        mothersNameEN: '',
        dateOfBirth: '',
        gender: '',
        nationalIdNumber: '',
        passportNumber: '',
        guardiansNameEN: '',
        relationToGuardian: '',
        quota: '',
        nationality: '',
        religion: '',
        meritalStatus: '',
        email: '',
        mobile: '',
        preVillage: '',
        preDivision: '',
        preDistrict: '',
        preThana: '',
        prePostOffice: '',
        prePostalCode: '',
        perVillage: '',
        perDivision: '',
        perDistrict: '',
        perThana: '',
        perPostOffice: '',
        perPostalCode: ''
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