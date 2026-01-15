import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      
      <Footer />
    </>
  );
}

export default Contact;


{/* <section className="min-h-screen bg-white px-4 py-12 md:px-12 md:py-20">
  <div className="mx-auto max-w-4xl">
    <div className="mb-12 text-center">
      <h1 className="mb-4 text-4xl font-bold text-[#363636] md:text-5xl">
        Contact Us
      </h1>
      <p className="text-lg text-gray-600">
        Get in touch with us for all your packaging needs
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
 
      <div className="space-y-6">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-[#363636]">
            Get in Touch
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#0568A4]">Phone</h3>
              <p className="text-gray-700">
                <a
                  href="tel:08049894644"
                  className="transition-colors hover:text-[#0568A4]"
                >
                  080-49894644
                </a>
                <br />
                <a
                  href="tel:+918884607600"
                  className="transition-colors hover:text-[#0568A4]"
                >
                  +91-8884607600
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0568A4]">Email</h3>
              <p className="text-gray-700">
                <a
                  href="mailto:info@mishraenterprises.in"
                  className="transition-colors hover:text-[#0568A4]"
                >
                  info@mishraenterprises.in
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0568A4]">Address</h3>
              <p className="text-gray-700">
                No. 7, Halgevadarahalli, BEML Complex Road,
                <br />
                Rajarajeshwari Nagar, Bangalore – 560098,
                <br />
                Karnataka, India
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-2xl font-bold text-[#363636]">
          Send us a Message
        </h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#0568A4] focus:outline-none focus:ring-2 focus:ring-[#0568A4]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#0568A4] focus:outline-none focus:ring-2 focus:ring-[#0568A4]"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#0568A4] focus:outline-none focus:ring-2 focus:ring-[#0568A4]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full rounded border border-gray-300 px-4 py-2 focus:border-[#0568A4] focus:outline-none focus:ring-2 focus:ring-[#0568A4]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded bg-[#0568A4] px-6 py-3 text-white transition-colors hover:bg-[#045a8c]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>; */}
