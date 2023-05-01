import Links from '@/components/Link';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeaderNav = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between my-3 h-[50px] w-full">
        <div className="">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/frog_face.svg"
              alt="frog"
              width={60}
              height={60}
            />
            <h1 className="font-pixel text-[40px] text-[#0F1B0D] capitalize">frog coin</h1>
          </Link>
        </div>
        <nav className="flex gap-4 ">
          <Links url={'/'} label="About us" />
          <Links url={'/'} label="Tokenomics" />
          <Links url={'/'} label="Presale" />
          <Links url={'/'} label="Roadmap" />
          <Links url={'/'} label="Swap/Farm" />
          <Links url={'/'} label="Contact us" />
        </nav>
      </div>
    </>
  );
};

export default HeaderNav;
