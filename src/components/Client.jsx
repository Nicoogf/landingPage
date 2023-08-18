import google from "../assets/google.png" ;

function Client() {
  return (
    <div className='bg-gray-100 p-8 flex items-center justify-center flex-col gap-8 mt-20 xl:mt-0'>
        <h2 className='text-2xl font-bold text-gray-800 text-center'> Trusted by  greatest companies </h2>
        <div className='flex flex-col md:flex-row justify-center flex-wrap gap-20 items-center'>
            <img src={google} alt=""  className='w-40'/>
            <img src={google} alt=""  className='w-40'/>
            <img src={google} alt=""  className='w-40'/>
            <img src={google} alt=""  className='w-40'/>
            <img src={google} alt=""  className='w-40'/>
        </div>
    </div>
  )
}

export default Client