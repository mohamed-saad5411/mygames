'use client'
import React from 'react'
import logo from '../../assets/gaming.ebaf2ffc84f4451d.jpg'
import Image from 'next/image'
import { useFormik } from 'formik'
import axios from 'axios'
import { redirect, useRouter } from 'next/navigation'



export default function register() {
    let router = useRouter()
    async function handleRegister(values) {
        let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)

        if (data?.message === 'success') {
            router.push('/login')
        }
    }
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
        },
        onSubmit: handleRegister
    })
    return <>

        <div id='containerRegisterForm' className="container mt-5  bg- d-flex align-items-center justify-content-center">
            <div className="row custom-shadow rounded-3 ">
                <div className="col-md-6 bg-">
                    <Image src={logo} alt='' className='w-100 h-100'></Image>
                </div>
                <div className="col-md-6 bg-">
                    <form onSubmit={formik.handleSubmit} className='p-2'>
                        <h2 className='text-white-50'>Register Now ...</h2>

                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className='form-control my-3 m-0' value={formik.values.name} name='name' id='name' placeholder='Enter your Name .....' />

                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" className='form-control my-3 m-0' value={formik.values.email} name='email' id='email' placeholder='Enter your E-Mail .....' />

                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className='form-control my-3 m-0' value={formik.values.password} name='password' id='password' placeholder='Enter your Password .....' />

                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className='form-control my-3 m-0' value={formik.values.rePassword} name='rePassword' id='rePassword' placeholder='Enter Repassword .....' />

                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" className='form-control my-3 m-0' value={formik.values.phone} name='phone' id='phone' placeholder='Enter your Phone .....' />

                        <button type='submit' className='btn mt-5 w-100 btn-success'>Register</button>
                    </form>
                </div>
            </div>
        </div>

    </>

}
