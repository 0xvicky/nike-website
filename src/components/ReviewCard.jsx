import React from "react";
import {star} from "../assets/icons";

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img
        src={imgURL}
        alt=''
        className='w-[120px] h-[120px] rounded-full object-cover'
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='flex justify-center items-center mt-3 gap-2.5'>
        <img
          src={star}
          alt=''
          width={24}
          height={24}
          className='object-contain m-0'
        />
        <p className='text-slate-gray text-xl font-montserrat'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
