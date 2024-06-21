import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import { NavLink } from "react-router-dom";


const Category =()=> {
    return(
        <>

        <div className="w-[80%] mx-auto flex items-center justify-center px-3 gap-6">
        <NavLink to={"/cuisine/italian"} className="cate-menu rounded-[20%] border bg-[#2c2b2b] w-[6rem] h-[6rem] pointer items-center justify-center flex flex-col">
            <FaPizzaSlice className="text-white text-2xl"/>
            <h4 className="text-white text-1xl">Italian</h4>
        </NavLink>
        <NavLink to={"/cuisine/american"}className="cate-menu rounded-[20%] border bg-[#2c2b2b] w-[6rem] h-[6rem] pointer items-center justify-center flex flex-col">
            <FaHamburger className="text-white text-2xl" />
            <h4 className="text-white text-1xl">American</h4>
        </NavLink>
        <NavLink to={"/cuisine/thai"} className="cate-menu rounded-[20%] border bg-[#2c2b2b] w-[6rem] h-[6rem] pointer items-center justify-center flex flex-col">
            <GiNoodles className="text-white text-2xl"  />
            <h4 className="text-white text-1xl">Thai</h4>
        </NavLink>
        <NavLink to={"/cuisine/japanese"} className="cate-menu rounded-[20%] border bg-[#2c2b2b] w-[6rem] h-[6rem] pointer items-center justify-center flex flex-col">
            <GiChopsticks className="text-white text-2xl" />
            <h4 className="text-white text-1xl">Japanese</h4>
        </NavLink>
        </div>
        
        </>
    )
}

export default Category