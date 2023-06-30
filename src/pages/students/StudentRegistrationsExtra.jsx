import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './office.css'

import OfficeMain from '../../components/office/OfficeMain'
import CourseName from './CourseName'

export default function OfficeButtons() {
    const { register } = useParams()

    return (<>
        <div className="col-md-12 col-lg-6 mb-3">
            <OfficeMain />
        </div>

        <div className="col-md-12 col-lg-6 mb-3">
            <div className="border py-3 px-2">
                {register === 'register' && <CourseName />}
                {register === 'payment' && <h1>Payment Section</h1>}
                {register === 'others' && <h1>Others Section</h1>}
            </div>
        </div>
    </>)
}


// <div className="form-row d-flex mb-3">
//     <div className="form-group col-md-6">
//         <label htmlFor='riligion' className='d-block'>Religion (Tick)</label>
//         <div className="form-check me-3">
//             <input
//                 className="form-check-input"
//                 type="radio"
//                 id="riligion"
//                 name='riligion'
//                 value='islam'
//                 onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="riligion">Islam</label>
//         </div>
//         <div className="form-check me-3">
//             <input
//                 className="form-check-input"
//                 type="radio"
//                 id="riligion"
//                 name='riligion'
//                 value='hindu'
//                 onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="riligion">Hindu</label>
//         </div>
//         <div className="form-check me-3">
//             <input
//                 className="form-check-input"
//                 type="radio"
//                 id="riligion"
//                 name='riligion'
//                 value='buddhist'
//                 onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="riligion">Buddhist</label>
//         </div>
//         <div className="form-check me-3">
//             <input
//                 className="form-check-input"
//                 type="radio"
//                 id="riligion"
//                 name='riligion'
//                 value='christian'
//                 onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="riligion">Christian</label>
//         </div>
//         <div className="form-check me-3">
//             <input
//                 className="form-check-input"
//                 type="radio"
//                 id="riligion"
//                 name='riligion'
//                 value='others'
//                 onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="riligion">Others</label>
//         </div>
//     </div>
//     <div className="form-group col-md-6">
//         <label className='d-block'>(*) Merital Status (Tick)</label>
//         <div className="form-check me-3">
//             <input
//                 className="form-check-input"
//                 type="radio"
//                 id="maritalStatus"
//                 name='maritalStatus'
//                 value='single'
//                 onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="maritalStatus">Single</label>
//         </div>
//         <div className="form-check me-3">
//             <input
//                 className="form-check-input"
//                 type="radio"
//                 id="maritalStatus"
//                 name='maritalStatus'
//                 value='married'
//                 onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="maritalStatus">Married</label>
//         </div>
//         <div className="form-check me-3">
//             <input
//                 className="form-check-input"
//                 type="radio"
//                 id="maritalStatus"
//                 name='maritalStatus'
//                 value='widow'
//                 onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="maritalStatus">Widow</label>
//         </div>
//         <div className="form-check me-3">
//             <input
//                 className="form-check-input"
//                 type="radio"
//                 id="maritalStatus"
//                 name='maritalStatus'
//                 value='divorced'
//                 onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="maritalStatus">Divorced</label>
//         </div>
//         <div className="form-check me-3">
//             <input
//                 className="form-check-input"
//                 type="radio"
//                 id="maritalStatus"
//                 name='maritalStatus'
//                 value='separated'
//                 onChange={handleChange}
//             />
//             <label className="form-check-label" htmlFor="maritalStatus">Seprarated</label>
//         </div>
//     </div>
// </div>