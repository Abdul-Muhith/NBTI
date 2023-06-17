import React, { useState } from 'react'
import CPform from '../../components/office/form/CPform'

export default function CourseName() {
    const [courseName, setCourseName] = useState('')
    const handleClick = (event) => {
        // courseName = ''
        setCourseName(event.target.value)
    }

    return (<>
        <div className="mx-auto d-block" style={{ width: '90%' }}>
            <div className="form-group mb-3 d-flex">
                <div className="form-check me-3">
                    <input onClick={handleClick} value='LMAF' className="form-check-input" type="radio" name='courses' id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">LMAF</label>
                </div>
                <div className="form-check me-3">
                    <input onClick={handleClick} value='DMS' className="form-check-input" type="radio" name='courses' id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">DMS</label>
                </div>
                <div className="form-check me-3">
                    <input onClick={handleClick} value='CP' className="form-check-input" type="radio" name='courses' id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">CP</label>
                </div>
                <div className="form-check me-3">
                    <input onClick={handleClick} value='Private' className="form-check-input" type="radio" name='courses' id="gridCheck" />
                    <label className="form-check-label" htmlFor="gridCheck">Private</label>
                </div>
            </div>
        </div>
        {courseName === 'CP' && <CPform />}
    </>)
}
