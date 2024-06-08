import React from "react";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Footer = (props) => {
  return (
    <div className={`${props.Popup == false ? "none" : "anime"} py-8 px-4 sm:px-8 md:px-10`}>
      <div className="rounded-lg my-8">
        <div className="flex flex-col text-white bg-gray-900 rounded-lg p-6 sm:p-8 md:p-10">
          <div className="m-auto font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-8 font-serif">Contact Us</div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-4 sm:mx-8 md:mx-12 lg:mr-[-20px] my-1.5 mb-12 sm:mb-2 font-mono">
            <div className=" text-lg sm:text-xl md:text-2xl italic font-bold">HeadMaster</div>
            <div className="italic">Farshid Hossain</div>
            <div className="text-white flex items-center">
              <a href="mailto:hossainfarshid@gmail.com"><EmailIcon className="mr-1"/> hossainfarshid@gmail.com</a>
            </div>
            <div className="text-white flex items-center">
              <a href="tel:8420019028"><CallIcon className="mr-1"/>8420019028</a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-4 sm:mx-8 md:mx-12 lg:mr-[-20px] my-1.5 mb-12 sm:mb-2 font-mono">
            <div className="text-lg sm:text-xl md:text-2xl italic font-bold">Assistant HeadMaster</div>
            <div className="italic">Aritra Das</div>
            <div className="text-white flex items-center">
              <a href="mailto:aritradas.ju.2126@gmail.com"><EmailIcon className="mr-1"/> aritradas.ju.2126@gmail.com</a>
            </div>
            <div className="text-white flex items-center">
              <a href="tel:9051029140"><CallIcon className="mr-1"/>9051029140</a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-4 sm:mx-8 md:mx-12 lg:mr-[-20px] my-1.5 mb-12 sm:mb-2 font-mono">
            <div className="text-lg sm:text-xl md:text-2xl italic font-bold">Professor</div>
            <div className="italic">Sreejan Bose</div>
            <div className="text-white flex items-center">
              <a href="mailto:sreejanbose@gmail.com"><EmailIcon className="mr-1" /> sreejanbose@gmail.com</a>
            </div>
            <div className="text-white flex items-center">
              <a href="tel:9748877972"><CallIcon className="mr-1" />9748877972</a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-4 sm:mx-8 md:mx-12 lg:mr-[-20px] my-1.5 font-mono">
            <div className="text-lg sm:text-xl md:text-2xl italic font-bold">Professor</div>
            <div className="italic">Gargi Haldar</div>
            <div className="text-white flex items-center">
              <a href="mailto:13gargi.sci.kecs@gmail.com"><EmailIcon className="mr-1" /> 13gargi.sci.kecs@gmail.com</a>
            </div>
            <div className="text-white flex items-center">
              <a href="tel:9123823538"><CallIcon className="mr-1" />9123823538</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
