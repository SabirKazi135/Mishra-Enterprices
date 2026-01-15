import React from 'react';
import Footer from '../components/Footer';

function Videos() {
  // Load all videos from folder
  const videos = import.meta.glob('../assets/images/Videos/*.{mp4,webm,ogg}', {
    eager: true,
  });

  // Convert object to array of video paths
  const videoList = Object.values(videos).map((vid) => vid.default);

  return (
    <div className="font-outfit">
      <div className="mx-auto mb-10 min-h-screen w-full py-8">
        <h1 className="mb-6 text-center text-[27px] font-bold md:text-[40px]">
          Videos
        </h1>

        <div className="grid w-full grid-cols-1 place-items-center gap-8 md:grid-cols-2">
          {videoList.map((src, index) => (
            <div key={index} className="w-full max-w-[420px]">
              <video
                src={src}
                controls
                className="h-[210px] w-full md:h-[260px]"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Videos;
