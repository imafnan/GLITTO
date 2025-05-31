import React from 'react'
import p from '../../assets/Img/product.png'
import pc from '../../assets/Img/shopping-cart-01.png'
import arrow from '../../assets/Img/arrow-right.png'

const Collection = () => {
  return (
    <>
      <section className='Collection container px-4 md:px-[105px] pb-[90px]'>
        {/* Heading and description */}
        <div className='flex flex-col sm:flex-row pt-[82px] pb-[50px] items-center justify-between'>
          <h2 className='w-full sm:w-[260px] font-Poppins font-medium text-[40px] text-black mb-4 sm:mb-0 text-center sm:text-left'>
            Discover Our Collection
          </h2>
          <p className='w-full sm:w-[265px] text-center sm:text-end font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </p>
        </div>

        {/* Products container */}
        <div className='flex flex-col sm:flex-row justify-between gap-6'>
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className='product w-full sm:w-[322px] h-[360px] bg-[#F6F6F6] rounded-[8px] flex flex-col'
            >
              <p className='font-Poppins font-medium text-black text-[13px] text-end pt-[12px] mr-[19px]'>
                New Product
              </p>
              <div className='flex justify-center mt-[19px] flex-grow'>
                <img src={p} alt='product' className='max-h-full object-contain' />
              </div>
              <div className='w-[294px] flex justify-between items-center bg-[#FFFFFF] mx-auto mt-[22px] rounded-[2px] px-2 py-1'>
                <h3 className='leading-[17px] pl-[7px] py-1 font-Poppins font-medium text-[15px] text-black'>
                  Advanced formula adult <br />
                  <span className='text-[13px]'>from : $79.00</span>
                </h3>
                <div className='bg-black w-[38px] h-[36px] m-1 rounded-[4px] flex items-center justify-center'>
                  <img src={pc} alt='cart' />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Section */}
        <h3 className='pt-[63px] font-Poppins font-medium text-black text-[25px] text-center sm:text-left'>
          See More Produce
        </h3>
        <div className='flex justify-center sm:justify-start'>
          <button className='w-[73px] h-[34px] mt-1 bg-black flex items-center justify-center rounded-[17px]'>
            <img src={arrow} alt='arrow' />
          </button>
        </div>
      </section>
    </>
  )
}

export default Collection
