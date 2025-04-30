'use client'

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Details() {
    let param = useParams()
    const [specificGame, setspecificGame] = useState([])

    async function getSpecificGame(params) {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
            params: { id: param.id },
            headers: {
                'x-rapidapi-key': '14943b72e7mshcd54d538d7abf71p18bfaajsnacbfc639325b',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const { data } = await axios.request(options);
            setspecificGame(data)
        } catch (error) {
            // console.error(error);
        }
    }
    useEffect(() => {
        getSpecificGame()
        // console.log();

    }, [])


    return <>

        <div id='detailsPage' className="container  my-5 py-4">
            <div className="row text-white-50 mt-2 justify-content-center gy-4 mb-5 pb-5">
                <div className="col-lg-4 col-md-5" key={specificGame?.id}>
                    <div>
                        <img className='w-100 rounded-3' src={specificGame?.thumbnail} alt="" />
                        <div className='d-flex mt-3 align-items-center justify-content-between'>
                            <button className='btn btn-secondary'>FREE</button>
                            <a href={`${specificGame.freetogame_profile_url}`} target='_blank' className='w-75'><button className='btn w-100 btn-success'>Play Now</button></a>
                        </div>
                        <div className='bg- mt-3'>
                            <p className='h3 text-white text-decoration-underline'>Additional Information</p>
                            <div className="">
                                <div className="row g-3">
                                    <div className="col-lg-6  ">
                                        <div className='bg-dark-custom rounded-2 p-1'>
                                            <h3 className='h5'>Title</h3>
                                            <p>{specificGame?.title}</p>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className='bg-dark-custom rounded-2 p-1'>
                                            <h3 className='h5'>genre</h3>
                                            <p>{specificGame?.genre}</p>

                                        </div>

                                    </div>
                                    <div className="col-lg-6 ">
                                        <div className='bg-dark-custom rounded-2 p-1'>
                                            <h3 className='h5'>platform</h3>
                                            <p>{specificGame?.platform}</p>

                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className='bg-dark-custom rounded-2 p-1'>
                                            <h3 className='h5'>publisher</h3>
                                            <p>{specificGame?.publisher}</p>

                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className='bg-dark-custom rounded-2 p-1'>
                                            <h3 className='h5'>developer</h3>
                                            <p>{specificGame?.developer}</p>

                                        </div>

                                    </div>
                                    <div className="col-lg-6">
                                        <div className='bg-dark-custom rounded-2 p-1'>
                                            <h3 className='h5'>release_date</h3>
                                            <p>{specificGame?.release_date}</p>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-7">
                    <div>
                        <h1 className='h3 mb-5 text-center fw-bolder'>{specificGame?.title}</h1>
                        <p className='h3 text-white text-decoration-underline'>About Genshin Impact</p>
                        <p className='lead my-3 px-3'>{specificGame?.description}</p>
                        <p className='h3 text-white text-decoration-underline mt-4'>Minimum System Requirements</p>
                        <div className="lead px-3">
                            <p className='m-0'>os : {specificGame?.minimum_system_requirements?.os}</p>
                            <p className='m-0'>processor : {specificGame?.minimum_system_requirements?.processor}</p>
                            <p className='m-0'>memory : {specificGame?.minimum_system_requirements?.memory}</p>
                            <p className='m-0'>graphics : {specificGame?.minimum_system_requirements?.graphics}</p>
                            <p className='m-0'>storage : {specificGame?.minimum_system_requirements?.storage}</p>
                            {/* <h5>Tages  : <a href={specificGame.strYoutube} className='text-decoration-none text-dark fw-bolder' target='_blank'><button className='btn px-5 btn-outline-danger'>Youtube</button></a></h5> */}
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <div className="row g-3">
                    {specificGame?.screenshots?.map((screenshot) =>
                        <>
                            <div className="col">
                                <img className='w-100 h-100 rounded-3' src={screenshot.image} alt="" />
                            </div>
                            <img className='col-sm-custom w-100 d-none h-100 rounded-3' src={screenshot.image} alt="" />

                        </>
                    )}
                </div>
            </div>
        </div>

    </>
}
