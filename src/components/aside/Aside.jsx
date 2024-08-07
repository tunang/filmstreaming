import {
  IoEarOutline,
  IoHomeOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import {
  MdOutlineAddBox,
  MdOutlineLocalMovies,
  MdPlayCircleOutline,
  MdLogout,
} from "react-icons/md";
import { TiHeartOutline } from "react-icons/ti";
import { CgCheck, CgProfile } from "react-icons/cg";
import { LuPanelLeftClose } from "react-icons/lu";


import { BiVideoRecording } from "react-icons/bi";
import { RiSlideshow3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutRedux } from "../../redux/action/userAction";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { handleLogout } from "../../redux/reducer/userReducer";
import { changeAsideStatus } from "../../redux/reducer/asideReducer";
import { logoutApi } from "../../services/UserServices";

const Aside = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const asideTitles = [
    {
      title: "Browse",
      items: [
        {
          label: "Home",
          icon: <IoHomeOutline />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        // { label: 'New release', icon: <MdOutlineAddBox />, active: false, action: () => {navigate('/new_release')} },
        {
          label: "Favorite",
          icon: <TiHeartOutline />,
          active: false,
          action: () => {
            navigate("/favorite");
          },
        },
        {
          label: "Watching",
          icon: <IoEarOutline />,
          active: false,
          action: () => {
            navigate("/watching");
          },
        },
      ],
    },

    // {
    //     title: 'Library',
    //     items: [
    //         { label: 'Watching', icon: <IoEarOutline />, active: false, action: () => {navigate('/watching')} },
    //         { label: 'Favorite', icon: <TiHeartOutline />, active: false, action: () => {navigate('/favorite')} },
    //     ]
    // },

    {
      title: "Category",
      items: [
        {
          label: "Movies",
          icon: <BiVideoRecording />,
          active: false,
          action: () => {
            navigate("/movies");
          },
        },
        {
          label: "TV Series",
          icon: <MdPlayCircleOutline />,
          active: false,
          action: () => {
            navigate("/tv_series");
          },
        },
        {
          label: "TV Shows",
          icon: <RiSlideshow3Line />,
          active: false,
          action: () => {
            navigate("/tv_shows");
          },
        },
        {
          label: "Cartoons",
          icon: <MdOutlineLocalMovies />,
          active: false,
          action: () => {
            navigate("/cartoons");
          },
        },
      ],
    },

    {
      title: "General",
      items: [
        {
          label: "Account",
          icon: <IoSettingsOutline />,
          active: false,
          action: () => {
            navigate("/account");
          },
        },
        {
          label: "Log out",
          icon: <MdLogout />,
          active: false,
          action: async () => {
            await logoutApi();
            dispatch(handleLogout());
          },
        },
      ],
    },
  ];

  const isAsideOpening = useSelector((state) => state.asideStatus);
  const user = useSelector((state) => state.user.account);

  const handleLoginButton = () => {
    navigate("/login");
  };

  const handleAsideButton = () => {
    dispatch(changeAsideStatus());
  };

  const asideVariants = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.65,
        type: "spring",
        bounce: 0.1,
      },
    },
  };

  const exitDivVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 0.45,
      transition: {
        duration: 0.65,
        type: "spring",
        bounce: 0.1,
      },
    },
  };

  // {`${isAsideOpening ? 'block' : 'hidden'}
  return (
    <>
      {/* Hamburger menu aside */}
      <AnimatePresence>
        {isAsideOpening && (
          <div className="fixed z-20">
            <motion.aside
              variants={asideVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`fixed top-0 left-0 pt-12 pl-6 pr-8 h-screen bg-black z-20 `}
            >
                <div
                    onClick={() => handleAsideButton()}
                    className="text-quinary mr-2 mb-12 cursor-pointer"
                  >
                    <LuPanelLeftClose className="h-6 w-10 scale-[140%]" />
                  </div>
              <div
                onClick={() => handleLoginButton()}
                className="relative h-10 bg-quinary rounded-full mb-4"
              >
                <h4 className="absolute text-tertiary leading-[40px] w-full text-center">
                  {user && user.auth ? "name" : "Log in"}
                </h4>
                {/* <CgProfile className='block absolute right-0 h-12 w-16 text-primary cursor-pointer'/> */}
              </div>

              {asideTitles.map((asideTitle, index) => {
                return (
                  <ul className="mt-6 first-of-type:mt-0" key={index}>
                    <h3 className="font-semibold text-quinary">
                      {asideTitle.title}
                    </h3>
                    {asideTitle.items.map((item) => {
                      return (
                        <li
                          onClick={item.action}
                          className="flex items-center mt-1 last:mb-4 cursor-pointer "
                        >
                          <p className="text-quinary text-xl">{item.icon}</p>
                          <p className="text-quinary text-xl ml-2 hover:text-quaternary">
                            {item.label}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </motion.aside>

            <motion.div
              variants={exitDivVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => handleAsideButton()}
              className="fixed bg-gray-700 left-0 top-0 opacity-40 w-screen h-screen z-10"
            >
              
            </motion.div>

            
          </div>
        )}
      </AnimatePresence>

      {/* Hard fixed Aside  */}
      <aside
        variants={asideVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={`hidden md:block aside-desktop `}
      >
        {/* <div
          onClick={() => handleLoginButton()}
          className="md:hidden md:relative h-10 bg-quinary rounded-full mb-4"
        >
          <h4 className="absolute text-tertiary leading-[40px] w-32 text-center">
            {user && user.auth ? "name" : "Log in"}
          </h4>
          <CgProfile className='block absolute right-0 h-12 w-16 text-primary cursor-pointer'/>
        </div> */}

        {asideTitles.map((asideTitle, index) => {
          return (
            <ul className="mt-6 first-of-type:mt-0" key={index}>
              <h3 className="font-semibold text-quinary">{asideTitle.title}</h3>
              {asideTitle.items.map((item) => {
                return (
                  <li
                    onClick={item.action}
                    className="flex items-center mt-1 last:mb-4 cursor-pointer "
                  >
                    <p className="text-quinary text-xl">{item.icon}</p>
                    <p className="text-quinary text-xl ml-2 hover:text-quaternary">
                      {item.label}
                    </p>
                  </li>
                );
              })}
            </ul>
          );
        })}
      </aside>
    </>
  );
};

export default Aside;
