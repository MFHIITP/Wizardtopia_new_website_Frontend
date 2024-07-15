import React from "react";

function Watsapp(props) {
  return (
    <div className="fixed bottom-1 right-0 text-white bg-gray-800 rounded-lg px-4 py-1 mx-8 text-xs z-20 hover:bg-gray-900 opacity-95">
      <div className={`${(props.registered === false) ? "hidden" : "none"}`}>
        <a href="https://chat.whatsapp.com/H7shXB5TJtK2XcUbvRoujO" className="md:flex gap-8">
          <div className="flex items-center font-extralight w-6 md:w-full">
            Join our Official Whatsapp Group
          </div>
          <div className="text-xs font-extralight">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Image"
              height={30}
              width={30}
              className="ml-4"
            />
            Whatsapp
          </div>
        </a>
      </div>
    </div>
  );
}

export default Watsapp;
