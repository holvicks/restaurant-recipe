

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    useEffect(() => {
        if (params.type) {
            getCuisine(params.type);
            console.log("Fetching data for cuisine type:", params.type);
        } else {
            console.log("params.type is undefined");
        }
    }, [params.type]);

 


    const getCuisine = async (name) => {
        const check = localStorage.getItem('cuisine');
        if (check) {
            setCuisine(JSON.parse(check))
            console.log("data found in storage")
        }else{
            try{
                const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&cuisine=${name}`);
                if(!data.ok){
                    throw new Error('Network response not ok');
                }
                const recipes = await data.json();
                setCuisine(recipes.results);
                localStorage.setItem("cuisine", JSON.stringify(recipes.results));
            }catch(error){
                console.log("error in this", error)
            }
          
        }
       
    };



    return (
            <div className="w-[70%] mx-auto grid grid-cols-auto-fit gap-6 p-6">
            {cuisine.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                    <img src={item.image} alt={item.title} className="rounded-lg object-cover w-full h-48" />
                    <h4 className="mt-2 text-center">{item.title}</h4>
                </div>
            ))}
        </div>
    );
}

export default Cuisine;
