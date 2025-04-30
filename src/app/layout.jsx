'use client'
import { Geist, Geist_Mono } from "next/font/google";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import "./globals.css";
import "./globalsrwd.css";
import BootstrapClient from "./_layout/bootstrap/BootstrapClient";
import Navbar from "./_layout/navbar/page";
import Footer from "./_layout/footer/page";
import UserContextProvider from "./context/userContext";
import { createContext, useContext } from "react";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Free To Game</title>
      <body className="">
          <Navbar />
          <BootstrapClient></BootstrapClient>
          {children}

        {/* <UserContextProvider> */}

        {/* </UserContextProvider> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}


//apis
//https://www.freetogame.com/api/games
//https://www.freetogame.com/api/games?platform=pc --- platform pc\browser
//https://www.freetogame.com/api/games?category=shooter --- category : MMO\MMORPG\shooter\strategy\moba\card\racing\sports\social\fighting
//https://www.freetogame.com/api/games?sort-by=alphabetical --- sort-by relevance\popularity\relasedata\alphabetical
//https://www.freetogame.com/api/games?platform=browser&category=mmorpg&sort-by=release-date --- Games by platform & category & sorted
//https://www.freetogame.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc --- Filter Games by multiple tags for personalized results
//https://www.freetogame.com/api/game?id=452 -- details
//https://www.freetogame.com/api/Coming Soon 
//
//