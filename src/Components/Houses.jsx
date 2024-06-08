import React from 'react'
import image1 from "../../Images/Gryffindor.png"
import image2 from "../../Images/Slytherin.jpg"
import image3 from "../../Images/Huffelpuff.png"
import image4 from "../../Images/Ravenclaw.jpg"

function Houses() {
  return (
    <div>
    <div className={`flex justify-center my-8 py-4 bg-gray-900 rounded-lg mx-8 ${window.scrollY <= 200 ? 'none' : 'anime'}`}>
      <div className='text-white text-4xl italic font-serif'>Houses</div>
    </div>
    <div className={`flex flex-col text-white px-10 my-9 h-fit w-full`}>
      <div className={`${window.scrollY <= 300 ? 'none' : 'anime'}`}>
        <div className="bg-blue-800 my-4 rounded-lg border-b-4 border-blue-800"></div>
        <div className="gryffindor flex flex-row justify-between px-4">
          <div className="relative w-[30%] md:w-[10%]">
              <img src={image1} alt="" className='absolute top-0 left-10 object-contain hidden sm:block'/>
          </div>
          <div className="sm:w-1/2 flex flex-col">
            <div className='font-serif text-2xl flex justify-center'>Gryffindor</div>
            <div className='my-8 font-mono'>
              Gryffindor is one of the four houses at Hogwarts, known for its bravery and courage. Founded by Godric Gryffindor, it values traits like daring and chivalry. Gryffindors are known for their adventurous spirit and loyalty to their friends. Famous Gryffindors include Harry Potter, Hermione Granger, and Albus Dumbledore.
            </div>
          </div>
        </div>
        
        <div className="bg-blue-800 my-4 rounded-lg border-b-4 border-blue-800"></div>
      </div>
      <div className={`${window.scrollY <= 500 ? 'none' : 'anime'}`}>
        <div className="gryffindor flex flex-row justify-between px-4">
          <div className="sm:w-1/2 flex flex-col">
            <div className='font-serif text-2xl flex justify-center'>Ravenclaw</div>
            <div className='my-8 font-mono'>
              Ravenclaw is one of the four houses at Hogwarts, known for its emphasis on intelligence, wisdom, and creativity. Founded by Rowena Ravenclaw, it values traits like wit, learning, and curiosity. Ravenclaws are known for their love of learning and pursuit of knowledge. The house is represented by a raven as its emblematic animal. Notable Ravenclaws include Luna Lovegood, Mad Eye Moody and Cho Chang.
            </div>
          </div>
          <div className="relative w-[30%] md:w-[10%]">
              <img src={image4} alt="" className='absolute top-0 left-[-20px] object-contain hidden sm:block'/>
          </div>
        </div>

        <div className="bg-blue-800 my-4 rounded-lg border-b-4 border-blue-800"></div>
      </div>
      <div className={`${window.scrollY <= 800 ? 'none' : 'anime'}`}>
        <div className="gryffindor flex flex-row justify-between px-4">
          <div className="relative w-[30%] md:w-[10%]">
              <img src={image3} alt="" className='absolute top-0 left-10 object-contain hidden sm:block'/>
          </div>
          <div className="sm:w-1/2 flex flex-col">
            <div className='font-serif text-2xl flex justify-center'>Huffelpuff</div>
            <div className='my-8 font-mono'>
              Hufflepuff is one of the four houses at Hogwarts, known for its dedication to hard work, loyalty, and fair play. Founded by Helga Hufflepuff, it values traits like patience, kindness, and inclusivity. Hufflepuffs are known for their strong sense of community and willingness to help others. The house is represented by a badger as its emblematic animal. Notable Hufflepuffs include Cedric Diggory and Nymphadora Tonks.
            </div>
          </div>
        </div>

        <div className="bg-blue-800 my-4 rounded-lg border-b-4 border-blue-800"></div>
      </div>
      <div className={`${window.scrollY <= 1100 ? 'none' : 'anime'}`}>
        <div className="gryffindor flex flex-row justify-between px-4">
          <div className="sm:w-1/2 flex flex-col">
            <div className='font-serif text-2xl flex justify-center'>Slytherin</div>
            <div className='my-8 font-mono'>
              Slytherin is one of the four houses at Hogwarts, known for its ambition, cunning, and resourcefulness. Founded by Salazar Slytherin, it values traits like ambition, leadership, and self-preservation. Slytherins are known for their ambition and determination to succeed, often using any means necessary to achieve their goals. The house is represented by a serpent as its emblematic animal. Notable Slytherins include Severus Snape and Draco Malfoy.
            </div>
          </div>
          <div className="relative w-[30%] md:w-[10%]">
              <img src={image2} alt="" className='absolute top-0 left-[-20px] object-contain hidden sm:block'/>
          </div>
        </div>
        <div className="bg-blue-800 my-4 rounded-lg border-b-4 border-blue-800"></div>
      </div>
    </div>
    </div>
  )
}

export default Houses
