import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup({ as }) {
    const signupAS = as

    // if (signUpAs === 'student') {}

    return (
        <section className="container my-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 d-none d-md-block">
                    hello images !
                </div>

                <div className="col-md-1"></div>

                <div className="col-md-4 my-3">
                    <h2 className="text-center fs-5 text-muted"><span className="fw-bold text-black">Sign Up</span> to get Started</h2>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id='email' className="form-control" aria-describedby="emailHelp" />
                            <span className='text-danger'>This field is required</span>
                        </div>

                        <div className="mb-3">
                            <label htmlFor='password' className="form-label">Password</label>
                            <input id='password' type='password' className="form-control" />
                            <span className='text-danger'>This field is required</span>
                        </div>

                        <input className='button-brand w-100' type="submit" value="Create Account" />
                    </form>

                    <p className='text-center mt-3 text-muted'>Already have an account ? <Link to='/home' className='text-decoration-none text-black fw-bold'>Login</Link></p>

                    <p style={{ fontSize: '15px' }} className='text-center text-muted mt-4'>By joining NBTI, you agree to NBTI <span className="fw-bold text-black">Terms & Conditions, Privacy Policy</span> and <span className="text-black fw-bold">Terms of Use</span>.</p>
                </div>
            </div>
        </section>
    )
}
