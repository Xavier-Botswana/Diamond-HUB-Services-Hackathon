import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GiTwirlCenter } from "react-icons/gi";
import { IoDocumentTextOutline } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiHomeAlt } from "react-icons/bi";
import { PiCreditCardThin,PiFilesThin,PiIdentificationCardThin,PiFoldersThin } from "react-icons/pi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import Logo from "./../logo.png";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

export default function SideNav() {
  // const { logout } = useContext(UserContext);
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  const APP_PREFIX_PATH = "/app";
  let history = useHistory();

  const login = () => {
    history.push({
      pathname: "/auth/login",
    });
  };

  return (
    <>
      <Section className=" border-r-[1px] bg-[#ffffff]  border-r-[#dbdbdb]  flex flex-col w-full gap-5 text-[#ffffff]">
        <div className="top">
          <div className="brand">
            {/* logo */}
            <div className="justify-center items-left relative z-10 md:flex md:pl-7 pt-0">
              {/* <img src={Logo} alt="Logo" width={175} height={36} /> */}
            </div>
            {/* logo end */}
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>

          <div className="links flex flex-col mt-[40px]  w-full gap-4 text-[14px] font-medium  text-[#000000]">
            <ul className="mx-4">
              <Link to={`${APP_PREFIX_PATH}/dashboard`} className="btn">
                <li
                  class={currentLink === 1 ? "active" : "none"}
                  onClick={() => setCurrentLink(1)}
                >
                  <div className="flex items-center gap-4">
                    <BiHomeAlt size={22} />
                    <Typography className="font-small font-semibold">
                      <span> Home</span>
                    </Typography>
                  </div>
                </li>
              </Link>
              <Link to={`${APP_PREFIX_PATH}/applications`} className="btn">
                <li
                  class={currentLink === 2 ? "active" : "none"}
                  onClick={() => setCurrentLink(2)}
                >
                  <div className="flex items-center gap-4">
                    <PiFoldersThin size={22} />
                    <Typography className="font-small font-semibold">
                      <span> Applications</span>
                    </Typography>
                  </div>
                </li>{" "}
              </Link>
              <Link to={`${APP_PREFIX_PATH}/licenses`} className="btn">
                <li
                  className={currentLink === 3 ? "active" : "none"}
                  onClick={() => setCurrentLink(3)}
                >
                  <div className="flex items-center gap-4">
                    <PiIdentificationCardThin size={22} />
                    <Typography className="font-small font-semibold">
                      <span>Licenses/Certificates</span>
                    </Typography>
                  </div>
                </li>{" "}
              </Link>
              <Link to={`${APP_PREFIX_PATH}/companyKyc`} className="btn">
                <li
                  className={currentLink === 4 ? "active" : "none"}
                  onClick={() => setCurrentLink(4)}
                >
                  <div className="flex items-center gap-4">
                    <PiFilesThin size={22} />
                    <Typography className="font-small font-semibold">
                      <span>Companies KYC</span>
                    </Typography>
                  </div>
                </li>{" "}
              </Link>

              <Link to={`${APP_PREFIX_PATH}/payments`} className="btn">
                <li
                  className={currentLink === 5 ? "active" : "none"}
                  onClick={() => setCurrentLink(5)}
                >
                  <div className="flex items-center gap-4">
                    <PiCreditCardThin size={22} />
                    <Typography className="font-small font-semibold">
                      <span>Payments</span>
                    </Typography>
                  </div>
                </li>{" "}
              </Link>
            </ul>
          </div>
        </div>

        <div className="links w-full gap-2.5 text-[13px] text-[#000000] ">
          <Link to={`${APP_PREFIX_PATH}/logout`} className="btn">
            <div className="flex pl-8 mx-4 bg-[#f2f2f2] p-2 hover:bg-[#ffffff]  mb-2 rounded-lg items-center">
              <SiSimpleanalytics size={20} />
              <span className="logout text-[14px]">Analytic Reports</span>
            </div>
          </Link>

          <Link to={`${APP_PREFIX_PATH}/logout`} className="btn">
            <div className=" flex  mx-4 bg-[#f2f2f2] border   mb-2 rounded-xl items-center pl-6 px-4 py-3 hover:bg-[#ffffff]">
              <div className="flex items-center justify-between container">
                <span className="text-[14px] text-[#000000]">Chivs Store</span>

                <span className="text-[11px] text-white bg-gradient-to-r from-[#0d022d] via-[#525151] to-[#252525] rounded-lg px-3 py-1.5 ">
                  Professional Plan
                </span>
              </div>
            </div>
          </Link>

          <div
            onClick={login}
            className="btn flex pl-8 mx-4  p-2 hover:bg-[#ffffff] bg-[#f2f2f2] cursor-pointer mb-2 rounded-lg items-center"
          >
            <AiOutlinePoweroff size={22} />
            <span className="logout text-[14px]">Sign out</span>
          </div>
        </div>
      </Section>

      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li
              className="flex items-center justify-center"
              class={currentLink === 1 ? "active" : "none"}
              onClick={() => setCurrentLink(1)}
            >
              <Link to={`${APP_PREFIX_PATH}/`}>
                <MdSpaceDashboard />
                <span> Home</span>
              </Link>
            </li>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => setCurrentLink(2)}
            >
              <Link to={`${APP_PREFIX_PATH}/riders`}>
                <RiDashboard2Fill />
                <span> Market Place</span>
              </Link>
            </li>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() => setCurrentLink(3)}
            >
              <Link to={`${APP_PREFIX_PATH}/payments`}>
                <FaAddressCard />
                <span> ChatBots</span>
              </Link>
            </li>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => setCurrentLink(4)}
            >
              <Link to={`${APP_PREFIX_PATH}/invites`}>
                <GiTwirlCenter />
                <span>Invites</span>
              </Link>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 17vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 1rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: left;
      align-items: center;
    }
    .links {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.8rem;
          display: flex;
          background: "#12121D";
          border-radius: 0.6rem;
          &:hover {
            background-color: #f2f2f2;
            a {
              color: #000000;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            align-text: center;
            color: #000000;
          }
        }
        .active {
          border: 1px solid #f2f2f2;
          a {
            color: #000000;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #000000;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
    .links {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #ffc107;
        a {
          color: black;
        }
      }
    }
  }
`;
