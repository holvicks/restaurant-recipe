import Popular  from '../components/Popular'
import  Veggies  from '../components/Veggies'
import React from 'react';

function Homepage() {
    return(
        <>
        <div className="w-[80%]  mx-auto">
        <Veggies />
        <Popular />
        </div>
        </>


    )
}

export default Homepage;