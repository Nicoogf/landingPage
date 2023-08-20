import foto1 from "../assets/work1.png"
import foto2 from "../assets/work2.png"
import foto3 from "../assets/work3.png"
import foto4 from "../assets/work4.png"
import foto5 from "../assets/work5.png"

function Works() {
  return (

    <div className='p-8 xl:p-20'>
        <div className="mb-8">
            <h2 className='text-[40px] font-black'>We create world-Class digital Products</h2>
            <p className='text-xl text-gray-500'>By information abaout design the world to the best intructors, heact helping by information</p>
        </div>

        { /*Works */ }

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-2'>
            <img src={foto1}  className='w-full h-[600px] object-cover rounded-3xl'/>
            <p className='text-gray-500 '>App Desing -Agosto 15 , 2023</p>
            <h3 className="text-2xl font-bold">App Design</h3>
            <p className='text-gray-500'>By information about desing the world to the best instructro, heact, heling By information about segund the world to the best instructs , heact helping</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="flex flex-col gap-4">
                        <img src={foto2} alt="" className='w-full h-56 object-cover rounded-3xl'/>
                        <p className='text-gray-500 '>App Desing -Agosto 15 , 2023</p>
                        <h3 className="text-xl font-bold">Redesign channel website landng page</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src={foto3} alt="" className='w-full h-56 object-cover  rounded-3xl'/>
                        <p className='text-gray-500 '>App Desing -Agosto 15 , 2023</p>
                        <h3 className="text-xl font-bold">Redesign channel website landng page</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src={foto4} alt="" className='w-full h-56 object-cover  rounded-3xl'/>
                        <p className='text-gray-500 '>App Desing -Agosto 15 , 2023</p>
                        <h3 className="text-xl font-bold">Redesign channel website landng page</h3>
                    </div>

                    <div className="flex flex-col gap-4">
                        <img src={foto5} alt="" className='w-full h-56 object-cover  rounded-3xl'/>
                        <p className='text-gray-500 '>App Desing -Agosto 15 , 2023</p>
                        <h3 className="text-xl font-bold">Redesign channel website landng page</h3>
                    </div>

            </div>
           

        </div>
    </div>
  )
}

export default Works