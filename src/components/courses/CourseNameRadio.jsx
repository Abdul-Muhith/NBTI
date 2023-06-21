import React, { useState } from 'react'
import CPform from '../registrations/form/CPform'

export default function CourseName() {
    const [courseName, setCourseName] = useState('')

    const handleClick = (event) => {
        setCourseName(event.target.value)
    }

    return (<>
        <div className="w-100 mx-auto d-block border py-3 px-2 mb-3">
            <div className="form-group d-flex" style={{ justifyContent: 'center' }}>
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

            {courseName === 'CP' && <CPform />}
        </div>
    </>)
}
