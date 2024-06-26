import {useState} from "react";
import {config} from "../../../config";
import axios from "axios";
import ChoiceCards from "@/components/profile-page/ChoiceCards";
import AcceptedBattle from "@/components/modal/battle-cards/profile-battle-cards/AcceptedBattle";

const Chooser = ({userProfile}) => {
    const [activeOption, setActiveOption] = useState(null);
    const [myRecipes, setMyRecipes] = useState(null);
    const [pastBattles, setPastBattles] = useState(null);
    const [savedRecipes, setSavedRecipes] = useState(null);
    const handlePBClick = async () => {
        setActiveOption('Past battles');
        try {
            const response = await axios.get(`${config.baseUrl}/api/v1/user/clash-history/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
                }
            });
            setPastBattles(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleMRClick = async () => {
        setActiveOption('My recipe');
        try {
            const response = await axios.get(`${config.baseUrl}/api/v1/my-recipes/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
                }
            });
            setMyRecipes(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSRClick = async () => {
        setActiveOption('Saved recipe');
        try {
            const response = await axios.get(`${config.baseUrl}/api/v1/user/favorites/`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
                }
            });
            setSavedRecipes(response.data);
            console.log(response.data); // Make sure to access the response data properly
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-full">
            <div
                className={'w-full xl:w-[1196px] space-x-4 transition-all duration-500 h-[97px] py-[24px] px-[40px] flex flex-row bg-[#2A293B] rounded-3xl mt-6'}>
                <div
                    className={`cursor-pointer p-3 text-center md:px-[38px] md:w-[220px] h-[49px] md:text-[24px] font-[500] flex justify-center items-center rounded-3xl transition-all duration-500 ${
                        activeOption === 'Past battles' ? 'bg-gradient-to-r from-[#AAE06E] to-[#CDE7B1] text-[#2A293B]' : 'text-white'
                    }`}
                    onClick={handlePBClick}
                >
                    Past battles
                </div>
                <div
                    className={`cursor-pointer p-3 text-center md:px-[38px] h-[49px] text-[#2A293B] md:text-[24px] font-[500] flex justify-center items-center rounded-3xl transition-all duration-500 ${
                        activeOption === 'My recipe' ? 'bg-gradient-to-r from-[#AAE06E] to-[#CDE7B1] text-[#2A293B]' : 'text-white'
                    }`}
                    onClick={handleMRClick}
                >
                    My recipe
                </div>
                <div
                    className={`cursor-pointer p-3 text-center md:px-[38px] h-[49px] text-[#2A293B] md:text-[24px] font-[500] flex justify-center items-center rounded-3xl transition-all duration-500 ${
                        activeOption === 'Saved recipe' ? 'bg-gradient-to-r from-[#AAE06E] to-[#CDE7B1] text-[#2A293B]' : 'text-white'
                    }`}
                    onClick={handleSRClick}
                >
                    Saved recipe
                </div>
            </div>
            {activeOption !== 'Past battles' ?
                <ChoiceCards userProfile={userProfile} recipes={activeOption === 'My recipe' ? myRecipes : activeOption === 'Saved recipe' ? savedRecipes : myRecipes}/>
                :
                <div className={`w-full grid grid-cols-2 pt-3`}>
                    {pastBattles?.map((item, index) => (
                        <AcceptedBattle key={index} battle={item}/>
                    ))}
                </div>
            }
        </div>

    );
};

export default Chooser;