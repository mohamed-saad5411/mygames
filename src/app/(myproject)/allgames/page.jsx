
'use client'

import axios from 'axios'
import Image from 'next/image'
import notfoundimg from '../../assets/shutterstock_479042983.jpg.webp'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'



export default function Allgames() {

    const [AllGames, setAllGames] = useState([])

    async function getAllGames() {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            headers: {
                'x-rapidapi-key': '14943b72e7mshcd54d538d7abf71p18bfaajsnacbfc639325b',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const { data } = await axios.request(options);
            setAllGames(data)
        } catch (error) {
            //   console.error(error);
        }

    }

    useEffect(() => {
        getAllGames()
    }, [])

    return <>
        <div className="container my-5 py-5">
            <div className="row justify-content-center g-3">
                {AllGames.map((game) =>
                    <div key={game.id} className="col-md-6 col-lg-4 pointer">
                        <Link className='text-decoration-none' href={`details/${game.id}`}>
                            <div className="p-3 m-1 rounded-3 bg-dark">
                                <img src={game?.thumbnail} className="w-100 rounded-3" alt="" />
                                <div className="d-flex my-3 align-items-center justify-content-between">
                                    <h3 className="h5 text-white-50 m-0 ">{game?.title}</h3>
                                    <button className="btn btn-secondary btn-sm">{game.genre}</button>
                                </div>
                                <p className='text-white-50 mt-4'>{(game.short_description).split('').splice(0, 70).join('')} ....</p>
                            </div>
                        </Link>
                    </div>

                )}
            </div>
        </div>

    </>
}