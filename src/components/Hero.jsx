import { 
    RiCheckboxBlankCircleFill, 
    RiCheckboxBlankFill, 
    RiPlayFill,   
    RiStarFill
} from "react-icons/ri" ;
import figura from "../assets/figura.png" ;
import daniOsvaldo from "../assets/daniosvald.png";
import nahitan from "../assets/img2.png" ;
import alfaro from "../assets/img3.jpg" ;
import scaloni from "../assets/img4.jpg" ;
import gaspar from "../assets/img5.jpg" ;
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";

function Hero() {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-8 ">

       {/* Information */}
       <div className=" md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
            <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
               Web Design Impactful Digital
                <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block"> 
                Products 
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content" />
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content" />
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
                <RiCheckboxBlankCircleFill className="text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content" />
            </span>

            </h1>

            <p className="text-gray-500 text-2xl leading-[2.5em]">Help find solutions with intitutive and in accordance with client business goals , we prvodie a hifh-quality services.</p>

           <div className="flex flex-col md:flex-row items-center gap-4 ">

                <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">Contact Us</button>

                <button className="w-full xl:w-auto flex items-center text-left gap-4 py-2 px-8 rounded-xl text-xl"> 
                <RiPlayFill className="bg-secondary text-primary p-4 box-content rounded-full"/> Watch our <br /> introduccion video
                </button>

           </div>
        </div>

       </div>

            {/* IMAGEN*/ }

       <div className="md:col-span-3 flex items-center justify-center relative">

        {/* Content Image*/}
        <div className="p-8">
            <img src={figura} alt=""  className="w-[250px] sm:h-auto md:w-[450px] md:h-auto object-cover xl:-mt-28"/>
           
            <div className="relative bg-white shadow-xl rounded-lg p-4 flex  flex-col justify-center max-w-[250px] mx-auto -mt-8">

             <div className="flex items-center">

                <img src={daniOsvaldo} alt="" className="w-10 h-10 object-cover rounded-full ring-2"/>

                 <img src={nahitan} alt="" className="w-10 h-10 object-cover rounded-full ring-2 -ml-4"/>

                 <img src={alfaro} alt="" className="w-10 h-10 object-cover rounded-full ring-2 -ml-4"/>

                 <img src={scaloni} alt="" className="w-10 h-10 object-cover rounded-full ring-2 -ml-4"/>

                 <img src={gaspar} alt="" className="w-10 h-10 object-cover rounded-full ring-2 -ml-4"/>

             </div>         

            <h2 className="text-xl font-bold tracking-[.7px] text-gray-800">
                120+ employees
            </h2>

            <div className="flex items-center gap-2 text-lg text-gray-500"> 
                <RiStarFill className="text-primary"/> 5.0 (3.1k Reviews) 
            </div>
            <div className="absolute -right-12 -bottom-12 -z-10">
                <div className="relative">
                    <RiCheckboxBlankCircleFill className="text-primary text-8xl"/>
                    <div className="absolute -left-0 -top-0 bg-white w-14 h-14"> </div>
                </div>               


            </div>
           

            </div>
        </div>

        {/*Circulo */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px] text-[380px] bg-secondary border-[10px] border-primary rounded-full -z-10"></div>

        {/* Logos */}
        <img src={logo1} alt=""  className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] right-[20%] xl:right-[10%] rotate-6"/>

        <img src={logo2} alt=""  className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[%2] left-[20%] xl:left-[10%]"/>

        <img src={logo3} alt=""  className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-800 absolute top-[70%] left-[3%] rotate-12"/>

       </div>


    </section>
  )
}

export default Hero ;