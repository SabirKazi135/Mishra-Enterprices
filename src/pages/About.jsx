import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <section
        className="hidden h-[600px] w-full grid-cols-2 place-items-center items-center bg-cover bg-center px-40 md:block md:grid"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div className="flex h-[200px] w-[473px] items-center justify-center rounded-[10px] bg-[#141241] px-5 py-16 shadow-md">
          <h2 className="mx-auto flex h-10 items-center justify-center text-[40px] font-bold text-white">
            Services
          </h2>
        </div>
        <div>
          <p className="mb-[14px] text-xl font-light leading-[30px] text-white">
            We turn your packaging vision into reality with innovation, care,
            and excellence. From design to delivery, we create reliable,
            eye-catching, and sustainable solutions that enhance your brand and
            exceed customer expectations.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
