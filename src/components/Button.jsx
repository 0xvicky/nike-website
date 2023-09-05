import React from "react";

const Button = ({label, imgUrl, backgroundColor, textColor, borderColor}) => {
  return (
    <div>
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none border rounded-full
     ${
       backgroundColor
         ? `${backgroundColor} ${textColor} ${borderColor}`
         : "text-white border-coral-red bg-coral-red"
     }
     `}>
        {label}
        {imgUrl && (
          <img
            src={imgUrl}
            alt='arrow-right'
            className='ml-2 rounded-full w-5 h-5 cursor-pointer'
          />
        )}
      </button>
    </div>
  );
};

export default Button;
