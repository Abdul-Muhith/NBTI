import { useState } from 'react'

import DummyStudents from '../../pages/students/DummyStudents'
import { StudentContext } from './StudentContext'

const StudentStore = ({ children }) => {
    const [students, setStudents] = useState(DummyStudents)

    return (<>
        <StudentContext.Provider value={{ students, setStudents }}>
            {children}
        </StudentContext.Provider>
    </>)
}
export default StudentStore