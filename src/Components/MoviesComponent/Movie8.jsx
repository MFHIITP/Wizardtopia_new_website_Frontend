import React from 'react';

function Movie1() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <video width="80%" height="auto" controls>
        <source src="../../Movies/Movie7-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Movie1;
