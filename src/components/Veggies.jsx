import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Veggies() {

const [veggie, setVeggie] = useState([])

useEffect(() =>{
    getVeggie();
}, []);

const getVeggie = async()=> {
    const checkveggie = localStorage.getItem('veggie');
    if(checkveggie){
        console.log("local storage available")
        setVeggie(JSON.parse(checkveggie))
    }else{
        try {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_API_KEY}&number=9`);
            if (!api.ok) {
                throw new Error('Network response not ok');
            }
            const data = await api.json();
            console.log("Fetched data from API:", data);
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
            setVeggie(data.recipes);
        } catch (error) {
            console.error("Error fetching popular recipes:", error);
        }
    }


    
}
 
    return(
        <>
         <div className=" p-5">
        <h3 className="text-3xl mt-5 font-weight-700 mb-5"> Veggie Recipe</h3>
        <Splide options={ {rewind: false,perPage:4, pagination:false, drag:'free', gap:'5rem', arrow:false}} >
        { 
        veggie.map((recipe)=>{
            return(
                   <SplideSlide >
                                <div className="relative card h-[200px] w-[300px]" key={recipe.id}>
                    <p className="text-white z-20 text-center font-semibold flex transform -translate-x-1/2 absolute top-20 left-1/2">
                        {recipe.title}
                    </p>
                    <img className="object-cover w-full h-full absolute rounded-[30px] z-0" src={recipe.image} alt={recipe.title} />
                    <div className="custom-gradient absolute inset-0 z-10 rounded-[30px]"></div>
                  
                </div>
                    </SplideSlide>  
            );
        })
       }
        </Splide>
        </div>
        </>


    )
}

export default Veggies; 