import React, { useState, useEffect } from 'react';

function Headmaster_Content(props) {
  const [persons, setPersons] = useState([]);
  const email = 'hossainfarshid@gmail.com';

  useEffect(() => {
    const handleinfo = async () => {
      const response = await fetch('https://wizardtopia-backend.onrender.com/backend_logging', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setPersons(data);
    };
    handleinfo();
  }, []);

  if (props.mail === email) {
    return (
      <div className='text-white m-12'>
        <div className="flex justify-center text-2xl font-semibold mb-6">
          {persons.length} Active members
        </div>
        {persons.map((person, index) => (
          <div key={index} className='bg-gray-800 p-6 mb-4 rounded-lg shadow-md'>
            <div className='mb-2'>
              <span className='font-bold'>Name:</span> {person.name}
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Email:</span> {person.email}
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Intime:</span> {person.intime}
            </div>
            <div className='mb-2'>
              <span className='font-bold'>OutTime:</span> {person.outtime}
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Status:</span> {person.stats}
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="text-red-600 text-center mt-12 text-xl font-bold">
        You are NOT the Headmaster. Leave immediately.
      </div>
    );
  }
}

export default Headmaster_Content;
