import React from 'react';

function Message(props) {
  return (
    <div className={`bg-gray-900 rounded-lg p-8 mx-8 my-8 ${props.Popup == false ? 'none' : 'anime'}`}>
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-4xl text-white italic font-serif">Enchanted Realm: Where Magic Rules!</h1>
      </div>
      <div className="text-white text-md sm:text-xl font-mono">
        <p>
          Welcome to Wizardtopia, where magic reigns supreme! Step into a realm of enchantment and wonder, where every corner holds the promise of adventure. Immerse yourself in a world where spells come alive, potions brew and secrets await discovery. From themed events to immersive experiences, Wizardtopia promises an unforgettable journey inspired by the allure of magic. Join us and unlock the door to a realm where the extraordinary becomes ordinary, and dreams take flight. Welcome to Wizardtopia where magic never fails.
        </p>
      </div>
    </div>
  );
}

export default Message;
