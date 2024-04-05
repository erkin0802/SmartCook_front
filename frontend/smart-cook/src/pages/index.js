import MainContainer from "@/components/MainContainer";
import React from "react";
import "../app/globals.css";
import bg from "../../public/images/greenBg.svg"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import WelcomeTry from "@/components/WelcomeTry";
import RecentlyAdded from "@/components/RecentlyAdded";
import FollowAlong from "@/components/FollowAlong";
import Footer from "@/components/Footer";
import EightPuzzle from "@/components/EightPuzzle";
import DynamicQuiz from "@/components/Quiz";
import MiniGames from "@/components/MiniGames";

const Main = () => {
    return (
        <MainContainer>
            <Image src={bg} className="absolute w-2/3 right-0 top-0 z-0" alt="background"/>
            <div className=" w-full max-w-[1195px] relative flex flex-col ">
                <Navbar/>
                <WelcomeTry/>
                <RecentlyAdded/>
                <MiniGames/>
                <div className={`flex flex-row justify-around`}>
                    <EightPuzzle/>
                    <DynamicQuiz/>
                </div>
                <FollowAlong/>
                <Footer/>
            </div>


        </MainContainer>
    )
}

export default Main;