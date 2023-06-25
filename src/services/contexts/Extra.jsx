import React, { useContext } from 'react'

export default function Student({ studentID, student }) {

    const { id, fullNameBN, fullNameEN, fathersNameBN, fathersNameEN, mothersNameBN, mothersNameEN, gender, dateOfBirth, nationalIdNumber, passportNumber, guardiansNameEN, relationToGuardian, quota, nationality, religion, meritalStatus, email, mobile, preVillage, preDivision, preDistrict, preThana, prePostOffice, prePostalCode, perVillage, perDivision, perDistrict, perThana, perPostOffice, perPostalCode, sscInstitutionName, hscInstitutionName, bechelorsInstitutionName, mastersInstitutionName, doctorateInstitutionName, sscGPA, hscGPA, bechelorsGPA, mastersGPA, doctorateGPA, sscYear, hscYear, bechelorsYear, mastersYear, doctorateYear, sscDuration, hscDuration, bechelorsDuration, mastersDuration, doctorateDuration, sscCountry, hscCountry, bechelorsCountry, mastersCountry, doctorateCountry, batchNumber, addmissionDate, serialNumber, formNumber, addmissionFree, courseDuration, signOfPrinciple, signOfStudent, profilePhoto, password, } = student

    return (<>
        <tr className='text-center'>
            <td className='bg-warning text-secondary studentID'><a href="#">{studentID}</a></td>
            <td>{fullNameBN}</td>
            <td>{fullNameEN}</td>
            <td>{fathersNameBN}</td>
            <td>{fathersNameEN}</td>
            <td>{mothersNameBN}</td>
            <td>{mothersNameEN}</td>
            <td>{gender}</td>
            <td>{dateOfBirth}</td>
            <td>{nationalIdNumber}</td>
            <td>{passportNumber}</td>
            <td>{guardiansNameEN}</td>
            <td>{relationToGuardian}</td>
            <td>{quota}</td>
            <td>{nationality}</td>
            <td>{religion}</td>
            <td>{meritalStatus}</td>
            <td>{email}</td>
            <td>{mobile}</td>
            <td>{preVillage}</td>
            <td>{preDivision}</td>
            <td>{preDistrict}</td>
            <td>{preThana}</td>
            <td>{prePostOffice}</td>
            <td>{prePostalCode}</td>
            <td>{perVillage}</td>
            <td>{perDivision}</td>
            <td>{perDistrict}</td>
            <td>{perThana}</td>
            <td>{perPostOffice}</td>
            <td>{perPostalCode}</td>
            <td>{sscInstitutionName}</td>
            <td>{hscInstitutionName}</td>
            <td>{bechelorsInstitutionName}</td>
            <td>{mastersInstitutionName}</td>
            <td>{doctorateInstitutionName}</td>
            <td>{sscGPA}</td>
            <td>{hscGPA}</td>
            <td>{bechelorsGPA}</td>
            <td>{mastersGPA}</td>
            <td>{doctorateGPA}</td>
            <td>{sscYear}</td>
            <td>{hscYear}</td>
            <td>{bechelorsYear}</td>
            <td>{mastersYear}</td>
            <td>{doctorateYear}</td>
            <td>{sscDuration}</td>
            <td>{hscDuration}</td>
            <td>{bechelorsDuration}</td>
            <td>{mastersDuration}</td>
            <td>{doctorateDuration}</td>
            <td>{sscCountry}</td>
            <td>{hscCountry}</td>
            <td>{bechelorsCountry}</td>
            <td>{mastersCountry}</td>
            <td>{doctorateCountry}</td>
            <td>{batchNumber}</td>
            <td>{addmissionDate}</td>
            <td>{serialNumber}</td>
            <td>{formNumber}</td>
            <td>{addmissionFree}</td>
            <td>{courseDuration}</td>
            <td>{signOfPrinciple}</td>
            <td>{signOfStudent}</td>
            <td><img src={profilePhoto} className='img-fluid' width={40} alt='1280x1280' /></td>
            <td>{password}</td>
            <td><button className='btn btn-danger'>Remove</button></td>
        </tr>
        {/* 
        <h1 className='text-center display-1 mt-4 text-secondary bg-warning w-25 mx-auto d-block'>{id}</h1>
        <h4>
            <strong>Name </strong>
            <span>{firstNameEN + ' ' + lastNameEN}</span>
        </h4><hr />
        <h4>
            <strong>নাম </strong>
            <span>{firstNameBN + ' ' + lastNameBN}</span>
        </h4><hr />
        <h4>
            <strong>Email </strong>
            <span>{email}</span>
        </h4><hr />
        <h4>
            <strong>Password </strong>
            <span>{password}</span>
        </h4><hr />
        <h4>
            <strong>Address One </strong>
            <span>{addressOne}</span>
        </h4><hr />
        <h4>
            <strong>Address Two </strong>
            <span>{addressTwo}</span>
        </h4><hr />
        <h4>
            <strong>City </strong>
            <span>{city}</span>
        </h4><hr />
        <h4>
            <strong>State </strong>
            <span>{state}</span>
        </h4><hr />
        <h4>
            <strong>ZipCode </strong>
            <span>{zipCode}</span>
        </h4><hr />
        <h4>
            <strong>Gender </strong>
            <span>{gender}</span>
        </h4><hr />
        <h4>
            <strong>Mobile </strong>
            <span>{mobile}</span>
        </h4> 
        */}
    </>)
}
