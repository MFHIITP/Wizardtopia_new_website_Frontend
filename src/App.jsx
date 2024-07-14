import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import Houses from "./Components/Houses";
import Index from "./Components/Index";
import Message from "./Components/Message";
import Part1 from "./Components/Part1";
import Footer from "./Components/Footer";
import Rules from "./Components/Rules";
import Faq from "./Components/Faq";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Books from "./Components/Books";
import Movies from "./Components/Movies";
import Admins from "./Components/Admins";
import NotAdmin from "./Components/NotAdmin";
import Posts from "./Components/Posts";
import Points from "./Components/Points";
import Movie1 from "./Components/MoviesComponent/Movie1";
import Movie2 from "./Components/MoviesComponent/Movie2";
import Movie3 from "./Components/MoviesComponent/Movie3";
import Movie4 from "./Components/MoviesComponent/Movie4";
import Movie5 from "./Components/MoviesComponent/Movie5";
import Movie6 from "./Components/MoviesComponent/Movie6";
import Movie7 from "./Components/MoviesComponent/Movie7";
import Movie8 from "./Components/MoviesComponent/Movie8";
import Headmaster_Content from "./Components/Headmaster_Content";
import Watsapp from "./Components/Watsapp";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [myemail, setMyemail] = useState("");
  const [admined, setAdmined] = useState(false);
  const [name, setName] = useState("");
  const admins = [
    "hossainfarshid@gmail.com",
    "aritradas010503@gmail.com",
    "13gargi.sci.kecs@gmail.com",
    "sreejanbose@gmail.com",
  ];
  const [popups, setPopups] = useState({
    firstPopup: false,
    secondPopup: false,
    thirdPopup: false,
    fourthPopup: false,
  });
  useEffect(() => {
    const handleScroll = () => {
      setPopups((prevPopups) => ({
        ...prevPopups,
        firstPopup: window.scrollY >= 0,
        secondPopup: window.scrollY >= 20,
        thirdPopup: window.scrollY >= 400,
        fourthPopup: window.scrollY >= 1700,
      }));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const authentication = async () => {
      function getCookie(name) {
        let value = document.cookie;
        if (value == "") {
          return null;
        }
        let val = value.split(";");
        for (let i = 0; i < val.length; i++) {
          let tokenCookie = val[i];
          if (tokenCookie.startsWith(` ${name}=`)) {
            let token = tokenCookie.substring(8);
            return token;
          } else if (tokenCookie.startsWith(`${name}=`)) {
            let token = tokenCookie.substring(7);
            return token;
          }
        }
        return null;
      }
      try {
        const token = getCookie("Cookie");
        let codedemail = window.atob(token.split(".")[1]);
        let email = JSON.parse(codedemail).email;
        setMyemail(email);
        if (admins.includes(email)) {
          setAdmined(true);
        }
        if (token) {
          let response = await fetch(
            `https://wizardtopia-backend.onrender.com/check_token`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                token: token,
              }),
            }
          );
          console.log(response.text());
          if (response.status === 200) {
            console.log("OK");
            setAuthenticated(true);
          }
        }
      } catch (err) {
        console.log("There is an error");
      }
    };
    authentication();
  }, []);

  useEffect(() => {
    function getname(name) {
      const cookie = document.cookie.split(";");
      for (let i = 0; i < cookie.length; i++) {
        let profilecookie = cookie[i];
        if (profilecookie.startsWith(`${name}=`)) {
          let profileinfo = profilecookie.substring(12);
          profileinfo = decodeURIComponent(profileinfo);
          profileinfo = profileinfo.substring(2);
          profileinfo = JSON.parse(profileinfo);
          return profileinfo;
        } else if (profilecookie.startsWith(` ${name}=`)) {
          let profileinfo = profilecookie.substring(13);
          profileinfo = decodeURIComponent(profileinfo);
          profileinfo = profileinfo.substring(2);
          profileinfo = JSON.parse(profileinfo);
          return profileinfo;
        }
      }
    }
    try {
      let profileinfo = getname("ProfileInfo");
      setName(profileinfo.name);
    } catch (err) {
      setName("");
    }
  }, []);

  const router_val = createBrowserRouter([
    {
      path: "/",
      element: authenticated ? (
        <>
          <Part1 Popup={popups.firstPopup} />
          <Message Popup={popups.secondPopup} />
          <Houses Popup={popups.thirdPopup} />
          <Faq Popup={popups.fourthPopup} />
          <Footer Popup={popups.fourthPopup} />
        </>
      ) : (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/backend_login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/rules",
      element: authenticated ? (
        <>
          <Rules />
          <Footer />
        </>
      ) : (
        <></>
      ),
    },
    {
      path: "/backend_main", 
      element: (
        <>
          <Register />
        </>
      ),
    },
    {
      path: "/profile",
      element: authenticated ? (
        <>
          <Profile />
        </>
      ) : (
        <></>
      ),
    },
    {
      path: "/books",
      element: authenticated ? (
        <>
          <Books />
        </>
      ) : (
        <></>
      ),
    },
    {
      path: "/movies",
      element: authenticated ? (
        <>
          <Movies />
        </>
      ) : (
        <></>
      ),
    },
    {
      path: "/admins",
      element: authenticated ? (
        admined ? (
          <>
            <Admins myemail={myemail} />
          </>
        ) : (
          <>
            <NotAdmin />
          </>
        )
      ) : (
        <></>
      ),
    },
    {
      path: '/headmaster',
      element: <><Headmaster_Content mail = {myemail}/></>
    },
    {
      path: "/event",
      element: authenticated ? <Posts name={name} /> : <></>,
    },
    {
      path: "/points",
      element: authenticated ? <Points email={myemail} /> : <></>,
    },
    {
      path: "movie1",
      element: authenticated ? <Movie1/> : <></>
    },
    {
      path: "movie2",
      element: authenticated ? <Movie2/> : <></>
    },
    {
      path: "movie3",
      element: authenticated ? <Movie3/> : <></>
    },
    {
      path: "movie4",
      element: authenticated ? <Movie4/> : <></>
    },
    {
      path: "movie5",
      element: authenticated ? <Movie5/> : <></>
    },
    {
      path: "movie6",
      element: authenticated ? <Movie6/> : <></>
    },
    {
      path: "movie7",
      element: authenticated ? <Movie7/> : <></>
    },
    {
      path: "movie8",
      element: authenticated ? <Movie8/> : <></>
    },
  ]);
  return (
    <div className="relative">
      <div
        className={`h-12 ${
          authenticated == false ||
          window.location.pathname == "/backend_login" ||
          window.location.pathname == "/backend_register"
            ? "hidden"
            : ""
        }`}
      >
        <div className={`fixed top-0 left-0 z-40 w-full`}>
          <Index name={name} myemail={myemail} />
        </div>
      </div>
      <Watsapp registered = {authenticated}/>
      <RouterProvider router={router_val} />
    </div>
  );
}

export default App;
