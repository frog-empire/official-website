import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="container mx-auto w-full">
        <div className="flex items-center justify-center py-5">
          <div className="max-w-[600px] font-pixel uppercase text-center">
            <h1 className="text-[60px]">
              Welcome to <span className="text-green capitalize">frog nation</span>, the realm
              of all things <span className="text-green capitalize">froggy!</span>
            </h1>
            <div className="flex gap-2 text-center justify-center mt-4">
              <button
                type="button"
                className="btn bg-[#509136] text-white px-5 py-2 rounded-md"
              >
                Buy now
              </button>
              <button
                type="button"
                className="btn bg-[#0F1B0D] text-white px-5 py-2 rounded-md"
              >
                Swap FAc
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
