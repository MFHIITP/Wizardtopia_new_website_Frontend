import React from "react";
import { useState, useEffect } from "react";

function Points(props) {
  const admins = [
    "hossainfarshid@gmail.com",
    "aritradas.ju.2126@gmail.com",
    "sreejanbose@gmail.com",
    "13gargi.sci.kecs@gmail.com",
  ];
  const [winner, setWinner] = useState("");
  const [gnew, setGnew] = useState("");
  const [gpoints, setGpoints] = useState(0);
  const [hnew, setHnew] = useState("");
  const [hpoints, setHpoints] = useState(0);
  const [rnew, setRnew] = useState("");
  const [rpoints, setRpoints] = useState(0);
  const [snew, setSnew] = useState("");
  const [spoints, setSpoints] = useState(0);

  const handleIncrease = async (housename, value) => {
    if (admins.includes(props.email)) {
      const response = await fetch(
        "https://wizardtopia-backend.onrender.com/backend_points_increase",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            house: housename,
            point: Number(value),
          }),
        }
      );
      if (response.status === 200) {
        console.log("Now");
        window.location.reload();
      }
    } else {
      alert(
        "You are not a professor. This activity will be notified to the headmaster"
      );
    }
  };
  const handleDecrease = async (housename, value) => {
    if (admins.includes(props.email)) {
      const response = await fetch(
        "https://wizardtopia-backend.onrender.com/backend_points_decrease",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            house: housename,
            point: Number(value),
          }),
        }
      );

      if (response.status === 200) {
        console.log("NOW")
      }
    } else {
      alert(
        "You are not a professor. This activity will be notified to the headmaster"
      );
    }
  };

  useEffect(() => {
    const output = async () => {
      const response = await fetch(
        "https://wizardtopia-backend.onrender.com/backend_points",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status == 200) {
        const data = await response.json();
        setGpoints(data.Gryffindor);
        setRpoints(data.Ravenclaw);
        setHpoints(data.Huffelpuff);
        setSpoints(data.Slytherin);
        setWinner(
          ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"][
            [data.Gryffindor,data.Ravenclaw,data.Hufflepuff,data.Slytherin].indexOf(
              Math.max(data.Gryffindor,data.Ravenclaw,data.Huffelpuff,data.Slytherin))
          ]
        );
      }
    };
    output();
  }, [gpoints, hpoints, rpoints, spoints]);

  return (
    <div className="text-white m-8 font-mono">
      <div className="flex flex-col sm:flex-row sm:my-2 items-center justify-between mb-6 sm:mb-12 mt-10">
        <div className="flex items-center mb-[20px] sm:mb-0">
          <div className="font-bold text-2xl text-yellow-500">
            Gryffindor Points: {gpoints}
          </div>
        </div>
        <div className={`flex items-center ${admins.includes(props.email) ? '' : 'hidden'}`}>
          <input
            type="text"
            className="text-black size-10 mr-4 border border-gray-500 px-2 py-1 rounded"
            value={gnew}
            onChange={(e) => setGnew(e.target.value)}
          />
          <form
            onSubmit={() => {
              handleIncrease("Gryffindor", gnew);
            }}
          >
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Increase
            </button>
          </form>
          <form
            onSubmit={() => {
              handleDecrease("Gryffindor", gnew);
            }}
          >
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
            >
              Decrease
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-12 items-center justify-between mb-12">
        <div className="flex items-center mb-[-20px] sm:mb-0">
          <div className="font-bold text-2xl text-blue-500">
            Ravenclaw Points: {rpoints}
          </div>
        </div>
        <div className={`flex items-center ${admins.includes(props.email) ? '' : 'hidden'}`}>
          <input
            type="text"
            className="text-black size-10 mr-4 border border-gray-500 px-2 py-1 rounded"
            value={rnew}
            onChange={(e) => setRnew(e.target.value)}
          />
          <form
            onSubmit={() => {
              handleIncrease("Ravenclaw", rnew);
            }}
          >
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Increase
            </button>
          </form>
          <form
            onSubmit={() => {
              handleDecrease("Ravenclaw", rnew);
            }}
          >
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
            >
              Decrease
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-12 items-center justify-between mb-12">
        <div className="flex items-center mb-[-20px] sm:mb-0">
          <div className="font-bold text-2xl text-green-500">
            Huffelpuff Points: {hpoints}
          </div>
        </div>
        <div className={`flex items-center ${admins.includes(props.email) ? '' : 'hidden'}`}>
          <input
            type="text"
            className="text-black size-10 mr-4 border border-gray-500 px-2 py-1 rounded"
            value={hnew}
            onChange={(e) => setHnew(e.target.value)}
          />
          <form
            onSubmit={() => {
              handleIncrease("Huffelpuff", hnew);
            }}
          >
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Increase
            </button>
          </form>
          <form
            onSubmit={() => {
              handleDecrease("Huffelpuff", hnew);
            }}
          >
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
            >
              Decrease
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-12 items-center justify-between mb-12">
        <div className="flex items-center mb-[-20px] sm:mb-0">
          <div className="font-bold text-2xl text-red-500">
            Slytherin Points: {spoints}
          </div>
        </div>
        <div className={`flex items-center ${admins.includes(props.email) ? '' : 'hidden'}`}>
          <input
            type="text"
            className="text-black size-10 mr-4 border border-gray-500 px-2 py-1 rounded"
            value={snew}
            onChange={(e) => setSnew(e.target.value)}
          />
          <form
            onSubmit={() => {
              handleIncrease("Slytherin", snew);
            }}
          >
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Increase
            </button>
          </form>
          <form
            onSubmit={() => {
              handleDecrease("Slytherin", snew);
            }}
          >
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-2 rounded"
            >
              Decrease
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold py-4 px-8 rounded shadow-lg transform hover:scale-105 transition-transform duration-300">
          Winning House - {winner}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6">Past Cup Winners</h2>
        <div className="flex justify-center">
          <div className="bg-gray-800 p-4 rounded-lg shadow-md w-80 text-center">
            <p className="text-xl font-semibold text-yellow-500">Gryffindor</p>
            <p className="text-lg text-white">2023</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Points;
