import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let Navigate = useNavigate()
  return (
    <div className='w-[100%] h-[100vh] flex justify-center'>
        <div className='w-[100%] md:w-[50%] h-[30vh] md:h-[40vh] absolute bottom-0 md:bottom-52 rounded-lg flex flex-col justify-center px-4'>
            <h1 className='text-[3vh] md:text-[5vh] text-[#2A2F33] font-bold'>Welcome to PopX</h1>
            <p className='text-[2vh] w-[70%] text-[#94979A]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <button onClick={()=>{Navigate('signup')}} className='w-[100%] mb-3 mt-6 text-[2vh] py-3 bg-[#6C25FF] rounded-lg text-white'>Create Account</button>
            <button onClick={()=>{Navigate('login')}} className='w-[100%] text-[2vh] py-3 bg-[#CEBAFB] rounded-lg text-[#1D2226]'>Already Registered? Login</button>
        </div>
    </div>
  )
}

export default Home