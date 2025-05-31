import { HiOutlineShoppingCart, HiStar } from "react-icons/hi"; 
import React from 'react'
import { CiSearch } from "react-icons/ci";
import sc1 from '../../assets/Img/shopping-cart-01.png'
import p from '../../assets/Img/4people.png'
import he from '../../assets/Img/hero.png'
import t from '../../assets/Img/tablets.png'

const Hero = () => {
  return (
    <>
    <section className='Hero bg-[#E3FFE1] container'>
  <div className="main_hero bg-[#E3FFE1] pt-[77px]">
    <h2 className='font-Poppins font-bold text-[#1E403D] max-md:text-[50px] text-[100px] text-center sm:text-[40px]'>
      Elevate your wellness
    </h2>

    <div className='flex gap-10 relative flex-col sm:flex-row'>
      <div className='left_text mt-[233px] ml-[50px] mt-10 ml-4 sm:mt-[233px] sm:ml-[50px]'>
        <p className='w-[265px] font-Poppins font-medium text-[#1E403D] text-[15px]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting 
        </p>
        <div className='flex gap-[23px] pt-[30px] pb-[108px]'>
          <button className='flex bg-[#1E403D] gap-1 items-center justify-center px-[20px] py-[14px] rounded-[30px] text-[15px] font-Poppins font-medium text-white '>
            Add to Cart 
            <img src={sc1} alt="" />
          </button>
          <h3 className='font-Poppins font-semibold text-[40px] relative text-[#1E403D] '>
            <span className='absolute top-[0px] left-[-10px] font-Poppins font-bold text-[18px] '>$</span> 68.<span className='text-[rgba(30,64,61,0.5)]'>00</span>
          </h3>
        </div>
        <div className='flex items-center gap-[21px] pb-[82px]'>
          <img src={p} alt="" />
          <p className="w-[85px] text-[15px] font-Poppins font-normal text-[#1E403D]">100k Happy Customer</p>
        </div>
      </div>

      <div className='flex'>
        <img src={he} alt="" />
      </div>

      <div>
        <p className='w-[202px]'>Lorem Ipsum is simply dummy text of the printing</p>
        <img src={t} alt="" className='absolute top-[182px] left-[800px] hidden sm:block' />
        <div className='Reviews mt-[411px] ml-[112px] flex gap-1'>
          <button className="flex items-center border-1 border-[#1E403D] pl-2.5 pr-3.5 py-1.5 rounded-[30px] font-Poppins font-medium text-[#1E403D] text-[15px] ">
            <HiStar className="text-[#FFC04B] h-[18px] w-[18px]"/> 5.0
          </button>
          <button className="flex items-center border-1 border-[#1E403D] pl-2.5 pr-3.5 py-1 rounded-[30px] font-Poppins font-medium text-[#1E403D] text-[15px] ">
            Customer Reviews
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Hero