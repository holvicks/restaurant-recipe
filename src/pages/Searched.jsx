import {useEffect, useState}  from 'react'
import {useParams} from 'react-router-dom';

function Searched() {

    useEffect(()=>{
        getSearched(params.search);
    }
    ,[params.search])


    const[searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const check = localStorage.getItem('cuisine');
        if (check) {
            setSearchedRecipes(JSON.parse(check))
            console.log("data found in storage")
        }else{
            try{
                const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${import.meta.env.VITE_API_KEY}&query=${name}`);
                if(!data.ok){
                    throw new Error('Network response not ok');
                }
                const recipes = await data.json();
                setSearchedRecipes(recipes.results);
                localStorage.setItem("searched", JSON.stringify(recipes.results));
            }catch(error){
                console.log("error in this", error)
            }
          
        }
       
    };

    return(
        <div>
          {searchedRecipes.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                    <img src={item.image} alt={item.title} className="rounded-lg object-cover w-full h-48" />
                    <h4 className="mt-2 text-center">{item.title}</h4>
                </div>
            ))}
            </div>
    )
}

export default Searched 