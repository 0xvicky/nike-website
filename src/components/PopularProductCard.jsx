import React from "react";
import {star} from "../assets/icons";

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-col flex-1 w-full max-sm:w-full space-y-2'>
      <img
        className='h-[280px] w-[280px]'
        src={imgURL}
        alt=''
      />
      <div className='flex flex-start mt-8 gap-2.5'>
        <img
          src={star}
          alt=''
          width={24}
          height={24}
        />
        <p>(4.5)</p>
      </div>
      <span className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </span>
      <span className='font-semibold font-montserrat mt-2 text-coral-red'>{price}</span>
    </div>
  );
};

export default PopularProductCard;
