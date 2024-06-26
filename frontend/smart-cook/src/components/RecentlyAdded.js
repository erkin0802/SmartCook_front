import React, {useEffect, useState} from "react";
import Recipe from "./Recipe";
import axios from "axios";
import {config} from "../../config";
import Link from "next/link";


const RecentlyAdded = () => {
    const [recipes, setRecipes] = useState(null);
    const [displayedRecipes, setDisplayedRecipes] = useState(8); // Initial number of recipes displayed

    const loadMoreRecipes = () => {
        setDisplayedRecipes(prevCount => prevCount + 4); // Increment by 4 each time the button is clicked
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await axios.get(`${config.baseUrl}/api/v1/all-recipes/`);
            setRecipes(data.data);
            console.log(recipes);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="mt-32 flex flex-col items-center justify-center">
            <div className="text-white text-4xl ">Recently added recipes</div>
            <div className="mt-10 grid pl-10 sm:pl-8 md:pl-0 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
                {recipes && recipes.slice(0, displayedRecipes).map((recipe, index) => (
                    <Link key={index} href="/recipes/[recipeTitle]" as={`/recipes/${recipe.id}`} passHref>
                        <Recipe recipe={recipe} />
                    </Link>
                ))}
            </div>
            <Link href={"/all-receipts"} className="w-max self-start text-white px-16 font-bold py-2 mt-4 rounded-3xl tracking-wide bg-[#AAE06E]">Load More</Link>
        </div>
    )
}

export default RecentlyAdded;