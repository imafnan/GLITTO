import React from 'react'
import p from '../../assets/Img/product.png'
import pc from '../../assets/Img/shopping-cart-01.png'
import arrow from '../../assets/Img/arrow-right.png'

const Collection = () => {
  return (
    <>
    <section className='Collection container px-[105px] pb-[90px]'>
        <div className='flex  pt-[82px] pb-[50px] items-center justify-between'>
            <h2 className='w-[260px] font-Poppins font-medium text-[40px] text-black'>Discover Our Collection</h2>
            <p className='w-[265px] text-end font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        </div>
        {/*  */}
        <div className='flex justify-between'>

            <div className="product w-[322px] h-[360px] bg-[#F6F6F6] rounded-[8px]">
                <p className='font-Poppins font-medium text-black text-[13px] text-end pt-[12px] mr-[19px]'>New Product</p>
                <div className='flex ml-[90px] mt-[19px]'>
                    <img src={p}alt=""/>
                </div>
                <div className='w-[294px] flex justify-between  items-center bg-[#FFFFFF] mx-auto mt-[22px] rounded-[2px]'>
                    <h3 className='leading-[17px] pl-[7px] py-1 font-Poppins font-medium text-[15px] text-black'>Advanced formula adult <br />
                        <span className='text-[13px]'>from : $79.00</span>
                    </h3>
                    <div className='bg-black w-[38px] h-[36px] m-1 rounded-[4px] flex items-center justify-center'><img src={pc}alt="" /></div>
                </div>
            </div>

            <div className="product w-[322px] h-[360px] bg-[#F6F6F6] rounded-[8px]">
                <p className='font-Poppins font-medium text-black text-[13px] text-end pt-[12px] mr-[19px]'>New Product</p>
                <div className='flex ml-[90px] mt-[19px]'>
                    <img src={p}alt=""/>
                </div>
                <div className='w-[294px] flex justify-between  items-center bg-[#FFFFFF] mx-auto mt-[22px] rounded-[2px]'>
                    <h3 className='leading-[17px] pl-[7px] py-1 font-Poppins font-medium text-[15px] text-black'>Advanced formula adult <br />
                        <span className='text-[13px]'>from : $79.00</span>
                    </h3>
                    <div className='bg-black w-[38px] h-[36px] m-1 rounded-[4px] flex items-center justify-center'>
                        <img src={pc}alt="" />
                     </div>
                </div>
            </div>

            <div className="product w-[322px] h-[360px] bg-[#F6F6F6] rounded-[8px]">
                <p className='font-Poppins font-medium text-black text-[13px] text-end pt-[12px] mr-[19px]'>New Product</p>
                <div className='flex ml-[90px] mt-[19px]'>
                    <img src={p}alt=""/>
                </div>
                <div className='w-[294px] flex justify-between  items-center bg-[#FFFFFF] mx-auto mt-[22px] rounded-[2px]'>
                    <h3 className='leading-[17px] pl-[7px] py-1 font-Poppins font-medium text-[15px] text-black'>Advanced formula adult <br />
                        <span className='text-[13px]'>from : $79.00</span>
                    </h3>
                    <div className='bg-black w-[38px] h-[36px] m-1 rounded-[4px] flex items-center justify-center'
                    ><img src={pc}alt="" />
                    </div>
                </div>
            </div>
        
        </div>
        <h3 className='pt-[63px] font-Poppins font-medium text-black text-[25px]'>See More Produce </h3>
        <button className='w-[73px] h-[34px] mt-1 bg-black flex items-center justify-center rounded-[17px]'>
            <img src={arrow} alt="" />
        </button>

    </section>
    </>
  )
}

export default Collection