import { 
    RiCheckboxBlankCircleFill, 
    RiPlayFill,   
    RiStarFill
} from "react-icons/ri" ;
import figura from "../assets/figura.png" ;
import daniOsvaldo from "../assets/daniosvald.png";
import nahitan from "../assets/img2.png" ;
import alfaro from "../assets/img3.jpg" ;
import scaloni from "../assets/img4.jpg" ;
import gaspar from "../assets/img5.jpg" ;


function Hero() {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
       <div className=" md:col-span-5 flex items-center justify-center p-16">

        <div className="flex flex-col gap-8">
            <h1 className="text-7xl font-bold leading-[7.5rem]">Web Design Impactful Digital

            <span className="text-primary py-2 px-6 border-8 border-primary relative"> 
            Products 
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>

            </h1>

            <p className="text-gray-500 text-2xl leading-[2.5em]">Help find solutions with intitutive and in accordance with client business goals , we prvodie a hifh-quality services.</p>

           <div className="flex items-center  gap-4 ">

                <button className="bg-primary text-white py-2 px-8 rounded-xl text-xl">Contact Us</button>

                <button className="flex items-center text-left gap-4 py-2 px-8 rounded-xl text-xl"> 
                <RiPlayFill className="bg-secondary text-primary p-4 box-content rounded-full"/> Watch our <br /> introduccion video
                </button>

           </div>
        </div>

       </div>

            {/* IMAGEN*/ }

       <div className="md:col-span-3 flex items-center justify-center flex-col gap-2 relative">

        <div>

            <img src={figura} alt=""  className="w-[450px] h-auto object-cover -mt-28"/>
            <div className="">
            <div className="relative bg-white shadow-xl rounded-lg p-4 flex justify-center max-w-[250px] mx-auto flex-col">

             <div className="flex items-center">

                <img src={daniOsvaldo} alt="" className="w-10 h-10 object-cover rounded-full ring-2"/>

                 <img src={nahitan} alt="" className="w-10 h-10 object-cover rounded-full ring-2 -ml-4"/>

                 <img src={alfaro} alt="" className="w-10 h-10 object-cover rounded-full ring-2 -ml-4"/>

                 <img src={scaloni} alt="" className="w-10 h-10 object-cover rounded-full ring-2 -ml-4"/>

                 <img src={gaspar} alt="" className="w-10 h-10 object-cover rounded-full ring-2 -ml-4"/>

             </div>

           


            <h2 className="text-xl font-bold tracking-[.7px] text-gray-800">120+ employees</h2>
            <div className="flex items-center gap-2 text-lg text-gray-500"> 
                <RiStarFill className="text-primary"/> 5.0 (3.1k Reviews) 
            </div>
            <RiCheckboxBlankCircleFill className="absolute text-primary text-8xl -right-12 -bottom-12 -z-10"/>

            </div>
            </div>

           

        </div>

       
            
            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[380px] h-[380px] text-[380px] bg-secondary border-[10px] border-primary rounded-full -z-10"></div>
       </div>


    </section>
  )
}

export default Hero ;