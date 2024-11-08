
import React, { useState } from "react";

function User({ name, profession, img }) {
  const [buttonText, setButtonText] = useState("Follow");

  const click = () => {
    setButtonText("Request sent"); // Correct usage of setButtonText
  };

  return (
    <div className="w-[30vw] h-max border flex justify-between p-2 items-center mx-auto my-2 bg-slate-50 rounded-lg">
      <div className="flex items-center gap-2">
        <img
          src={img}
          alt={name} // For better accessibility
          className="w-[50px] h-[50px] rounded-full object-cover"
        />
        <div>
          <p className="text-md">{name}</p>
          <p className="text-sm">{profession}</p>
        </div>
      </div>
      <button
        className="bg-blue-700 px-2 rounded-md text-white"
        onClick={click}
      >
        {buttonText} {/* Display the button text */}
      </button>
    </div>
  );
}

export default User;
