import React from 'react'

function NotAdmin() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="bg-red-600 border-4 border-red-800 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-4xl font-extrabold mb-4 text-yellow-200 text-center">⚠️ Access Denied ⚠️</h1>
        <p className="text-white text-xl text-center">
          You are not a professor. This feature is hidden from you. Please leave this page.
        </p>
        <p className='text-white text-xl text-center'>This action will be reported to the headmaster.</p>
        <div className="mt-6 flex justify-center">
          <button
            className="bg-red-800 text-white px-6 py-2 rounded-full font-bold shadow-lg transform hover:scale-110 transition-transform duration-300"
            onClick={() => window.location.href = '/'}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotAdmin
