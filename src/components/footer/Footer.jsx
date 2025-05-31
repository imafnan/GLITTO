import React from 'react'
import { Link } from 'react-router-dom'
import lo from '../../assets/Img/logo.png'
import l from '../../assets/Img/Line 16.png'
import { GoArrowUpRight } from 'react-icons/go'
import p from '../../assets/Img/Payment 1.png'
import { FaArrowRight } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <section className='Footer container px-4 md:px-0'>
        <div className="main flex flex-col md:flex-row justify-evenly pt-[71px] gap-10 md:gap-0">
          <div className='md:max-w-[500px]'>
            <img src={lo} alt="logo" />
            <p className='pt-[27px] pb-[17px] w-full md:w-[408px] font-Poppins font-normal text-black'>
              ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
            </p>
            <img src={p}  alt="payment methods" />
            <div className='social-media pt-[119px] pb-[10px]'>
              <h3 className='font-Poppins font-medium text-[15px] text-black'>social media</h3>
              <ul className='flex flex-wrap gap-2 font-Poppins font-medium text-[15px] text-[rgba(0,0,0,0.5)]'>
                <li>
                  <Link className="flex items-center pb-1 gap-1 justify-between border-b border-[rgba(0,0,0,0.5)]">
                    Instagram <span><GoArrowUpRight className='text-black' /></span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center pb-1 gap-1 justify-between border-b border-[rgba(0,0,0,0.5)]">
                    Facebook <span><GoArrowUpRight className='text-black' /></span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center pb-1 gap-1 justify-between border-b border-[rgba(0,0,0,0.5)]">
                    X <span><GoArrowUpRight className='text-black' /></span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center pb-1 gap-1 justify-between border-b border-[rgba(0,0,0,0.5)]">
                    Tiktok <span><GoArrowUpRight className='text-black' /></span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center pb-1 gap-1 justify-between border-b border-[rgba(0,0,0,0.5)]">
                    Linkedin <span><GoArrowUpRight className='text-black' /></span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center pb-1 gap-1 justify-between border-b border-[rgba(0,0,0,0.5)]">
                    Youtube <span><GoArrowUpRight className='text-black' /></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col md:ml-[340px]'>
            <div className='mb-[126px] max-w-xs'>
              <h3 className='font-Poppins font-semibold text-black text-start text-[21px]'>Subscribe newsletter</h3>
              <p className='pb-[22px] font-Poppins font-normal text-black text-[15px]'>
                ext ever since the 1500s, when an unknown
              </p>
              <div className='w-full flex items-center border-2 p-[9px] border-black rounded-[30px]'>
                <input type="email" placeholder='your@gmail.com' className='outline-0 pl-[11px] w-full' />
                <button className='flex items-center gap-[20px] px-[14px] py-[10px] text-[15px] font-Poppins bg-black text-white rounded-[30px]'>
                  submit <span><FaArrowRight className='text-[24px]' /></span>
                </button>
              </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-10 pb-[84px]'>
              <div>
                <h3 className='font-Poppins font-bold text-black text-[15px]'>SHOP</h3>
                <ul className='font-Poppins flex flex-col sm:flex-row gap-5 font-medium p-0 text-[rgba(0,0,0,0.5)] text-[15px]'>
                  <div>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                  </div>
                  <img src={l} alt="line" className='max-md:hidden'/>
                </ul>
              </div>
              <div>
                <h3 className='font-Poppins font-bold text-black text-[15px]'>CONTACT</h3>
                <ul className='font-Poppins flex flex-col sm:flex-row gap-5 font-medium p-0 text-[rgba(0,0,0,0.5)] text-[15px]'>
                  <div>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                  </div>
                  <img src={l} alt="line" className='max-md:hidden'/>
                </ul>
              </div>
              <div>
                <h3 className='font-Poppins font-bold text-black text-[15px]'>LEARN</h3>
                <ul className='font-Poppins flex flex-col gap-5 font-medium p-0 text-[rgba(0,0,0,0.5)] text-[15px]'>
                  <div>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                    <p>Lorem Ipsum</p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-[rgba(0,0,0,0.5)] pb-[45px]'>
          <div className='flex flex-col md:flex-row pt-4 justify-between mx-[10px] md:mx-[102px] font-Poppins font-medium text-[rgba(0,0,0,0.5)] text-[15px] gap-2 md:gap-0'>
            <p>all right reserved - sans brother 2025</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
