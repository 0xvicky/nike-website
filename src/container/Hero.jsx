const Hero = () => {
  return (
    <section className='flex xl:flex-row flex-col p-2 w-full border-2 border-red-500 min-h-screen justify-center max-container gap-10'>
      <div className='flex flex-col xl:w-2/5 w-full max-xl:padding-x bg-red-500 items-center justify-center'>
        <p>Our Summer Collections</p>
        <h1 className='text-4xl font-bold'>The New Arrival Nike Shoes</h1>
      </div>
      <div>Shoes</div>
    </section>
  );
};

export default Hero;
