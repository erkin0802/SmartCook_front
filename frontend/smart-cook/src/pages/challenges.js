import MainContainer from "@/components/MainContainer";
import Navbar from "@/components/Navbar";
import food from "@/../public/images/food.jpg";
import Image from "next/image";
import clock from "@/../public/images/clock.svg";
import people from "@/../public/images/profile-2user.svg";
import avatar from "@/../public/images/avatar.jpg";
import love from "@/../public/images/love.png";
import fav from "@/../public/images/favorite.png";
import potato from "@/../public/images/potato.jpg";
import Recipe from "@/components/Recipe";
import AcceptedBattle from "@/components/modal/battle-cards/profile-battle-cards/AcceptedBattle"

const Challenges = () => {
    return (
        <MainContainer>
            <div className=" w-full max-w-[1195px] relative flex flex-col items-center">
                <Navbar />
                <div
                    className={`gap-4 mt-5 flex flex-col items-center justify-center text-center `}
                >
                    <h1 className={`flex self-center text-3xl mt-3 font-bold`}>
                        Culinary Clash: Battle Royale of Flavors
                    </h1>
                    <p className={" font-[400]"}>
                        Take part in heated culinary duels, where the most
                        mouth-watering recipes compete for<br></br> supremacy.
                        Show your support by liking your favorite dueling dishes
                        as they compete to<br></br> be crowned the ultimate
                        flavor champion.
                    </p>
                </div>

                <div className="flex items-center space-x-4 mt-10">
                    <button className="px-4 py-2 rounded-full bg-[#AAE06E] hover:bg-green-500 focus:outline-none w-[450px] text-white text-xl font-bold h-[60px]">
                        Let&apos;s Battle
                    </button>
                </div>

                <h1 className={`self-start text-3xl mt-10 font-bold`}>
                    Current Battles
                </h1>

                <div className="flex flex-wrap justify-between">
                   <AcceptedBattle />
                   <AcceptedBattle />
                   <AcceptedBattle />
                   <AcceptedBattle />
                </div>
                <button className="text-white bg-[#AAE06E] self-start w-[250px] h-[48px] rounded-3xl text-lg font-bold mb-20 mt-10">Load More</button>
                
            </div>
        </MainContainer>
    );
};

export default Challenges;