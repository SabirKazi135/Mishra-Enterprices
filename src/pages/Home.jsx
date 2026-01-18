import mainImg from '../assets/images/Main.png';
import bgimg from '../assets/images/bgimg.png';
import ProgressRing from '../components/ProgressRing';
import allstate from '../assets/images/allstate.jpg';
import airproducts from '../assets/images/airproducts.png';
import americanwater from '../assets/images/americanwater.png';
import copy from '../assets/images/copy.jpg';
import cups from '../assets/images/cups.jpg';
import ProductSection from '../components/ProductSection';
import InfoSection from '../components/InfoSection';

import quadStylePouch from '../assets/images/Quad Style Pouch.png';
import layFlatPouch from '../assets/images/Lay-Flat Pouch.png';
import shapedPouch from '../assets/images/Shaped Pouch.png';
import standUpPouches from '../assets/images/Stand-Up Pouches.png';
import bambooCone from '../assets/images/bamboo-cone.jpg';
import bioPlate11Inch4Compartment from '../assets/images/bio-plate-11-inch-4-compartment.png';
import chamChamAluminiumFoilContainer from '../assets/images/cham-cham-aluminium-foil-container.png';
import steelImg from '../assets/images/steelImg.png';
import customizableCardboardBoxHandle from '../assets/images/customizable-cardboard-box-handle.jpg';
import foil750ml from '../assets/images/foil-750ml.png';
import foilCham from '../assets/images/foil-cham.png';
import foilCup from '../assets/images/foil-cup.png';
import foilGlass from '../assets/images/foil-glass.png';

import aluminiumFoils from '../assets/images/aluminium-foils.jpg';
import bopaFilms from '../assets/images/bopa-films.jpg';
import thermalLaminationFilms from '../assets/images/thermal-lamination-films.jpg';
import cppFilms from '../assets/images/cpp-films.jpg';

import sweetBoxHalfKg from '../assets/images/sweet-box-500g.jpg';
import container1000ml from '../assets/images/container-1000ml.jpg';
import hingedBox1000ml from '../assets/images/hinged-box-1000ml.jpg';
import rectangleContainer1000ml from '../assets/images/rectangle-container-1000ml.jpg';
import juice from '../assets/images/juice.jpeg';
import group from '../assets/images/Group.png';
import whatsapp from '../assets/images/WhatsApp-Image.jpeg';
import whatsapp1 from '../assets/images/WhatsApp1.jpeg';
import cups2 from '../assets/images/cups2.png';

import future from '../assets/images/future.png';
import future1 from '../assets/images/future-1.png';
import benefits from '../assets/images/benefits.png';
import greenenergy from '../assets/images/green-energy.png';
import bg2 from '../assets/images/bg2.png';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';

