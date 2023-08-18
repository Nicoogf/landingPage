import React from 'react' ;
import google from "../assets/google.png" ;

function Client() {
  return (
    <div className='bg-gray-100 p-8 flex items-center justify-center flex-col gap-8'>
        <h2 className='text-2xl font-bold text-gray-800'> Trusted by  greatest companies </h2>
        <div className='flex gap-20 items-center'>
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