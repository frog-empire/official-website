import Image from 'next/image';
import React from 'react';

interface ImageCardInterface {
  title: string;
  image: string;
  text: string;
}
const ImageCard = ({ title, image, text }: ImageCardInterface) => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-pixel text-[35px] ml-3 capitalize">{title}</h1>
        <Image
          src={image}
          width={400}
          height={100}
          alt={title}
          className="w-full h-[240px]"
        />
        <div className="ml-3 pt-2">
          <p className="pb-3">{text}</p>
          <button
            type="button"
            className="w-fit bg-[#0F1B0D] text-white rounded-[5px] p-2 font-pixel text-[20px]"
          >
            Available soon
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
