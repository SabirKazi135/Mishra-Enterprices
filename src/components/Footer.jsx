import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#0A6AA1] text-white">
      {/* TOP SECTION */}
      <div className="mx-auto grid w-full grid-cols-1 gap-10 px-6 py-12 md:grid-cols-4 md:px-12">
        {/* BRAND */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Mishraenterprises</h2>
          <p className="text-sm leading-relaxed">
            Smart, eco packaging built to protect and impress.
          </p>

          <div className="hidden space-y-1 text-sm md:block">
            <p>
              <span className="font-semibold">Phone:</span>{' '}
              <a
                href="tel:08049894644"
                className="transition-colors hover:underline"
              >
                080-49894644
              </a>
              ,{' '}
              <a
                href="tel:+918884607600"
                className="transition-colors hover:underline"
              >
                +91-8884607600
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a
                href="mailto:info@mishraenterprises.in"
                className="transition-colors hover:underline"
              >
                info@mishraenterprises.in
              </a>
            </p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="transition-colors hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="transition-colors hover:underline"
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition-colors hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:underline">
                Contact us
              </Link>
            </li>
            <li>
              <Link to="/faq" className="transition-colors hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/products/pouch"
                className="transition-colors hover:underline"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/products/pouch"
                className="transition-colors hover:underline"
              >
                Pouches
              </Link>
            </li>
            <li>
              <Link
                to="/products/range"
                className="transition-colors hover:underline"
              >
                Range of Products
              </Link>
            </li>
            <li>
              <Link
                to="/products/foil"
                className="transition-colors hover:underline"
              >
                Aluminum Foil Roll
              </Link>
            </li>
            <li>
              <Link
                to="/products/raw"
                className="transition-colors hover:underline"
              >
                Raw Material
              </Link>
            </li>
            <li>
              <Link
                to="/products/containers"
                className="transition-colors hover:underline"
              >
                Plastic Containers
              </Link>
            </li>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Address</h3>
          <p className="text-sm leading-relaxed">
            No. 7, Halgevadarahalli, BEML Complex Road, Rajarajeshwari Nagar,
            Bangalore – 560098, Karnataka, India
          </p>
        </div>

        <div className="space-y-1 text-sm md:hidden">
          <h3 className="mb-4 text-lg font-semibold">Reach Us:</h3>
          <p>
            <span className="font-semibold">Phone:</span>{' '}
            <a
              href="tel:08049894644"
              className="transition-colors hover:underline"
            >
              080-49894644
            </a>
            ,{' '}
            <a
              href="tel:+918884607600"
              className="transition-colors hover:underline"
            >
              +91-8884607600
            </a>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <a
              href="mailto:info@mishraenterprises.in"
              className="transition-colors hover:underline"
            >
              info@mishraenterprises.in
            </a>
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#070A4A] px-6 py-4 text-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-center md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold">mishraenterprises</span>. All rights
            reserved.
          </p>
          <p>
            Designed and Developed By{' '}
            <span className="font-semibold text-[#2ED47A]">
              Evon IT Solution
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
