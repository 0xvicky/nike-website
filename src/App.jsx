import {
  Hero,
  PopularProducts,
  SuperQuality,
  Subscribe,
  SpecialOffers,
  Footer,
  CustomerReviews,
  Services
} from "./container";

const App = () => {
  return (
    <main className='relative'>
      <section className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffers />
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews />
      </section>
      <section className='padding sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='padding-x padding-t pb-8 bg-black text-white'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