const Arrow = () => (
  <span className="text-[#138A40]">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M18 6H9M18 6V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

function Home() {
  const items = [
    'Sustainable Innovation',
    'Quality Excellence',
    'Brand Empowerment',
    'Efficiency & Reliability',
    'Design Versatility',
    'Customer-Centric Approach',
  ];

  const items2 = [
    'Budget-Friendly Choices',
    'Premium Collection',
    'Versatile Solutions',
    'Mid-Range Selections',
    'Industry-Specific Options',
    'Quality You Can Trust',
  ];

  const products = [
    { img: standUpPouches, title: 'Stand-Up Pouches' },
    { img: quadStylePouch, title: 'Quad Style Pouch' },
    { img: layFlatPouch, title: 'Lay-Flat Pouch' },
    { img: shapedPouch, title: 'Shaped Pouch' },
  ];

  const products2 = [
    {
      img: bioPlate11Inch4Compartment,
      title: '11″ 4 Compartment Bio Plate',
    },
    {
      img: customizableCardboardBoxHandle,
      title: 'Customizable Cardboard Box with Handle',
    },
    {
      img: chamChamAluminiumFoilContainer,
      title: 'Cham Cham Aluminium Foil Container',
    },
    {
      img: bambooCone,
      title: 'Bamboo Cone',
    },
  ];

  const products3 = {
    title: 'Explore Aluminium Foil Roll',
    subtitle: 'Premium aluminium foil rolls for everyday use.',
    products: [
      { img: foilCham, title: 'Cham Cham Aluminium Foil Container' },
      { img: foilCup, title: 'Aluminium Foil Baking Cups' },
      { img: foilGlass, title: 'Aluminium Foil Glass' },
      { img: foil750ml, title: '750ml Aluminium Foil Container' },
    ],
  };

  const aluminiumFoilData = {
    title: 'Premium Aluminium Foil Rolls Designed for Every Purpose',
    description:
      'From kitchen use to industrial applications, our aluminium foil rolls deliver unmatched protection and reliability. Crafted with superior-grade material, they ensure freshness, heat resistance, and durability for packing, wrapping, and storage needs. Whether you’re a household, restaurant, or manufacturing brand.',
    items: [
      'Heat-Resistant & Durable',
      'Versatile Applications',
      'Tear-Resistant Quality',
      'Food-Safe & Hygienic',
      'Eco-Friendly & Recyclable',
      'Trusted by Businesses',
    ],
    image: steelImg,
    imageAlt: 'Premium aluminium foil rolls',
    imagePosition: 'right',
  };
  const infoSection3 = {
    title: 'Premium Raw Materials for Uncompromised Quality',
    description:
      'Engineered to meet diverse manufacturing needs, our raw materials deliver consistent performance, reliability, and sustainability. Sourced from trusted suppliers and crafted to industry standards, they provide strength, stability, and improved production efficiency—ensuring dependable results across packaging, industrial, and consumer applications.',
    items: [
      'High-Purity & Quality',
      'Strong Grade Performance',
      'Reliable & Stable Supply',
      'Sustainable Material Options',
      'Versatile Across Applications',
      'Trusted by Industries',
    ],
    image: cups,
    imageAlt: 'Premium raw materials',
    imagePosition: 'left',
  };

  const products4 = {
    title: 'Explore Raw Materials',
    subtitle:
      'Discover premium raw materials crafted for quality production needs.',
    products: [
      {
        img: aluminiumFoils,
        title: 'Aluminium Foils',
      },
      {
        img: bopaFilms,
        title: 'BOPA Films',
      },
      {
        img: thermalLaminationFilms,
        title: 'Thermal Lamination Films',
      },
      {
        img: cppFilms,
        title: 'CPP Films',
      },
    ],
  };

  const products5 = {
    title: 'Explore Plastic Containers',
    subtitle:
      'Durable plastic containers designed for safe storage and transport.',
    products: [
      {
        img: sweetBoxHalfKg,
        title: '1/2 KG Sweet Box',
      },
      {
        img: container1000ml,
        title: '1000ml Container',
      },
      {
        img: hingedBox1000ml,
        title: '1000ml Hinged Box',
      },
      {
        img: rectangleContainer1000ml,
        title: '1000ml N1 Rectangle Container',
      },
    ],
  };

  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-poppins">
      <section
        className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-gray-900 bg-cover bg-center bg-no-repeat px-[20px] py-[50px] md:flex-row md:justify-center"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <div className="md:w-[800px]">
          <img
            src={mainImg}
            alt="Innovative packaging solutions"
            className="h-[400px] w-[261px] md:m-auto"
            loading="eager"
          />
        </div>
        <div className="text-white md:-ml-[50px] md:w-[1000px] md:space-y-7">
          <h2 className="text-3xl font-bold md:text-[50px] md:leading-[50px]">
            Innovative Packaging That Elevates Your Brand
          </h2>
          <p className="mb-[14px] box-border md:text-[18px]">
            Smart, stylish, and sustainable — our packaging combines innovation
            with artistry to reflect your brand’s values. Each design is made to
            inspire, protect, and impress. Let your packaging speak for your
            brand before words ever do.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-12 cursor-pointer items-center rounded-[5px] bg-[#0568A4] px-[15px] py-[10px] text-center font-medium leading-4 transition-colors hover:bg-[#045a8c] hover:text-white md:px-[15px] md:py-[14px] md:text-xl md:leading-[20px]"
          >
            Connect with Us <span className="mr-1 text-2xl">→</span>
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-1 items-center gap-10 bg-white py-12 md:h-[300px] md:grid-cols-2">
        <div className="mx-auto grid max-w-6xl grid-cols-2 justify-between gap-10 px-4 text-center md:grid-cols-3">
          <ProgressRing percent={95} label="Quality" />

          <ProgressRing percent={93} label="Sustainable" />

          <div className="col-span-2 flex justify-center md:col-span-1">
            <ProgressRing percent={92} label="Design" />
          </div>
        </div>

        <div className="flex flex-col gap-3 md:gap-6">
          <h2 className="ml-5 text-3xl font-bold text-[#363636] md:ml-0 md:text-4xl">
            Group and Client
          </h2>

          <div className="carousel">
            <div className="track">
              <div className="group">
                <img
                  src={allstate}
                  alt="Allstate"
                  className="card flex-shrink-0 md:flex-1"
                />
                <img
                  src={airproducts}
                  alt="Air Products"
                  className="card flex-shrink-0 md:flex-1"
                />
                <img
                  src={americanwater}
                  alt="American Water"
                  className="card flex-shrink-0 md:flex-1"
                />
              </div>

              <div className="group" aria-hidden>
                <img
                  src={allstate}
                  alt=""
                  className="card flex-shrink-0 md:flex-1"
                />
                <img
                  src={airproducts}
                  alt=""
                  className="card flex-shrink-0 md:flex-1"
                />
                <img
                  src={americanwater}
                  alt=""
                  className="card flex-shrink-0 md:flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <InfoSection
        title="Complete Packaging Solutions Tailored for Your Brand"
        description="From concept to creation, we craft packaging that reflects your brand’s identity and values, combining functionality, sustainability, and visual appeal to deliver solutions that elevate your brand and captivate your customers."
        items={items}
        image={copy}
        imageAlt="Packaging solutions"
        imagePosition="right"
      />
      <ProductSection
        title="Our Pouch Products"
        subtitle="Enhance Your Brand with Exceptional Packaging"
        products={products}
      />

      <InfoSection
        title="Explore by Range Find the Perfect Fit for Every Need"
        description="Discover products thoughtfully categorized to match every requirement and budget. Whether you’re looking for premium options, economical choices, or balanced mid-range solutions, our collections ensure you get the best value without compromising on quality. Navigate through simplified categories to make selection effortless and support smarter decision-making.
"
        items={items2}
        image={cups}
        imageAlt="Packaging solutions"
        imagePosition="left"
      />

      <ProductSection
        title="Explore by Range"
        subtitle="Select products based on range"
        products={products2}
      />

      <InfoSection {...aluminiumFoilData} />
      <ProductSection {...products3} />

      <InfoSection {...infoSection3} />

      <ProductSection {...products4} />
      <ProductSection {...products5} />

      <section>
        <div className="w-full p-[10px] text-center">
          <h2 className="text-[36px] font-bold">Printing and Customisation</h2>

          <h2 className="text-[27px] font-bold text-[#757575]">
            Plastic and paper
          </h2>
        </div>

        <div className="grid grid-cols-1 justify-around gap-2 p-2 md:grid-cols-4">
          <img src={juice} alt="" className="h-[300px] w-full" />
          <img src={group} alt="" className="h-[300px] w-full" />
          <img src={whatsapp} alt="" className="h-[300px] w-full" />
          <img src={whatsapp1} alt="" className="h-[300px] w-full" />
        </div>
        <div className="mt-6 flex justify-center gap-10">
          <button className="flex h-[36px] cursor-pointer items-center justify-end rounded-[5px] bg-[#0568a4] px-10 text-[20px] text-white transition hover:text-[#B9B9B9] md:h-[48px] md:px-[30px] md:py-[14px]">
            Images
          </button>
          <button className="mb-6 flex h-[36px] cursor-pointer items-center justify-end rounded-[5px] bg-[#0568a4] px-10 text-[20px] text-white transition hover:text-[#B9B9B9] md:h-[48px] md:px-[30px] md:py-[14px]">
            Videos
          </button>
        </div>
      </section>

      <section className="bg-[#0E1524] px-[20px] py-[40px] text-white md:px-[70px] md:py-[50px]">
        <h2 className="mb-8 text-center text-[30px] font-bold">
          Our Streamlined Packing Process
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-[18px] text-[#0568a4]">Step 1</p>
            <p className="text-[22px] font-semibold">
              Select Your Packaging Style
            </p>
            <p className="text-[16px] font-light">
              Explore a variety of packaging options customized to suit your
              brand’s identity and product requirements.
            </p>
          </div>

          <div>
            <p className="text-[18px] text-[#0568a4]">Step 2</p>
            <p className="text-[22px] font-semibold">
              Production & Quality Check
            </p>
            <p className="text-[16px] font-light">
              Our expert team begins the production process with precision and
              attention to detail.
            </p>
          </div>

          <div>
            <p className="text-[18px] text-[#0568a4]">Step 3</p>
            <p className="text-[22px] font-semibold">
              Packaging Ready for Delivery
            </p>
            <p className="text-[16px] font-light">
              Once completed, your packaging is securely packed and ready to
              ship.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 md:p-[50px]">
        <div ref={containerRef} className="relative mb-5 overflow-hidden p-4">
          <img
            src={cups2}
            alt=""
            className="mx-auto h-[500px] w-[509px] max-w-full md:h-[829px] md:w-[579px]"
          />

          <div
            className={`absolute bottom-8 left-5 z-10 h-[190px] w-[435px] max-w-[80%] space-y-2 bg-[#0E1524] p-5 text-white transition-transform duration-700 ease-out md:ml-[52px] md:h-[332px] md:w-[445px] md:px-[50px] md:py-[60px] ${visible ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <h2 className="text-[20px] font-semibold leading-[26px] md:text-[26px]">
              Your Trusted Partner in Quality Packaging
            </h2>
            <p className="text-[14px] font-light md:text-lg">
              We specialize in designing and producing premium packaging that
              combines strength, style, and sustainability to make your products
              shines.
            </p>
            <button className="text-base font-medium text-[#0568a4] hover:text-[#80858F] md:text-lg">
              View All
            </button>
          </div>
        </div>

        <div className="flex h-full items-center justify-center p-4 md:ml-5 md:space-y-1 md:p-0">
          <div className="">
            <h2 className="text-[20px] font-bold text-[#0568a4] md:text-[26px]">
              Why Us
            </h2>
            <h2 className="mt-1 text-[30px] font-bold leading-[34px] text-[#363636] md:text-[36px]">
              Innovating for a Sustainable Smart Packaging
            </h2>
            <p className="mb-[14px] mt-1 font-light text-[#363636] md:text-lg">
              We’re redefining packaging by merging innovation with
              sustainability. Our smart packaging solutions are designed to
              minimize environmental impact while enhancing functionality,
              efficiency, and brand appeal. Using advanced materials and
              intelligent design, we create eco-friendly packaging that not only
              protects your products but also reflects a commitment to a
              smarter, greener future.
            </p>
            <div className="mt-5 space-y-2">
              <div>
                <div className="flex items-start gap-3">
                  <div className="w-[112px] shrink-0">
                    <img src={future} alt="" className="h-[60px] w-[60px]" />
                  </div>
                  <h2 className="text-[24px] font-bold text-[#363636]">
                    Redefining the Future of Packaging
                  </h2>
                </div>
                <p className="mt-2 text-lg">
                  We combine creativity, technology, and sustainability to
                  design packaging solutions that inspire and perform beyond
                  expectations.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <div className="w-[112px] shrink-0">
                    <img src={future1} alt="" className="h-[60px] w-[60px]" />
                  </div>
                  <h2 className="text-[24px] font-bold text-[#363636]">
                    Driving Excellence Through Design
                  </h2>
                </div>
                <p className="mt-2 text-lg">
                  Our approach blends innovation with precision, ensuring every
                  package reflects quality, efficiency, and brand value.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <div className="w-[112px] shrink-0">
                    <img src={benefits} alt="" className="h-[60px] w-[60px]" />
                  </div>
                  <h2 className="text-[24px] font-bold text-[#363636]">
                    Transforming Ideas Into Smart Packaging
                  </h2>
                </div>
                <p className="mt-2 text-lg">
                  From concept to creation, we turn packaging visions into
                  reality — innovative, functional, and ready for the future.
                </p>
              </div>

              <div>
                <div className="flex items-start gap-3">
                  <div className="w-[112px] shrink-0">
                    <img
                      src={greenenergy}
                      alt=""
                      className="h-[60px] w-[60px]"
                    />
                  </div>
                  <h2 className="text-[24px] font-bold text-[#363636]">
                    Innovating for a Sustainable Tomorrow
                  </h2>
                </div>
                <p className="mt-2 text-lg">
                  We’re pushing the boundaries of packaging with eco-friendly
                  materials and cutting-edge designs that protect both products
                  and the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="grid min-h-[600px] grid-cols-1 px-6 py-10 md:grid-cols-2 md:px-[80px] md:py-[50px]"
        style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover' }}
      >
        {/* LEFT CONTENT */}
        <div className="flex items-center">
          <div className="">
            <p className="text-[20px] font-semibold text-[#0568A4] md:text-[26px] md:font-bold md:leading-[26px]">
              Testimonials
            </p>

            <h2 className="mt-2 text-[30px] font-bold leading-[30px] text-white md:text-[40px] md:leading-[40px]">
              What Our Clients Say
            </h2>

            <p className="mt-4 text-base text-white">
              We take pride in building lasting partnerships. Here’s what our
              clients have to say about our quality, creativity, and commitment
              to excellence in every packaging solution we deliver.
            </p>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="mt-8 flex items-center md:mt-0">
          <div className="w-full bg-[#0E1524]">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
