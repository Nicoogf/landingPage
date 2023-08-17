import { RiCheckboxBlankCircleFill } from "react-icons/ri" ;

//Icons


function header() {
  return (
   <header className="flex items-center w-full p-4">

    <div className="w-1/6t text-center">

        <span className="text-2xl font-bold relative p-1 bg-white">
            Power <span className="text-primary text-5xl"> .</span>{" "} 
            <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" /> 
        </span>

    </div>

    <nav className="flex-1 text-center">
        <h1>Nav</h1>
    </nav>



   </header>
)
}

export default header