import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    const getSearched = async (name) => {
        const getSearched = localStorage.getItem('searchedRecipes');
        if(getSearched){
            console.log("item found")
            setSearchedRecipes(JSON.parse(getSearched))
        }else{
            try {
                const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}`);
                if (!data.ok) {
                    throw new Error('Network response not ok');
                }
                const recipes = await data.json();
                localStorage.setItem("Searched recipes", JSON.stringify(recipes.results));
                setSearchedRecipes(recipes.results);
                
            } catch (error) {
                console.log("error in this", error);
            }
        }

    };

    return (
        <div className="flex flex-wrap justify-center gap-4 mt-8">
        {searchedRecipes.map((item) => (
            <div key={item.id} className="relative card h-[200px] flex w-[300px] items-center justify-center rounded-[30px] overflow-hidden">
                <img src={item.image} alt={item.title} className="absolute inset-0 object-cover w-full h-full z-0" />
                <h4 className="relative z-10 text-center text-white bg-black bg-opacity-50 px-2 py-1 rounded">{item.title}</h4>
            </div>
        ))}
    </div>
    );
}

export default Searched;
