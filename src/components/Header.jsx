
import { useState } from "react";

//Icons
import { 
    RiCheckboxBlankCircleFill, 
    RiMenu3Fill,
    RiCloseLine 
} from "react-icons/ri" ;

function Header() {
    const[showMenu,setShowMenu] = useState(false); 

  return (
   <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50">

    <div className="xl:w-1/6 text-center -mt-4">

        <a href="#">
            <span className="text-2xl font-bold relative p-1 bg-white">
                Power <span className="text-primary text-5xl"> .</span>{" "} 
                <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" /> 
            </span>
        </a>

        

    </div>

    <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full 
    ${ showMenu ? "left-0" : "-left-full" }
    xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-300 top-0`}>  

        
        <a href="#" className=""> Home </a>
        <a href="#" className=""> About </a>
        <a href="#" className=""> Services </a>
        <a href="#" className=""> Products </a>
    </nav>

    <button className="text-2xl p-2 xl:hidden" onClick={()=> setShowMenu(!showMenu)}>

    { showMenu ? <RiCloseLine /> : <RiMenu3Fill /> }
         
    </button>



   </header>
)
}

export default Header ;