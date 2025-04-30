'use client'

import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"



export default function MainPage() {
  const [allGamesList, setAllGamesList] = useState([])
  const [currentNum, setcurrentNum] = useState(0)

  async function getGames() {
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
      // console.log(response.data);
      setAllGamesList(data)
      setcurrentNum(Math.ceil(Math.random() * 80))
    } catch (error) {
      // console.log(error);

    }

  }

  // console.log(Math.ceil(Math.random() * 80));
  useEffect(() => {
    getGames()

  }, [])


  // console.log('sgsj agp iyqgbjnquo'.split('').splice(0, 10).join(''));

  return <>
    <header className="d-flex align-items-center justify-content-center text-center">
      <div className="head-content text-white-50 w-100">
        <h2>Find & track the best free-to-play games!  </h2>
        <p>Track what you've played and search for what to play next! Plus get free premium loot!</p>
        <Link href={`/allgames`}><button className="btn btn-outline-secondary">Browser Game</button></Link>
        <div className="layer"></div>
      </div>
    </header>
    <div className="bg-dark">
      <div className="container py-5">
        <h4 className="text-white-50">Personalized Recommendations      </h4>
        <div className="row g-3 my-4 justify-content-center">
          <div className="col-md-4 pointer">
            <div className="p-3 m-1 rounded-3 bg-dark">
              <Link className="text-decoration-none" href={`/details/${allGamesList[currentNum]?.id}`}>
                <img src={allGamesList[currentNum]?.thumbnail} className="w-100 rounded-3" alt="" />
                <div className="d-flex my-3 align-items-center justify-content-between">
                  <h3 className="h5 text-white-50 m-0 ">{allGamesList[currentNum]?.title}</h3>
                  <button className="btn btn-info btn-sm">Free</button>
                </div>
                <p className='text-white-50 mt-4'>{(allGamesList[currentNum]?.short_description)?.split('').splice(0, 70).join('')} ....</p>
              </Link>

            </div>
          </div>
          <div className="col-md-4 pointer">
            <div className="p-3 m-1 rounded-3 bg-dark">
              <Link className="text-decoration-none" href={`/details/${allGamesList[currentNum + 1]?.id}`}>
                <img src={allGamesList[currentNum + 1]?.thumbnail} className="w-100 rounded-3" alt="" />
                <div className="d-flex my-3 align-items-center justify-content-between">
                  <h3 className="h5 text-white-50 m-0 ">{allGamesList[currentNum + 1]?.title}</h3>
                  <button className="btn btn-info btn-sm">Free</button>
                </div>
                <p className='text-white-50 mt-4'>{(allGamesList[currentNum + 1]?.short_description)?.split('').splice(0, 70).join('')} ....</p>
              </Link>
            </div>
          </div>
          <div className="col-md-4 pointer">
            <div className="p-3 m-1 rounded-3 bg-dark">
              <Link className="text-decoration-none" href={`/details/${allGamesList[currentNum+2]?.id}`}>
                <img src={allGamesList[currentNum + 2]?.thumbnail} className="w-100 rounded-3" alt="" />
                <div className="d-flex my-3 align-items-center justify-content-between">
                  <h3 className="h5 text-white-50 m-0 ">{allGamesList[currentNum + 2]?.title}</h3>
                  <button className="btn btn-info btn-sm">Free</button>
                </div>
                <p className='text-white-50 mt-4'>{(allGamesList[currentNum + 2]?.short_description)?.split('').splice(0, 70).join('')} ....</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>

  </>
}