import React from "react";

const Banner = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h  -full object-cover"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      
      <div className="absolute inset-0 opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-1 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary">
          Create Lasting Memories
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-md text-secondary">
          At MEMORABLE, we believe that every journey is a story waiting to be
          told. Explore extraordinary destinations and create unforgettable
          moments that will last a lifetime.
        </p>
      </div>
    </div>
  );
};

export default Banner;
