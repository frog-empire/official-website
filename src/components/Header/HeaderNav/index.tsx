import Links from '@/components/Link';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeaderNav = () => {
  return (
    <>
      <div className="flex justify-between items-center container w-[1000px] mx-auto h-[50px] my-3">
        <div>
          <Link href="/" className="flex items-center gap-2 px-5 md:px-0">
            <Image
              src="/images/frog_face.svg"
              alt="frog"
              width={60}
              height={60}
            />
            <h1 className="font-pixel text-[40px] text-[#0F1B0D]">Frog Coin</h1>
          </Link>
        </div>
        <nav className="hidden md:flex gap-4 ">
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
