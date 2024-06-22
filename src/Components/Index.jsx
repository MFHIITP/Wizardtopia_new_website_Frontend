import React, { useState, useEffect } from "react";
import image1 from "../../Images/Hogwarts_Icon.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Index(props) {
  const [setup, setsetup] = useState(false);
  const [pathname, setpathname] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handlesetup = () => {
    setsetup(!setup);
  };

  useEffect(() => {
    const pathname = window.location.pathname;
    const pathnameSegments = pathname.split("/");
    const lastSegment = pathnameSegments[pathnameSegments.length - 1];
    setpathname(lastSegment);
  }, []);

  const handleClick = async () => {
    function deleteCookie(cookieName) {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
    }
    await fetch("https://wizardtopia-backend.onrender.com/backend_isloggingout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.myemail,
        name: "",
        intime: "",
        outtime: new Date().toString(),
        stats: "inactive",
      }),
      credentials: "include",
    });
    deleteCookie("Cookie");
    deleteCookie("ProfileInfo");
    window.location.pathname = '/backend_login'
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`bg-black h-14 flex items-center justify-between border border-b-2 border-b-blue-800`}
    >
      <a href={`${pathname !== "/" ? "/" : "#"}`}>
        <div className="flex-shrink-0 px-4 flex flex-row">
          <div>
            <img src={image1} alt="Logo" className="h-12" />
          </div>
          <div className="ml-[-7px] mt-2 text-white text-xl font-mono hover:text-blue-200 transform-translate hover:scale-105">
            Wizardtopia
          </div>
        </div>
      </a>
      <div className="lg:hidden flex items-center px-4">
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <CloseIcon className="text-white" />
          ) : (
            <MenuIcon className="text-white" />
          )}
        </button>
      </div>
      <ul
        className={`lg:flex lg:flex-row gap-4 mx-8 font-mono ${
          isMenuOpen
            ? "flex-col items-center w-screen bg-black absolute top-14 left-0"
            : "hidden"
        }`}
      >
        <li
          className={`${
            pathname === "" ? "text-blue-400" : "text-white"
          } font-bold hover:text-blue-300 px-4 pt-2 rounded cursor-pointer ${
            isMenuOpen ? "mb-3" : ""
          }`}
        >
          <a href="/">Home</a>
        </li>
        <li
          className={`${
            pathname === "rules" ? "text-blue-400" : "text-white"
          } font-bold hover:text-blue-300 px-4 pt-2 rounded cursor-pointer ${
            isMenuOpen ? "mb-3" : ""
          }`}
        >
          <a href="rules">Rules</a>
        </li>
        <li
          className={`${
            pathname === "points" ? "text-blue-400" : "text-white"
          } font-bold hover:text-blue-300 px-4 pt-2 rounded cursor-pointer ${
            isMenuOpen ? "mb-3" : ""
          }`}
        >
          <a href="points">Points Tally</a>
        </li>
        <li className="relative py-2">
          <a
            onClick={handlesetup}
            className={`${
              pathname === "matirials" ? "text-blue-400" : "text-white"
            } font-bold hover:text-blue-300 px-4 pt-2 rounded cursor-pointer ${
              isMenuOpen ? "mb-3" : ""
            }`}
          >
            Materials{" "}
            {setup ? (
              <ArrowDropUpIcon className="text-white" />
            ) : (
              <ArrowDropDownIcon className="text-white" />
            )}
          </a>
          <ul
            className={`absolute z-10 bg-white mt-2 py-4 px-2 flex gap-4 flex-col rounded-md shadow-md ${
              setup ? "" : "hidden"
            }`}
          >
            <li
              className={`${
                pathname === "books" ? "text-blue-400" : "text-gray-800"
              } hover:text-blue-800 cursor-pointer`}
            >
              <a href="books">Books</a>
            </li>
            <li
              className={`${
                pathname === "movies" ? "text-blue-400" : "text-gray-800"
              } hover:text-blue-800 cursor-pointer`}
            >
              <a href="movies">Movies</a>
            </li>
            <li
              className={`${
                pathname === "admins" || pathname === "notadmins"
                  ? "text-blue-400"
                  : "text-gray-800"
              } hover:text-blue-800 cursor-pointer`}
            >
              <a href="admins">Admins Only</a>
            </li>
            <li
              className={`${
                pathname === "headmaster" ? "text-blue-400" : "text-gray-800"
              } hover:text-blue-800 cursor-pointer`}
            >
              <a href="headmaster">Headmaster</a>
            </li>
          </ul>
        </li>
        <li
          className={`${
            pathname === "event" ? "text-blue-400" : "text-white"
          } font-bold hover:text-blue-300 px-4 pt-2 rounded cursor-pointer ${
            isMenuOpen ? "mb-3" : ""
          }`}
        >
          <a href="event">Events</a>
        </li>
        <li
          className={`font-bold px-4 pt-2 rounded cursor-pointer ${
            isMenuOpen ? "mb-3" : ""
          }`}
        >
          <a href="profile">
            <AccountCircleIcon
              className={`${
                pathname === "profile" ? "text-blue-300" : "text-white"
              } text-gray-100 mt-[-8px] hover:text-blue-300`}
              style={{ fontSize: 40 }}
            />
          </a>
        </li>
        <li
          className={`${
            pathname === "register" ? "text-red-600" : "text-red-400"
          } font-bold text-xl hover:text-red-600 pt-1 ${
            isMenuOpen
              ? "px-3"
              : "transition-translate translate hover:scale-105 px-8"
          } rounded cursor-pointer`}
          onClick={handleClick}
        >
          LogOut
        </li>
      </ul>
    </div>
  );
}

export default Index;
