import {Button} from "../components";
import {arrowRight} from "../assets/icons";

const Hero = () => {
  return (
    <section className='flex xl:flex-row flex-col p-2 w-full min-h-screen justify-center max-container gap-10 '>
      <div className='relative flex flex-col xl:w-2/5 w-full max-xl:padding-x items-start justify-center pt-28'>
        <p>Our Summer Collections</p>

        <h1>
          <span className='text-4xl font-bold'>The New Arrival</span>
          <br />
          <span>Nike</span>Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for your active
          life.
        </p>
        <Button
          label='Shop Now!'
          imgUrl={arrowRight}
        />
        <div>Stats</div>
      </div>
    </section>
  );
};

export default Hero;
