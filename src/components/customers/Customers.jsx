import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import c from "../../assets/Img/customer.png";

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[117px] top-[-50px] md:top-[-120px] z-10 bg-black text-white p-2 rounded-full shadow"
  >
    <BsArrowLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[60px] top-[-50px] md:top-[-120px] z-10 bg-black text-white p-2 rounded-full shadow"
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

const reviews = [
  {
    name: "Albert Stevano",
    position: "CEO & Founder Global Bank",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    company: "afterpay",
    rating: 5.0,
    img: c,
  },
  // Repeat same for demo; add more unique entries if needed
  {
    name: "Albert Stevano",
    position: "CEO & Founder Global Bank",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    company: "afterpay",
    rating: 5.0,
    img: c,
  },
  {
    name: "Albert Stevano",
    position: "CEO & Founder Global Bank",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    company: "afterpay",
    rating: 5.0,
    img: c,
  },
  {
    name: "Albert Stevano",
    position: "CEO & Founder Global Bank",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    company: "afterpay",
    rating: 5.0,
    img: c,
  },
  {
    name: "Albert Stevano",
    position: "CEO & Founder Global Bank",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    company: "afterpay",
    rating: 5.0,
    img: c,
  },
  {
    name: "Albert Stevano",
    position: "CEO & Founder Global Bank",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    company: "afterpay",
    rating: 5.0,
    img: c,
  },
];

const Customers = () => {
  return (
    <>
      <section className="Customers container pt-[99px] pb-[103px] px-4 md:px-0">
        <h2 className="pl-0 md:pl-[68px] font-Poppins font-medium text-[40px] text-black text-center md:text-left">
          What say our customers
        </h2>
        <p className="pl-0 md:pl-[68px] w-full md:w-[494px] pb-[72px] font-Poppins font-normal text-[15px] text-black text-center md:text-left mx-auto md:mx-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        </p>

        <div className="slider-container mx-0 md:mx-[42px]">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="box1">
                <h3 className="w-full max-w-[345px] rounded-[16px] p-6 border-t-[#fff] border-b-[rgba(0,0,0,0.1)] border-2 border-[rgba(182,182,182,0.1)] mx-auto">
                  <div className="flex gap-[22px] items-center">
                    <img src={review.img} alt={review.name} />
                    <div>
                      <p className="font-Poppins font-bold text-[15px]">{review.name}</p>
                      <p className="font-Poppins font-normal text-[15px]">{review.position}</p>
                    </div>
                  </div>
                  <p className="w-full max-w-[287px] pt-[31px] pb-[16px] font-Poppins font-normal text-[15px] text-[rgba(0,0,0,0.5)]">
                    {review.text}
                  </p>
                  <div className="flex justify-between">
                    <span className="font-mono font-bold text-[28px] text-black">{review.company}</span>
                    <span className="flex items-center justify-center gap-1">
                      <FaStar color="#FFC04B" /> {review.rating.toFixed(1)}
                    </span>
                  </div>
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Customers;
