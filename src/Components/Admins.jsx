import React from "react";
import { useEffect, useState } from "react";

function Admins(props) {
  const [students, setStudents] = useState([]);
  const admins = ['aritradas010503@gmail.com', '13gargi.sci.kecs@gmail.com', 'sreejanbose@gmail.com']
  const headmaster = ['hossainfarshid@gmail.com']

  const handleremove = async (email) => {
    await alert("Are you sure you want to remove this person ?")
    const response = await fetch("https://wizardtopia-backend.onrender.com/backend_remove", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    if (response.status === 200) {
      window.location.reload();
    }
  };

  useEffect(() => {
    const output = async () => {
      const response = await fetch("https://wizardtopia-backend.onrender.com/admins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setStudents(data);
    };
    output();
  }, []);

  if(headmaster.includes(props.myemail)){
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Members ({students.length})</h1>
        <ul className="space-y-6">
          {students.map((student, index) => (
            <li key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-white">{student.name}</h2>
                <button
                  className={`text-red-500 hover:text-red-700 bg-gray-900 hover:bg-gray-700 px-3 py-1 rounded transition-colors ${(student.email != props.myemail) ? "" : "hidden"}`}
                  onClick={() => handleremove(student.email)}
                >
                  Remove member
                </button>
              </div>
              <p className="text-gray-400 mb-2">
                <span className="font-bold text-white">Status:</span> {admins.includes(student.email) ? <>Professor</> : (headmaster.includes(student.email) ? <>HeadMaster</> : <>Student</>)}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-medium text-white">Email:</span> {student.email}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-medium text-white">College:</span> {student.study}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-medium text-white">Year:</span> {student.year}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-medium text-white">Contact:</span> {student.phone}
              </p>
              <p className="text-gray-400">
                <span className="font-medium text-white">Branch:</span> {student.branch}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  else if(admins.includes(props.myemail)){
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Members </h1>
        <ul className="space-y-6">
          {students.map((student, index) => (
            <li key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-white">{student.name}</h2>
                <button
                  className={`text-red-500 hover:text-red-700 bg-gray-900 hover:bg-gray-700 px-3 py-1 rounded transition-colors ${(headmaster.includes(student.email) || admins.includes(student.email)) ? "hidden" : ""}`}
                  onClick={() => handleremove(student.email)}
                >
                  Remove student
                </button>
              </div>
              <p className="text-gray-400 mb-2">
                <span className="font-bold text-white">Status:</span> {admins.includes(student.email) ? <>Professor</> : (headmaster.includes(student.email) ? <>HeadMaster</> : <>Student</>)}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-medium text-white">Email:</span> {student.email}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-medium text-white">College:</span> {student.study}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-medium text-white">Year:</span> {student.year}
              </p>
              <p className="text-gray-400 mb-2">
                <span className="font-medium text-white">Contact:</span> {student.phone}
              </p>
              <p className="text-gray-400">
                <span className="font-medium text-white">Branch:</span> {student.branch}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Admins;
