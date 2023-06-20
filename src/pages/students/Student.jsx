import React, { useContext } from 'react'

export default function Student({ student }) {

    const { studentID, firstNameEN, lastNameEN, firstNameBN, lastNameBN, email, password, addressOne, addressTwo, city, state, zipCode, gender, mobile } = student

    return (<>
        <h1 className='text-center display-1 mt-4 text-secondary bg-warning w-25 mx-auto d-block'>{studentID}</h1>
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
    </>)
}
