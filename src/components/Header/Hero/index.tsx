import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-center mt-5 h-[65vh] md:h-fit">
          <div className="max-w-[600px] font-pixel uppercase text-center">
            <h1 className="text-[45px] px-5 md:text-[60px]">
              Welcome to <span className="text-green">FrogCoin,</span> The Hub
              for all Things <span className="text-green">Froggy!</span>
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
