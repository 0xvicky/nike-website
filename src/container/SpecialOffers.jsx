import React from "react";
import {Button} from "../components";
import {offer} from "../assets/images";
import {arrowRight} from "../assets/icons";
const SpecialOffers = () => {
  return (
    <div className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt=''
          width={773}
          height={687}
        />
      </div>
      <div className='flex flex-col flex-1'>
        <h2 className='font-palanquin font-bold text-4xl capitalize lg:max-w-lg'>
          <span className='text-coral-red'> Special </span>
          Offer
        </h2>
        <p className='info-text mt-4'>
          Embark on a shopping journey that redefines your experience with unbeatable
          deals. From premier selections to incredible savings, we offer unparalleled
          value that sets us apart.
          <p className='mt-6 info-text'>
            Navigate a realm of possibilities designed to fulfill your unique desires,
            surpassing the loftiest expectations. Your journey with us is nothing short of
            exceptional.
          </p>
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button
            label='Shop Now'
            icon={arrowRight}
          />
          <Button
            label='Learn More'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
            icon={arrowRight}
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
