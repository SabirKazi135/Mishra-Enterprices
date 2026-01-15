import Footer from '../components/Footer';
import contactImg from '../assets/images/contact.png';

function Contact() {
  return (
    <>
      <section
        className="hidden h-[600px] w-full grid-cols-2 place-items-center items-center bg-cover bg-center px-40 md:block md:grid"
        style={{ backgroundImage: `url(${contactImg})` }}
      >
        <div className="flex h-[200px] w-[473px] items-center justify-center rounded-[10px] bg-[#141241] px-5 py-16 shadow-md">
          <h2 className="mx-auto flex h-10 items-center justify-center text-[40px] font-bold text-white">
            Contact Us
          </h2>
        </div>
        <div>
          <p className="mb-[14px] text-xl font-light leading-[30px] text-white">
            Have a packaging idea or project in mind? We’re here to bring it to
            life. Whether you need innovative designs, sustainable materials, or
            custom packaging solutions, our team is ready to help. Get in touch
            with us today — let’s create packaging that protects, impresses, and
            represents your brand perfectly.
          </p>
        </div>
      </section>

      <section className="md:hidden">
        <div className="flex items-center justify-center bg-white px-5 py-10">
          <h2 className="mx-auto flex w-full items-center justify-center text-[26px] font-semibold text-[#363636]">
            Contact Us
          </h2>
        </div>
        <div
          className="bg-cover bg-center p-5"
          style={{ backgroundImage: `url(${contactImg})` }}
        >
          <p className="mb-[14px] text-base font-light leading-[24px] text-white">
            Have a packaging idea or project in mind? We’re here to bring it to
            life. Whether you need innovative designs, sustainable materials, or
            custom packaging solutions, our team is ready to help. Get in touch
            with us today — let’s create packaging that protects, impresses, and
            represents your brand perfectly.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
