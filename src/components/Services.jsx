import { RiMailFill } from "react-icons/ri" ; 

function Services() {
  return (
    <div>

        <div className='grid grid-cols-1 md:grid-cols-2 p-8 xl:p-20'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-[40px] font-bold'> How we can help you</h2>
                <p className="text-[20px] text-gray-500"> Follow our newsletter. We will regulary update out latest project and availability </p>

                <form action="" className="w-full">

                    <div className="relative">

                        <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl"/>

                        <input type="text"  className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none" placeholder="Enter your email adress"/>

                        <button type="submit" className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2  -translate-y-1/2 right-2"> Suscribe</button>
                    </div>
                </form>
            </div>            
        </div>
        {/*Servicios*/}
        
        <div>

        </div>

    </div>
  )
}

export default Services