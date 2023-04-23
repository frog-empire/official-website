import Image from 'next/image';
import React from 'react';

interface CardInterface {
  title: string;
  children: any;
}
const Card = ({ title, children }: CardInterface) => {
  return (
    <>
      <div className="px-10 py-5 bg-[#C2F3FC] shadow-lg rounded-[8px] leading-8 relative h-fit">
        <h1 className="font-pixel text-[40px] pb-2 text-right mr-5 text-green">
          {title}
        </h1>
        {children}
        <div className="p-5 flex items-center justify-center bg-[#59BBEB] rounded-[50%] w-[80px] h-[80px] absolute left-0 -top-10">
          <Image
            src="/images/frog_face.svg"
            width={60}
            height={50}
            alt="frog"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
