import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function Search(){

    const[input, setInput] = useState("");
    const navigate = useNavigate();


    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/'+input)
    };

    return(
       <form  onSubmit={submitHandler} className='my-5 py-[40px] relative  mx-auto'>
        <div className='flex  mx-auto items-center justify-center w-full'>
        <FaSearch className=' svg-search'></FaSearch>
        <input
         onChange={(e) => setInput(e.target.value)} type="text" value={input} className='  formstyle w-[30%] text-[20px]'/>
        </div>
            <h1>{input}</h1>
       </form>
    );
}

export default Search