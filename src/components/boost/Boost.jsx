import React from 'react'
import b from '../../assets/Img/boost.png'

const Boost = () => {
  return (
    <>
      <section className='Boost container bg-[#FAF9EE] pt-[98px] pb-[49px] flex flex-col sm:flex-row justify-center gap-6 px-4 sm:px-0'>
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="box w-full sm:w-[316px] bg-[#F6F5EC] border border-[rgba(0,0,0,0.2)] rounded-[27px]">
            <img src={b} alt="boost" className='mx-auto pt-[53px]' />
            <h3 className='text-center py-5 font-Poppins font-medium text-[25px]'>Wellness Boost</h3>
            <p className='text-center w-full sm:w-[265px] mx-auto pb-[34px] font-Poppins font-normal text-[13px]'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </p>
          </div>
        ))}
      </section>
    </>
  )
}

export default Boost
