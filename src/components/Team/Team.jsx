import { BsArrowRight } from "react-icons/bs";
import React from "react";
import t from "../../assets/Img/teambg.png";
import ti from "../../assets/Img/team img.png";

const Team = () => {
  return (
    <>
      <section className="team">
        <div className="flex relative container mx-auto px-4 md:px-0">
          {/* Background Image */}
          <img src={t} alt="" className="w-full object-cover" />
          {/* Overlay Box */}
          <div className="bg-white rounded-[16px] absolute md:top-[240px] md:left-[330px] top-[100px] left-1/2 transform -translate-x-1/2 w-full max-w-[634px] px-4 md:px-0">
            <h3 className="font-Poppins font-bold leading-[45px] text-[28px] md:text-[40px] text-black text-center pt-[68px] max-w-[459px] mx-auto">
              Join the team today and start your journey toward excellence!
            </h3>
            <p className="font-Poppins font-normal text-[15px] text-black text-center pt-[30px] pb-4 max-w-[480px] mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </p>
            <p className="flex gap-1 font-Poppins font-normal text-[15px] items-center justify-center md:justify-start max-w-[280px] mx-auto md:mx-0 pl-0 md:pl-[251px] pb-[64px] cursor-pointer">
              <span className="border-b border-black">Read more info </span>
              <BsArrowRight size={24} />
            </p>
            {/* Team Image */}
            <img
              src={ti}
              alt=""
              className="absolute md:top-[270px] max-md:hidden  top-[350px] right-1/2 transform md:transform-none md:right-[-53px] w-48 md:w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
