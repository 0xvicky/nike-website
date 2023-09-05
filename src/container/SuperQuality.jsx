import {shoe8} from "../assets/images";
import {Button} from "../components";

const SuperQuality = () => {
  return (
    <div className='flex justify-between items-center max-lg:flex-col max-container gap-10 w-full'>
      <div className='flex flex-col flex-1'>
        <h2 className='font-palanquin font-bold text-4xl capitalize lg:max-w-lg'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'> Quality </span>
          Shoes
        </h2>
        <p className='lg:max-w-lg info-text mt-4'>
          Ensuring premium comfort and style, our meticulously crafted footwear is
          designed to elevate your experience, providing you with unmatched quality,
          innovation, and a touch of elegance.
          <p className='mt-6 lg:max-w-lg info-text'>
            Our dedication to detail and excellence ensures your satisfaction
          </p>
        </p>
        <div className='mt-11'>
          <Button label='View Details' />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img
          src={shoe8}
          alt=''
        />
      </div>
    </div>
  );
};

export default SuperQuality;
