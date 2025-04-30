'use client'

import axios from 'axios'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/freetogame-logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


export default function Navbar() {

    // let router = useRouter()
    
    
    // function logout() {
    //     localStorage.removeItem('userToken')
    //     setuserData(null)
    //     router.push('/register')
    // }
    
    // console.log(userData);
    useEffect(() => {
    }, [])

    return <>
        <nav className="navbar bg-dark  fixed-top navbar-expand-lg bg">
            <div className="container">
                <Link className="navbar-brand fw-bold h1 m-0" href="/"><Image src={logo} alt=''></Image></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* {userData ?  : ''} */}
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="/allgames">All Games</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Platform
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/pc">PC</Link></li>
                                <li><Link className="dropdown-item" href="/browser">Browser</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/mmo">MMO</Link></li>
                                <li><Link className="dropdown-item" href="/mmorpg">MMORPG</Link></li>
                                <li><Link className="dropdown-item" href="/shooter">shooter</Link></li>
                                <li><Link className="dropdown-item" href="/strategy">strategy</Link></li>
                                <li><Link className="dropdown-item" href="/moba">moba</Link></li>
                                <li><Link className="dropdown-item" href="/card">card</Link></li>
                                <li><Link className="dropdown-item" href="/racing">racing</Link></li>
                                <li><Link className="dropdown-item" href="/sports">sports</Link></li>
                                <li><Link className="dropdown-item" href="/social">social</Link></li>
                                <li><Link className="dropdown-item" href="/fighting">fighting</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/relevance">relevance</Link></li>
                                <li><Link className="dropdown-item" href="/popularity">popularity</Link></li>
                                <li><Link className="dropdown-item" href="/relasedata">relasedata</Link></li>
                                <li><Link className="dropdown-item" href="/alphabetical">alphabetical</Link></li>
                            </ul>
                        </li>
                    </ul>


                    {/* <div className='ms-auto'>
                        <div className="auth ">
                            {userData ?
                                <button onClick={logout()} className='btn btn-danger'>LogOut</button>
                                : <>
                                    <Link href={`/register`}><button className='btn mx-2 btn-success'>Register</button></Link>
                                    <Link href={`/login`}><button className='btn mx-2 btn-warning'>Sign In</button></Link>
                                </>}
                        </div>
                    </div> */}

                </div>
            </div>
        </nav>

    </>
}


//Business Entertainment Health Science Sports Technology