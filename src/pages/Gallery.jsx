import React from 'react';
import Footer from '../components/Footer';

function Gallery() {
  // Load all images from folder
  const images = import.meta.glob(
    '../assets/images/Gallery/*.{png,jpg,jpeg,webp}',
    { eager: true },
  );

  // Convert object to array of image paths
  const imageList = Object.values(images).map((img) => img.default);

  return (
    <div className="font-outfit">
      <div className="mx-auto mb-10 min-h-screen w-full py-8">
        <h1 className="mb-6 text-center text-[27px] font-bold md:text-[40px]">
          Printing and Customisation
        </h1>

        <div className="grid w-full grid-cols-2 place-items-center items-center justify-center gap-8 md:grid-cols-4">
          {imageList.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="h-[210px] w-[180px] md:h-[260px] md:w-[420px]"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
