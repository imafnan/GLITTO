import { AiOutlineMinus } from "react-icons/ai"; 
import { BsArrowRight } from "react-icons/bs"; 
import React from 'react'
import t from '../../assets/Img/teambg.png'
import ti from '../../assets/Img/team img.png'

const Team = () => {
  return (
    <>
    <section className='team'>
      <div className='flex mx-auto relative  object-fit-cover container px-0'>
          <img src={t} alt="" className='w-full object-fit-cover' />
           <div className='w-[634px] bg-white absolute top-[240px] left-[330px] rounded-[16px]'>
            <h3 className='w-[459px] mx-auto font-Poppins font-bold leading-[45px] text-[40px] text-black text-center pt-[68px]'>
              Join the team today
              and start your journey
              toward excellence!
            </h3>
            <p className='w-[480px]  font-Poppins font-normal pt-[30px] pb-4 text-[15px] text-black text-center mx-auto'>
               Lorem Ipsum is simply dummy text of the
               printing and typesetting industry. Lorem Ipsum has been 
            </p>
            <p className='flex gap-1  font-Poppins font-normal text-[15px] items-center mx-auto pl-[251px] pb-[64px]'><span className=" border-b-1">Read more info </span><BsArrowRight size={24}/></p>
          <img src={ti} alt="" className=" absolute top-[270px] right-[-53px]" />
          </div>
      </div>
        

    </section>
    </>
  )
}

export default Team