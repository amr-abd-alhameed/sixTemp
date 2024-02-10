import React, { useRef, useState } from "react";import AnchorLink from "react-anchor-link-smooth-scroll";
import "../styles.css";

function Navbar() {
  const [durum, setDurum] = useState(true);
  console.log(durum);
  const divRef = useRef(null);

  document.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      const elements = document.getElementsByClassName("navbarcon");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.background = "#171717";
      }
    } else {
      const elements = document.getElementsByClassName("navbarcon");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.background = "rgba(0, 0, 0, 0)";
      }
      const tlElements = document.getElementsByClassName("tl");
      for (let i = 0; i < tlElements.length; i++) {
        tlElements[i].style.background = "rgba(0, 0, 0, 0)";
      }
    }
  });

  // document.addEventListener("scroll", () => {

  //   if (
  //     document.body.scrollTop > 80 ||
  //     document.documentElement.scrollTop > 80
  //   ) {
  //     divRef.current.style.backgroundColor = "#171717";
  //   } else {
  //     divRef.current.style.backgroundColor = "rgba(0, 0, 0, 0)";
  //   }
  // });

  // window.onscroll = function () {
  //   scrollFunction();
  // };

  // document.addEventListener("scroll", () => {
  //   const navbar = document.querySelector(".navbarcon");
  //   const tlElements = document.querySelectorAll(".tl");

  //   if (
  //     document.body.scrollTop > 80 ||
  //     document.documentElement.scrollTop > 80
  //   ) {
  //     navbar.style.background = "#171717";
  //     tlElements.forEach((element) => {
  //       element.style.background = "#171717";
  //     });
  //   } else {
  //     navbar.style.background = "rgba(0, 0, 0, 0)";
  //     tlElements.forEach((element) => {
  //       element.style.background = "rgba(0, 0, 0, 0)";
  //     });
  //   }
  // });

  // function scrollFunction() {
  //   if (
  //     document.body.scrollTop > 80 ||
  //     document.documentElement.scrollTop > 80
  //   ) {
  //     const one = document.getElementsByClassName("navbarcon");
  //     one.style.background = "#171717";
  //   } else {
  //     const two = document.getElementsByClassName("navbarcon");
  //     two.style.background = "rgba(0, 0, 0, 0)";
  //     const three = document.getElementsByClassName("tl");
  //     three.style.background = "rgba(0, 0, 0, 0)";
  //   }
  // }

  return (
    <>
      <div
        ref={divRef}
        className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full"
      >
        <h1 className="text-4xl  font-bold ">المهندس المحترف</h1>

        <nav
          className={` flex justify-center items-center gap-x-10 ${
            durum && "lg:hidden"
          } lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717]  lg:h-[450px] lg:left-0 h-full   lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <ul className=" flex gap-10 text-3xl mr-4 lg:flex-col lg:gap-6 ">
            <li className="bla">
              <AnchorLink href="#home">الرئيسية</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#skills">خدماتُنا</AnchorLink>
            </li>
            <li className="bla">
              <AnchorLink href="#projects">اعمالنُا</AnchorLink>
            </li>
          </ul>

          <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a
              href="https://twitter.com/reayhs"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

            <a
              href="https://www.instagram.com/iburakz/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a
              href="https://github.com/Reayhs/react-tailwind-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
          <div className="btn">
            <button className="border-[1px] border-white border-solid py-2 px-4 hover:bg-white hover:text-black font-bold">
              تواصل معنا
            </button>
          </div>
        </nav>
        <i
          onClick={(e) => setDurum(!durum)}
          className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"
        ></i>
      </div>
    </>
  );
}

export default Navbar;
