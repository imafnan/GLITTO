import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FaStar } from 'react-icons/fa';
import c from '../../assets/Img/customer.png'


const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[117px] z-10 top-[-120px] transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow"
  >
    <BsArrowLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[60px] z-10 top-[-120px] transform -translate-y-1/2 bg-black text-white p-2 rounded-full shadow"
  >
    <BsArrowRight size={20} />
  </button>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Customers = () => {
  return (
    <>
    <section className='Customers container pt-[99px] pb-[103px]'>
        <h2 className='pl-[68px] font-Poppins font-medium text-[40px] text-black'>What say our customers</h2>
        <p className='pl-[68px] w-[494px] pb-[72px] font-Poppins font-normal text-[15px] text-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
        <div className="slider-container mx-[42px]">
        <Slider {...settings}>
          <div className="box1  ">
           <h3 className="w-[345px]  rounded-[16px] p-6 border-t-[#fff] border-b-[rgba(0,0,0,0.1)] border-2 border-[rgba(182,182,182,0.1)] ">
            <div className='flex gap-[22px] items-center'>
                <img src={c} alt="" />
                <div>
                    <p className='font-Poppins font-bold text-[15px]'>Albert stevano</p>
                    <p className='font-Poppins font-normal text-[15px]'>ceo & Founder Global Bank </p>
                </div>
            </div>
                <p className='w-[287px] pt-[31px] pb-[16px] font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)]'>Lorem Ipsum is simply dummy text
                     of the printing and typesetting 
                     industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since
                </p>
                <div className="flex justify-between">
                    <span className='font-mono font-bold text-[28px] text-black'>afterpay</span>
                    <span className="flex items-center justify-center gap-1"><FaStar color="#FFC04B"/> 5.0</span>
                </div>
            </h3>
          </div>
          <div className="box1">
           <h3 className="w-[345px]   rounded-[16px] p-6 border-t-[#fff] border-b-[rgba(0,0,0,0.1)] border-2 border-[rgba(182,182,182,0.1)] ">
            <div className='flex gap-[22px] items-center'>
                <img src={c} alt="" />
                <div>
                    <p className='font-Poppins font-bold text-[15px]'>Albert stevano</p>
                    <p className='font-Poppins font-normal text-[15px]'>ceo & Founder Global Bank </p>
                </div>
            </div>
                <p className='w-[287px] pt-[31px] pb-[16px] font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)]'>Lorem Ipsum is simply dummy text
                     of the printing and typesetting 
                     industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since
                </p>
                <div className="flex justify-between">
                    <span className='font-mono font-bold text-[28px] text-black'>afterpay</span>
                    <span className="flex items-center justify-center gap-1"><FaStar color="#FFC04B"/> 5.0</span>
                </div>
            </h3>
          </div>
          <div className="box1">
           <h3 className="w-[345px]   rounded-[16px] p-6 border-t-[#fff] border-b-[rgba(0,0,0,0.1)] border-2 border-[rgba(182,182,182,0.1)] ">
            <div className='flex gap-[22px] items-center'>
                <img src={c} alt="" />
                <div>
                    <p className='font-Poppins font-bold text-[15px]'>Albert stevano</p>
                    <p className='font-Poppins font-normal text-[15px]'>ceo & Founder Global Bank </p>
                </div>
            </div>
                <p className='w-[287px] pt-[31px] pb-[16px] font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)]'>Lorem Ipsum is simply dummy text
                     of the printing and typesetting 
                     industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since
                </p>
                <div className="flex justify-between">
                    <span className='font-mono font-bold text-[28px] text-black'>afterpay</span>
                    <span className="flex items-center justify-center gap-1"><FaStar color="#FFC04B"/> 5.0</span>
                </div>
            </h3>
          </div>
         <div className="box1">
           <h3 className="w-[345px]   rounded-[16px] p-6 border-t-[#fff] border-b-[rgba(0,0,0,0.1)] border-2 border-[rgba(182,182,182,0.1)] ">
            <div className='flex gap-[22px] items-center'>
                <img src={c} alt="" />
                <div>
                    <p className='font-Poppins font-bold text-[15px]'>Albert stevano</p>
                    <p className='font-Poppins font-normal text-[15px]'>ceo & Founder Global Bank </p>
                </div>
            </div>
                <p className='w-[287px] pt-[31px] pb-[16px] font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)]'>Lorem Ipsum is simply dummy text
                     of the printing and typesetting 
                     industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since
                </p>
                <div className="flex justify-between">
                    <span className='font-mono font-bold text-[28px] text-black'>afterpay</span>
                    <span className="flex items-center justify-center gap-1"><FaStar color="#FFC04B"/> 5.0</span>
                </div>
            </h3>
          </div>
          <div className="box1">
           <h3 className="w-[345px]   rounded-[16px] p-6 border-t-[#fff] border-b-[rgba(0,0,0,0.1)] border-2 border-[rgba(182,182,182,0.1)] ">
            <div className='flex gap-[22px] items-center'>
                <img src={c} alt="" />
                <div>
                    <p className='font-Poppins font-bold text-[15px]'>Albert stevano</p>
                    <p className='font-Poppins font-normal text-[15px]'>ceo & Founder Global Bank </p>
                </div>
            </div>
                <p className='w-[287px] pt-[31px] pb-[16px] font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)]'>Lorem Ipsum is simply dummy text
                     of the printing and typesetting 
                     industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since
                </p>
                <div className="flex justify-between">
                    <span className='font-mono font-bold text-[28px] text-black'>afterpay</span>
                    <span className="flex items-center justify-center gap-1"><FaStar color="#FFC04B"/> 5.0</span>
                </div>
            </h3>
          </div>
          <div className="box1">
           <h3 className="w-[345px]   rounded-[16px] p-6 border-t-[#fff] border-b-[rgba(0,0,0,0.1)] border-2 border-[rgba(182,182,182,0.1)] ">
            <div className='flex gap-[22px] items-center'>
                <img src={c} alt="" />
                <div>
                    <p className='font-Poppins font-bold text-[15px]'>Albert stevano</p>
                    <p className='font-Poppins font-normal text-[15px]'>ceo & Founder Global Bank </p>
                </div>
            </div>
                <p className='w-[287px] pt-[31px] pb-[16px] font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)]'>Lorem Ipsum is simply dummy text
                     of the printing and typesetting 
                     industry. Lorem Ipsum has been the
                      industry's standard dummy text ever since
                </p>
                <div className="flex justify-between">
                    <span className='font-mono font-bold text-[28px] text-black'>afterpay</span>
                    <span className="flex items-center justify-center gap-1"><FaStar color="#FFC04B"/> 5.0</span>
                </div>
            </h3>
          </div>
          
          
          
        </Slider>
      </div>
    </section>
    </>
  )
}

export default Customers