import React, {useState} from "react";
import {Button, ShoeCard} from "../components";
import {arrowRight} from "../assets/icons";
import {shoes, statistics} from "../constants";
import {bigShoe1} from "../assets/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className='flex xl:flex-row flex-col p-2 w-full min-h-screen justify-center max-container gap-10 '>
      <div className='relative flex flex-col xl:w-2/5 w-full max-xl:padding-x items-start justify-center pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collections</p>

        <h1 className='mt-10 font-palanquin font-bold text-8xl max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for your active
          life.
        </p>
        <Button
          label='Shop Now!'
          imgUrl={arrowRight}
        />
        <div className='flex justify-start items-start flex-wrap mt-20 gap-16 w-full'>
          {statistics.map((stat, index) => {
            return (
              <div key={index}>
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe-collection'
          className='object-contain relative z-10 '
          width={610}
          height={500}
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%]'>
          {shoes.map((shoe, index) => {
            return (
              <div key={index}>
                <ShoeCard
                  imgUrl={shoe}
                  changeBigShoeImg={setBigShoeImg}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
