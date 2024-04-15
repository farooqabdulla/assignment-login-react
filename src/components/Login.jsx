import React from 'react'


const Login = () => {
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
                <h1 className='text-[3.5vh] w-[60%] md:w-[100%] md:mt-[25vh] md:text-[5vh] font-[500]'>Signin to your PopX account</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                <form onSubmit={handleSubmit} action="" className='h-[82.3vh]'>
                    <input type="email" required className='w-[100%] h-[5vh] mt-[2vh] block ring-1 ring-gray-400 rounded-sm pl-2 text-[2.2vh]' placeholder='Email address*' />
                    <input type="password" required className='w-[100%] h-[5vh] mt-[2vh] block ring-1 ring-gray-400 rounded-sm pl-2 text-[2.2vh]' placeholder='Password*' />
                    <button className='w-[100%] mt-[3vh] md:mt-[5vh]  bg-[#6C25FF] text-white py-3 rounded-lg'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login