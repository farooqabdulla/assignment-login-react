import React from 'react'

const Account = () => {
    return (
        <div className='h-[100vh] w-[100%]'>
            <nav className='flex pl-5 items-center shadow-sm shadow-black h-[10vh]'>
                <h1 className='text-[2.2vh] text-[#353A3D] md:text-[3vh]'>Account Setting</h1>
            </nav>
            <div className='md:flex md:mt-10 md:px-[7vw]'>
                <div className='flex md:block px-6 pt-5 '>
                    <div>
                        <img className='h-[10vh] bg-cover w-[10vh] md:h-[31vh] md:w-[55vh] rounded-[50%] bg-gray-400' src="https://images.unsplash.com/photo-1596434300655-e48d3ff3dd5e?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className=' ml-[2vh]'>
                        <h1 className='text-[2vh] font-[500] md:text-[5vh]'>Marry Doe</h1>
                        <h3 className='text-[1.5vh] mt-1 md:text-[2.5vh]'>MarryDoe@gmail.com</h3>
                    </div>
                </div>
                <p className='px-[3vh] md:text-[3vh] md:px-[5vw] md:font-[200] mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ab aliquid maiores minima, reprehenderit soluta! Illo, modi distinctio. Aspernatur repudiandae atque repellendus, at id vitae nemo cumque consectetur deserunt recusandae!
                Saepe reprehenderit quia expedita, commodi blanditiis distinctio! Quibusdam optio adipisci facere pariatur corporis quos quaerat quas minima a dolorum vel animi culpa officia expedita, eos sunt velit iste numquam libero? ipsum dolor sit amet consectetur adipisicing elit. Laborum expedita, esse consectetur harum, itaque ab corporis eligendi quia pariatur, blanditiis nam? Laboriosam, blanditiis. Est voluptatem a illum, nemo beatae autem?</p>
            </div>
        </div>
    )
}

export default Account