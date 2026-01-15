import Footer from '../components/Footer';
import contactImg from '../assets/images/contact.png';
import { useState } from 'react';
import p1 from '../assets/images/p1.png';
import p2 from '../assets/images/p2.png';
import p3 from '../assets/images/p3.png';
import p4 from '../assets/images/p4.png';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Invalid email';
    }

    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Enter 10-digit number';
    }

    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log('Form Data:', form);

    // reset after submit
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

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

      <section className="bg-[#FEF7EF] px-5 py-10 md:px-[80px] md:py-[60px]">
        <div className="mx-auto">
          {/* GRID */}
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            {/* LEFT CONTENT */}
            <div className="w-full">
              <h2 className="text-[26px] font-bold text-[#363636] md:text-[40px]">
                Get In Touch
              </h2>

              <p className="mt-3 text-base text-[#555] md:text-[20px]">
                Connect with our experts to discuss your packaging requirements.
                We’ll help you find the perfect solution tailored to your brand
                and business needs.
              </p>

              {/* DETAILS */}
              <div className="mt-8 grid items-baseline gap-6 md:grid-cols-2">
                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="flex size-[40px] items-center justify-center rounded-full bg-[#E6F6EC] md:size-[50px]">
                    <img
                      src={p1}
                      alt="Phone"
                      className="size-[20px] md:size-[30px]"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] md:text-[26px] md:font-bold">
                      Phone:
                    </p>
                    <p className="text-sm text-[#555] md:text-lg">
                      080-49894644
                    </p>
                    <p className="text-sm text-[#555] md:text-lg">
                      +91-8884607600
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="flex size-[40px] items-center justify-center rounded-full bg-[#E6F6EC] md:size-[50px]">
                    <img
                      src={p2}
                      alt="Email"
                      className="size-[20px] md:size-[30px]"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] md:text-[26px] md:font-bold">
                      Email:
                    </p>
                    <p className="text-sm text-[#555] md:text-lg">
                      info@mishraenterprises.in
                    </p>
                  </div>
                </div>

                {/* TIMINGS */}
                <div className="flex items-start gap-4">
                  <div className="flex size-[40px] items-center justify-center rounded-full bg-[#E6F6EC] md:size-[50px]">
                    <img
                      src={p3}
                      alt="Timings"
                      className="size-[20px] md:size-[30px]"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] md:text-[26px] md:font-bold">
                      Timings:
                    </p>
                    <p className="text-sm text-[#555] md:text-lg">
                      10:00 AM – 6:00 PM Daily
                    </p>
                    <p className="text-sm text-[#555] md:text-lg">
                      Sunday Holiday
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div className="flex size-[40px] items-center justify-center rounded-full bg-[#E6F6EC] md:size-[50px]">
                    <img
                      src={p4}
                      alt="Location"
                      className="size-[20px] md:size-[30px]"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] md:text-[26px] md:font-bold">
                      Location:
                    </p>
                    <p className="max-w-[420px] text-sm text-[#555] md:text-lg">
                      No. 7, Halgevadarahalli, BEML Complex Road, Rajarajeshwari
                      Nagar, Bangalore – 560098, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="w-full rounded bg-[#0E1524] p-6 shadow-lg md:p-8">
              <h3 className="text-xl font-bold text-white">Leave A Message</h3>

              <p className="mt-1 text-sm text-gray-300">
                Tell us what you need, and we’ll be in touch soon.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full rounded border border-gray-600 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-[#0568A4]"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full rounded border border-gray-600 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-[#0568A4]"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full rounded border border-gray-600 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-[#0568A4]"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="w-full rounded border border-gray-600 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-[#0568A4]"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <textarea
                    rows="4"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for..."
                    className="w-full rounded border border-gray-600 bg-transparent px-4 py-3 text-sm text-white outline-none focus:border-[#0568A4]"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded bg-[#008232] py-3 text-sm font-semibold text-white transition hover:bg-[#006c29]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="h-[300px] w-full">
          <iframe
            title="Mishra Enterprises Location"
            src="https://www.google.com/maps?ll=12.920497,77.514842&z=10&t=m&hl=en-IN&gl=US&mapclient=embed&cid=3364320831870498227&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
