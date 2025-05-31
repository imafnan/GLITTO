import React from 'react'
import { FaStar } from 'react-icons/fa'
import c from '../../assets/Img/curly.png'
import p from '../../assets/Img/product2.png'
import sc1 from '../../assets/Img/shopping-cart-01.png'  
import fav from '../../assets/Img/fav.png'               

const Product = () => {
  return (
    <>
      <section className='Product'>
        <div className='container flex flex-col md:flex-row items-center relative justify-center py-[90px] bg-[#FEF2E6] px-4 md:px-0'>
          {/* Background curly image */}
          <img src={c} alt="" className='w-full absolute top-[167px] object-cover' />
          
          {/* Content */}
          <div className='z-20 text-center md:text-left md:max-w-md'>
            <img src={p} alt="product" className='mx-auto md:mx-0' />
            
            <p className="font-Poppins font-bold text-[33px] text-black mt-6">
              only <span className="text-[59px] pl-4">$35.99</span>
            </p>
            
            <p className="font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)] pb-3 max-w-xs mx-auto md:mx-0">
              Lorem Ipsum is simply dummy text of the printing and
            </p>
            
            <p className="flex justify-center md:justify-start items-center gap-[10px] font-Poppins font-semibold text-[19px] pb-5">
              <FaStar color="#FFC04B" size={18} />
              <FaStar color="#FFC04B" size={18} />
              <FaStar color="#FFC04B" size={18} />
              <FaStar color="#FFC04B" size={18} />
              <FaStar color="#FFC04B" size={18} />
              12,832 <span className="font-normal text-[rgba(0,0,0,0.5)]">Review</span>
            </p>

            <div className='flex justify-center md:justify-start gap-[21px] items-center'>
              <button className='flex bg-[#1E403D] gap-1 items-center justify-center px-[18px] py-[14px] rounded-[30px] text-[15px] font-Poppins font-medium text-white'>
                Add to Cart <img src={sc1} alt="cart" />
              </button>
              <span className='w-[46px] h-[46px] flex items-center justify-center'>
                <img src={fav} alt="favorite" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product
