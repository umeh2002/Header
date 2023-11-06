import { useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { SiVitess } from "react-icons/si";
import { SiPlanetscale } from "react-icons/si";
import { PiCloudCheckThin } from "react-icons/pi";
import { BiBuildings } from "react-icons/bi";
import girl from "../assets/image.jpeg";
import code from "../assets/image.webp";
import { GoPeople } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TbBrandAppleArcade } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [menuState, setMenuState] = useState<{
    hover: boolean;
    hover1: boolean;
    hover2: boolean;
    hover3: boolean;
  }>({
    hover: false,
    hover1: false,
    hover2: false,
    hover3: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuTimeoutRef = useRef<number | null>(null);

  const toggleMenu = (menuName: keyof typeof menuState) => {
    menuTimeoutRef.current && clearTimeout(menuTimeoutRef.current);
    setMenuState((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  const closeMenuWithDelay = (menuName: keyof typeof menuState) => {
    menuTimeoutRef.current = window.setTimeout(() => {
      setMenuState((prevState) => ({
        ...prevState,
        [menuName]: false,
      }));
    }, 5000);
  };

  return (
    <div className="w-full h-[70px] flex items-center justify-center small:w-[100%]">
      <div className="w-[90%] h-full flex justify-between items-center small:flex  ">
        <div className="flex items-center justify-center small:pl-[10px]">
          <div className="text-[30px] hover:cursor-pointer duration-300 transition-all small:text-[20px]">
            <SiPlanetscale />
          </div>
          <div className="flex ml-[30px] small:hidden">
            <div
              className="flex mr-[20px] hover:cursor-pointer hover:text-[#F35815] duration-300 transition-all items-center"
              onMouseEnter={() => {
                toggleMenu("hover");
              }}
              onMouseLeave={() => {
                closeMenuWithDelay("hover");
              }}
            >
              <div className="text-[17px]">Products</div>
              <div
                className="mt-[7px] ml-2 text-[15px] hover:
              cursor-pointer hover:rotate-180"
              >
                <FaAngleDown />
              </div>
            </div>
            <div
              className="flex mr-[20px] hover:cursor-pointer hover:text-[#F35815] duration-300 transition-all "
              onMouseEnter={() => {
                toggleMenu("hover1");
              }}
              onMouseLeave={() => {
                closeMenuWithDelay("hover1");
              }}
            >
              <nav className="text-[17px]">Solutions</nav>
              <div
                className="pt-[10px] ml-2 text-[15px] hover:
              cursor-pointer hover:rotate-180"
              >
                <FaAngleDown />
              </div>
            </div>
            <div
              className="flex mr-[20px] hover:cursor-pointer hover:text-[#F35815] duration-300 transition-all "
              onMouseEnter={() => {
                toggleMenu("hover2");
              }}
              onMouseLeave={() => {
                closeMenuWithDelay("hover2");
              }}
            >
              <nav className="text-[17px]">Resources</nav>
              <div
                className="pt-[10px] ml-2 text-[15px] hover:
              cursor-pointer hover:rotate-180 hover:mb-[10px]"
              >
                <FaAngleDown />
              </div>
            </div>
            <div className="flex mr-[20px] hover:cursor-pointer hover:text-[#F35815] duration-300 transition-all ">
              <nav
                className="text-[17px]"
                onMouseEnter={() => {
                  toggleMenu("hover3");
                }}
                onMouseLeave={() => {
                  closeMenuWithDelay("hover3");
                }}
              >
                Documentation
              </nav>
              <div
                className="pt-[10px] ml-2 text-[15px] hover:
              cursor-pointer hover:rotate-180 hover:mb-[10px]"
              >
                <FaAngleDown />
              </div>
            </div>
            <div className="flex mr-[20px] hover:cursor-pointer hover:text-[#F35815] duration-300 transition-all ">
              <nav className="text-[17px]">Pricing</nav>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <nav className="text-[17px] hover:cursor-pointer hover:text-[#F35815] mr-[20px] duration-300 transition-all small:hidden">
            Contact
          </nav>
          <nav className="text-[17px] hover:cursor-pointer hover:text-[#F35815] mr-[20px] duration-300 transition-all small:text-[15px]">
            Sign in
          </nav>
          <button className="w-[100px] h-[40px] border-2 rounded-2xl  small:w-[90px] small:h-[30px] small:text-[14px] hover:cursor-pointer duration-300 transition-all hover:border-[#F35815]">
            Get started
          </button>
        </div>
      </div>
      {menuState.hover ? (
        <div
          className="w-[500px] h-[400px] flex bg-white text-black rounded-2xl absolute top-[70px] left-[160px]"
          style={{
            boxShadow:
              "rgba(255, 255, 255, 1)0px 3px 1px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <div className="pl-[30px] pt-[40px] w-[40%] h-full bg-[#f7f7f7] rounded-s-2xl">
            <div className="text-[20px] leading-[25px] hover:cursor-pointer duration-300 transition-all">
              {" "}
              What is <br />
              PlanetScale
            </div>
            <div className="flex items-center mt-[20px]">
              <div className="text-[15px]  hover:cursor-pointer duration-300 transition-all">
                Learn more
              </div>
              <div className="ml-2 text-[#F35815] hover:cursor-pointer duration-300 transition-all">
                <FaAngleRight />
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full pl-[20px] pt-[30px]">
            <div className="flex justify-center mb-[30px] hover:cursor-pointer duration-300 transition-all">
              <img
                src=""
                alt=""
                className="w-[60px] h-[60px] object-cover border rounded-lg hover:cursor-pointer duration-300 transition-all"
              />
              <div className="ml-[10px] hover:cursor-pointer duration-300 transition-all">
                <div className="text-[16px] mb-[1px] hover:text-[#F35815]">
                  PlanetScale Boost
                </div>
                <div className="text-[15px] leading-[15px] hover:text-black">
                  up to 1,000 faster queries <br /> in just a few clicks
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-[30px] hover:cursor-pointer duration-300 transition-all">
              <img
                src=""
                alt=""
                className="w-[60px] h-[60px] object-cover border rounded-lg hover:cursor-pointer duration-300 transition-all"
              />
              <div className="ml-[10px] hover:cursor-pointer duration-300 transition-all">
                <div className="text-[16px] mb-[1px] hover:text-[#F35815]">
                  PlanetScale Revert
                </div>
                <div className="text-[15px] leading-[15px] hover:text-black">
                  The world's first data <br /> migration time machine
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-[30px] hover:cursor-pointer duration-300 transition-all">
              <img
                src=""
                alt=""
                className="w-[60px] h-[60px] object-cover border rounded-lg hover:cursor-pointer duration-300 transition-all"
              />
              <div className="ml-[10px] hover:cursor-pointer duration-300 transition-all">
                <div className="text-[16px] mb-[1px] hover:text-[#F35815]">
                  PlanetScale CLI
                </div>
                <div className="text-[15px] leading-[15px] hover:text-black">
                  Complete control of your <br /> database at your fingertips
                </div>
              </div>
            </div>
            <hr />
            <div className="mt-[30px] font-medium text-[16px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815]">
              PlanetScale for AI
            </div>
          </div>
        </div>
      ) : null}

      {menuState.hover1 ? (
        <div
          className="w-[800px] h-[300px] flex bg-white text-black rounded-2xl absolute top-[70px] left-[260px] "
          style={{
            boxShadow:
              "rgba(255, 255, 255, 1)0px 3px 1px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <div className="w-[70%] h-full bg-[#f7f7f7] rounded-s-2xl p-[20px]">
            <div className="flex items-center hover:cursor-pointer duration-300 transition-all">
              <div className="text-[20px] mb-[20px]">Customers</div>
            </div>
            <hr className="w-full h-[1px] bg-black" />
            <div className="flex justify-center  mt-[20px] w-full h-[150px] hover:cursor-pointer duration-300 transition-all">
              <div>
                <img
                  src={girl}
                  alt=""
                  className="w-[200px] h-[170px] border rounded-lg object-cover"
                />
              </div>
              <div className="ml-[20px] flex flex-col">
                <div className="font-bold text-[17px] text-[#F35815] mb-[10px]">
                  Featured case study
                </div>
                <div className="mb-[5px] font-bold text-[17px]">
                  MyFitnessPal
                </div>
                <div className="font-light text-[16px]">
                  MyFitnessPal chose PlanetScale so <br /> they can focus on the
                  data not the database
                </div>
                <div className="flex mt-[20px] items-center transition-all hover:text-[#F35815] hover:cursor-pointer duration-300 ">
                  <div className="text-[14px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815]">
                    Read more
                  </div>
                  <div className="ml-2 text-[#F35815] hover:cursor-pointer duration-300 transition-all">
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-full p-4">
            <div className="flex items-center mb-[30px] hover:cursor-pointer duration-300 transition-all">
              <div className="w-[50px] h-[50px] rounded-full bg-[#f7f7f7]">
                <div className="flex justify-center text-[30px] pt-[10px] text-[#c9c7c7]">
                  <BiBuildings />
                </div>
              </div>
              <div className="ml-[10px]">
                <div className="font-semibold hover:text-[#F35815]">
                  Enterprise
                </div>
                <div className="text-[13px] leading-4">
                  For data-intensive <br /> applications at scale
                </div>
              </div>
            </div>
            <div className="flex items-center mb-[30px] hover:cursor-pointer duration-300 transition-all">
              <div className="w-[50px] h-[50px] rounded-full bg-[#f7f7f7]">
                <div className="flex justify-center text-[30px] pt-[10px]">
                  <PiCloudCheckThin />
                </div>
              </div>
              <div className="ml-[10px]">
                <div className="font-semibold hover:text-[#F35815] hover:cursor-pointer">
                  PlanetScale managed
                </div>
                <div className="text-[13px] leading-4">
                  PlanetScale on your <br /> infrastructure
                </div>
              </div>
            </div>
            <div className="flex items-center mb-[30px] hover:cursor-pointer duration-300 transition-all">
              <div className="w-[50px] h-[50px] rounded-full bg-[#f7f7f7]">
                <div className="flex justify-center text-[30px] pt-[10px] text-[#c9c7c7]">
                  <SiVitess />
                </div>
              </div>
              <div className="ml-[10px]">
                <div className="font-semibold hover:text-[#F35815] hover:cursor-pointer">
                  Vitess
                </div>
                <div className="text-[13px] leading-4">
                  PlanetScale's open source <br /> foundation
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {menuState.hover2 ? (
        <div
          className="w-[800px] h-[300px] flex bg-white text-black rounded-2xl absolute top-[70px] left-[260px] "
          style={{
            boxShadow:
              "rgba(255, 255, 255, 1)0px 3px 1px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <div className="w-[70%] h-full bg-[#f7f7f7] rounded-s-2xl p-[20px]">
            <div className="flex items-center hover:cursor-pointer duration-300 transition-all">
              <div className="text-[20px] mb-[20px]">Blog</div>
            </div>
            <hr className="w-full h-[1px] bg-black" />
            <div className="flex justify-center  mt-[20px] w-full h-[150px] hover:cursor-pointer duration-300 transition-all">
              <div>
                <img
                  src={code}
                  alt=""
                  className="w-[200px] h-[170px] border rounded-lg object-cover"
                />
              </div>
              <div className="ml-[20px] flex flex-col">
                <div className="font-bold text-[15px] text-[#F35815] mb-[10px]">
                  Latest blog post
                </div>
                <div className="mb-[7px] font-bold text-[20px] leading-5">
                  Personalizing your onboarding <br /> with Markdoc
                </div>
                <div className="font-light text-[16px]">
                  Learn how we utilized Markdoc to
                  <br /> create custom,extendable products...
                </div>
                <div className="flex mt-[20px] items-center transition-all hover:text-[#F35815] hover:cursor-pointer duration-300 ">
                  <div className="text-[14px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815]">
                    Read more
                  </div>
                  <div className="ml-2 text-[#F35815] hover:cursor-pointer duration-300 transition-all">
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[30%] h-full p-4">
            <div className="flex items-center mb-[50px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815]">
              <div className="text-[30px]">
                <TbBrandAppleArcade />
              </div>
              <div className="text-[17px] font-extralight ml-[8px]">Learn</div>
            </div>
            <div className="flex items-center mb-[50px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815]">
              <div className="text-[30px]">
                <GoPeople />
              </div>

              <div className="text-[17px] font-extralight ml-[8px]">
                Support
              </div>
            </div>
            <div className="flex items-center hover:cursor-pointer duration-300 transition-all hover:text-[#F35815]">
              <div className=" text-[30px]">
                <IoIosCheckmarkCircleOutline />
              </div>

              <div className="text-[17px] font-extralight ml-[8px]">
                Changelog
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {menuState.hover3 ? (
        <div
          className="w-[700px] h-[400px] flex bg-white text-black rounded-2xl absolute top-[70px] left-[160px]"
          style={{
            boxShadow:
              "rgba(255, 255, 255, 1)0px 3px 1px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          <div className="pl-[30px] pt-[40px] w-[40%] h-full bg-[#f7f7f7] rounded-s-2xl">
            <div className="text-[20px] leading-[25px] hover:cursor-pointer duration-300 transition-all">
              {" "}
              Documentation
            </div>
            <div className="flex items-center mt-[20px] hover:cursor-pointer duration-300 transition-all">
              <div className="text-[17px]  hover:cursor-pointer duration-300 transition-all">
                visit docs
              </div>
              <div className="ml-2 text-[#F35815] hover:cursor-pointer duration-300 transition-all">
                <FaAngleRight />
              </div>
            </div>
          </div>
          <div className="w-[50%] h-full pl-[20px] pt-[30px]">
            <div className="flex mb-[20px]">
              <div>
                <nav className="font-bold text-[15px] mb-[10px]">Concepts</nav>
                <nav className="font-medium text-[17px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815] mb-[5px]">
                  What is PlanetScale
                </nav>
                <nav className="font-medium text-[17px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815] mb-[5px]">
                  Secure connections
                </nav>
                <nav className="font-medium text-[17px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815] mb-[5px]">
                  Sharding
                </nav>
              </div>
              <div className="ml-[50px]">
                <nav className="font-bold text-[15px] mb-[10px]">
                  PlanetScale API
                </nav>
                <nav className="font-medium text-[17px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815] mb-[5px]">
                  APIs overview
                </nav>
                <nav className="font-medium text-[17px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815] mb-[5px]">
                  {" "}
                  APIs reference
                </nav>
              </div>
            </div>
            <div className="flex">
              <div>
                <nav className="font-bold text-[15px] mb-[10px]">Guides</nav>
                <nav className="font-medium text-[17px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815] mb-[5px]">
                  Quickstart guide
                </nav>
                <nav className="font-medium text-[17px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815] mb-[5px]">
                  Import your database
                </nav>
                <nav className="font-medium text-[17px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815] mb-[5px]">
                  Connet an app
                </nav>
                <nav className="font-medium text-[17px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815] mb-[5px]">
                  Github actions
                </nav>
              </div>
              <div className="ml-[50px]">
                <nav className="font-bold text-[15px] mb-[10px]">
                  PlanetScale CLI
                </nav>
                <nav className="font-medium text-[17px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815] mb-[5px]">
                  CLI reference
                </nav>
                <nav className="font-medium text-[17px] hover:cursor-pointer duration-300 transition-all hover:text-[#F35815] mb-[5px]">
                  {" "}
                  CLI setup
                </nav>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    {
      isOpen ? (  <div
        className="text-[20px] small:flex medium:hidden hover:cursor-pointer duration-300 transition-all pl-[5px]"
        onClick={()=>{
          toggle()
        }}
      >
             <AiOutlineClose />
      </div>
    ):(
      <div
      className="text-[20px] small:flex medium:hidden hover:cursor-pointer duration-300 transition-all pl-[5px]"
      onClick={()=>{
        toggle()
      }}
    >
      <AiOutlineMenu />
    </div>
    )
    }
      {isOpen && (
        <div className="w-[100%] h-[100vh] flex text-black absolute top-[60px] left-0  small:flex medium:hidden bg-white pt-[20px]"
        
        style={{
          boxShadow:
            "rgba(255, 255, 255, 1)0px 3px 1px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}>
          <div>
           <div className="flex mb-3">
           <nav className="text-[14px] hover:cursor-pointer duration-300 transition-all">Products</nav>
           <div
                className=" pt-[5px] ml-2 text-[13px] hover:
              cursor-pointer text-[#F35815]"
              >
                <FaAngleRight />
              </div>
           </div>
            <div className="flex mb-3">
            <nav className="text-[14px] hover:cursor-pointer duration-300 transition-all">Solutions</nav>
            <div
                className=" pt-[5px] ml-2 text-[13px] hover:
              cursor-pointer text-[#F35815]"
              >
                <FaAngleRight />
              </div>
            </div>
         <div className="flex mb-3">
         <nav className="text-[14px] hover:cursor-pointer duration-300 transition-all">Resources</nav>
         <div
                className=" pt-[5px] ml-2 text-[13px] hover:
              cursor-pointer text-[#F35815]"
              >
                <FaAngleRight />
              </div>
         </div>

         <div className="flex">
         <nav className="text-[14px] hover:cursor-pointer duration-300 transition-all mb-3">Documentation</nav>
         <div
                className=" pt-[5px] ml-2 text-[13px] hover:
              cursor-pointer text-[#F35815]"
              >
                <FaAngleRight />
              </div>
         </div>
            <nav className="text-[14px] hover:cursor-pointer duration-300 transition-all mb-3">Pricing</nav>
            <nav className="text-[14px] hover:cursor-pointer duration-300 transition-all">Contact</nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
