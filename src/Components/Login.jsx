import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://wizardtopia-backend.onrender.com/backend_login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          credentials: "include",
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        document.cookie = `Cookie=${data.token}; path=/; domain=${window.location.hostname}; secure=true; sameSite=none;`;
        document.cookie = `ProfileInfo=${encodeURIComponent("j:" + JSON.stringify(data.profileinfo))}; path=/; domain=${window.location.hostname}; secure=true; sameSite=none;`;
        window.location.href = "/";
      } else {
        const ans = await response.text();
        setMessage(ans);
      }
    } catch (err) {
      setMessage(`${err}`);
    }
  };

  const [dots, setDots] = useState({
    firstDot: false,
    secondDot: false,
    thirdDot: false,
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setDots((prevDots) => ({
        firstDot: !prevDots.firstDot,
        secondDot: prevDots.firstDot && !prevDots.secondDot,
        thirdDot: prevDots.secondDot && !prevDots.thirdDot,
      }));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 hello">
        <div className="max-w-md w-full space-y-8">
          <div className="flex flex-row">
            <h2 className="mt-6 text-center text-4xl font-extrabold text-white italic font-serif">
              {email.length === 0 && password.length === 0
                ? "Login"
                : "Almost There"}
            </h2>
            <div
              className={`${
                dots.firstDot ? "text-white" : "hidden"
              } text-6xl mt-1 font-bold`}
            >
              .
            </div>
            <div
              className={`${
                dots.secondDot ? "text-white" : "hidden"
              } text-6xl mt-1 font-bold`}
            >
              .
            </div>
            <div
              className={`${
                dots.thirdDot ? "text-white" : "hidden"
              } text-6xl mt-1 font-bold`}
            >
              .
            </div>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="my-6 text-white">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg w-full px-3 py-2 border border-gray-50 placeholder-white text-white from-neutral-50 focus:outline-none focus:ring-indigo-100 focus:border-indigo-100 focus:z-10 sm:text-sm bg-transparent"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-lg w-full px-3 py-2 border border-white placeholder-white text-white from-neutral-50 focus:outline-none focus:ring-indigo-100 focus:border-indigo-100 focus:z-10 sm:text-sm bg-transparent font-mono"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="text-lg text-red-600 mx-28">{message}</div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 opacity-80 font-mono"
              >
                Welcome To Hogwarts
              </button>
            </div>
          </form>
          <div className="flex mt-4">
            <div className="text-2xl text-white font-mono">
              Not a Part of Us? Well Get In!
            </div>
            <div className="">
              <a
                href="/backend_main"
                className="bg-indigo-600 mx-4 px-4 pt-1 pb-2 text-white text-xl rounded-lg opacity-80 font-mono" 
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
