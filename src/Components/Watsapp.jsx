import React from "react";

function Watsapp(props) {
  return (
    <div className="fixed bottom-1 right-2 text-white bg-gray-800 rounded-lg px-4 py-1 mx-8 text-xs z-20 hover:bg-gray-900 opacity-95">
      <div className={`${(props.registered === false) ? "hidden" : "none"}`}>
        <a href="https://chat.whatsapp.com/H7shXB5TJtK2XcUbvRoujO" className="flex gap-8">
          <div className="flex items-center font-extralight">
            Join our Official Watsapp Group
          </div>
          <div className="text-xs font-extralight">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Image"
              height={30}
              width={30}
            />
            Watsapp
          </div>
        </a>
      </div>
    </div>
  );
}

export default Watsapp;
