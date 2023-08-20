import { RiDoubleQuotesL , RiDoubleQuotesR} from "react-icons/ri" ; 
import daniOsvaldo from "../assets/daniosvald.png" ;
import nahitan from "../assets/img2.png" ;
import alfaro from "../assets/img3.jpg" ;
import scaloni from "../assets/img4.jpg" ;
import gaspar from "../assets/img5.jpg" ;


function Reviews() {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-100">
        <h2 className="text-[40px] text-center font-black" >let´s Hear What They Says</h2>
        <div className=" flex justify-center gap-4">
            <span className="text-5xl text-primary"> <RiDoubleQuotesL /> </span>
            <p className="max-w-2xl text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem ullam voluptates totam soluta officia omnis non magnam quo. Asperiores porro voluptatibus facilis fugiat aliquid commodi cupiditate hic est numquam.
            </p>
            <span className="text-5xl text-primary"> <RiDoubleQuotesR />  </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-8">

          <div className="flex items-center justify-center gap-8 md:gap-12">

          <img src={daniOsvaldo} alt="" className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full "/>
          <img src={nahitan} alt="" className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full "/>
          <img src={alfaro} alt="" className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-primary ring-4 p-2 bg-white"/>
          <img src={scaloni} alt="" className="w-10 h-10 md:w-16 md:h-16  object-cover rounded-full "/>
          <img src={gaspar} alt="" className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full "/>

          </div>

      <div>
        <h3 className="text-center text-[24px] font-bold">Gustavo Alfaro</h3>
        <h5 className="text-center text-[20px] text-gray-500">Director tecnico</h5>
      </div>
        
        </div>
    </div>
  )
}

export default Reviews ;