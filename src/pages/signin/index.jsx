import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
    const navigate = useNavigate()

    return (
        <section className="container my-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-6 d-none d-md-block">
                    hello images !
                </div>

                <div className="col-md-1"></div>

                <div className="col-md-4 my-3">
                    <h2 className="text-center fs-5"><span className="fw-bold">Login</span> to your account</h2>

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

                        <input className='button-brand w-100' type="submit" value="Login" />
                    </form>

                    <p className='text-center mt-3 text-muted'>Don't have an account? <span className='text-black fw-bold'>Sign up as</span></p>

                    <div className="d-flex justify-content-around">
                        <button onClick={() => navigate('/student-signup')} className='button-signUp'>Student</button>
                        <button onClick={() => navigate('/teacher-signup')} className='button-signUp'>Teacher</button>
                        <button onClick={() => navigate('/partner-signup')} className='button-signUp'>Partner</button>
                        <button onClick={() => navigate('/author-signup')} className='button-signUp'>Author</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
