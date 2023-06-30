import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function StudentsGallery() {
    const navigate = useNavigate()

    return (
        <section className='bg-brand bg-brand-container'>
            <div className="container pt-4">
                <h1 style={{ fontSize: '22px', color: '#212529', fontWeight: '700' }} className='mt-3'>Students of This Institute</h1>

                <div className="row products-container justify-content-center align-items-center">
                    <div className="cart-deck mb-5 col-lg-3 col-md-5 col-sm-8 mx-1" key='1'>
                        <div className="cart">
                            <span className='cart-img-left' style={{ textTransform: 'rotate(360deg)' }}>Payable Fee: <del>15000</del> 13500 Taka</span>
                            <Link to='product/product.id' onClick={() => { window.scrollTo(0, 0); }} className='text-decoration-none text-black'>
                                <img src='https://i.ibb.co/XSbS8Nf/earphone.jpg' className="cart-img-top img-fluid mx-auto d-block" alt='product.name' />
                            </Link>
                            <span className='cart-img-left' style={{ textTransform: 'rotate(360deg)' }}>Due Amount: 3500 Taka</span>
                            <div className="d-flex justify-content-between align-items-center mt-3">
                                <div className="cart-body col-sm-8">
                                    <h2 className="cart-title">Abdullah Al Mamun</h2>
                                    <p className="cart-text">MD Zoynal Abedin</p>
                                </div>

                                <div className="col-sm-4">
                                    <button
                                        onClick={() => { window.scrollTo(0, 0); navigate('/payments/studentid') }}
                                        className="btn btn-outline-secondary d-block "
                                    >Payment</button>
                                    <button
                                        onClick={() => { navigate('/students/studentid') }}
                                        className="btn btn-outline-dark d-block my-2"
                                    >Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
