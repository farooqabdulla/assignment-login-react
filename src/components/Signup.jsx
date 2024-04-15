import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    let [name,setName] = useState('')
    let [email,setEmail] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Store email and name in localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', name);
        
        // Clear input fields after submission
        setEmail('');
        setName('');
      };
    return (
        <div className='w-[100%]'>
            <div className='w-[100%] m-auto md:w-[50%] xl:w-[35%] px-[4vw] mt-10'>
                <h1 className='text-[3.5vh] w-[60%] md:w-[100%] md:mt-[13vh] md:text-[5vh] font-[500]'>Create your PopX account</h1>
                <form action="" onSubmit={handleSubmit} className='h-[82.3vh]'>
                    <input type="text" required className='w-[100%] h-[5vh] mt-[2vh] block ring-1 ring-gray-400 rounded-sm pl-2 text-[2.2vh]' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Full Name*' />
                    <input type="text" required className='w-[100%] h-[5vh] mt-[2vh] block ring-1 ring-gray-400 rounded-sm pl-2 text-[2.2vh]' placeholder='Phone Number*' />
                    <input type="email" required className='w-[100%] h-[5vh] mt-[2vh] block ring-1 ring-gray-400 rounded-sm pl-2 text-[2.2vh]' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email address*' />
                    <input type="password" required className='w-[100%] h-[5vh] mt-[2vh] block ring-1 ring-gray-400 rounded-sm pl-2 text-[2.2vh]' placeholder='Password*' />
                    <input type="text" required className='mb-4 w-[100%] h-[5vh] mt-[2vh] block ring-1 ring-gray-400 rounded-sm pl-2 text-[2.2vh]' placeholder='Campany Name*' />
                    <label className='text-[2.3vh]' htmlFor="">Are you Agency?*</label>
                    <div className='w-[40%] sm:w-[20vh] flex justify-between mt-3'>
                        <input defaultChecked className='h-7 w-7 focus:ring-[#6C25FF] dark:focus:ring-[#6C25FF]' name='agency' type="radio" />
                        <label className='text-[2.3vh]' htmlFor="">Yes</label>
                        <input className='h-7 w-7 focus:ring-[#6C25FF] dark:focus:ring-[#6C25FF]' name='agency' type="radio" />
                        <label className='text-[2.3vh]' htmlFor="">No</label>
                    </div>
                    <Link to='/account'><button type='submit' className='w-[100%] mt-[30vh] md:mt-[5vh]  bg-[#6C25FF] text-white py-3 rounded-lg'>Create Account</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Signup