import React from "react";import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/astronout1.png";
import bg from "../assets/images/bg.jpg";
import Navbar from "./Navbar";
import "../styles.css";

function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content ">
            {/* <div className="btn py-3">
              <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                أهلاً بكم في موقعكم
              </button>
            </div> */}
            <h1 className="text-white text-5xl font-bold w-9/12">
              {/* انشأ موقعاً احترافياً وسيرةٍ ذاتية مُميزة الآن ! */}
              هل تبحث عن طريقة لإبراز نفسك أو عملك على الإنترنت؟ لدينا الحل!
            </h1>
            <p className="text-white p-4   bg-[linear-gradient(90deg,#b004b0,#38097a)] rounded-2xl border-2 border-[#b0aaaa]">
              نقدم خدمات إنشاء المواقع الشخصية المخصصة والمبتكرة التي ستساعدك في
              التميز والتألق على الويب. سواء كنت تبحث عن موقع شخصي لعرض أعمالك
              الفنية أو لتسويق خدماتك الشخصية، فإننا نقدم حلولاً مخصصة تناسب
              احتياجاتك
            </p>
            <button className="  text-white text-2xl">
              <i className="fa-solid fa-arrow-left text-lg  p-[2px] "></i> لا
              تضيع الفرصة لتسويق نفسك بشكل أفضل{"  "}
            </button>
          </div>
          <div className="image banner-astronout  absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo1} alt="" />
          </div>
          <div className="image banner-astronout1  absolute w-[300px] flex ">
            <img className="w-96 ast-img" src={logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
