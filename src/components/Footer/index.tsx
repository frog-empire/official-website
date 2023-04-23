import Image from 'next/image';
import React from 'react';
import Links from '../Link';
import Link from 'next/link';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <>
      <div className="flex flex-col bg-[#80D2E5] w-full pt-10">
        <div className="flex flex-col container mx-auto justify-center items-center text-center w-full ">
          <div className="flex items-center gap-3">
            <Image
              src="/images/frog_face.svg"
              width={100}
              height={100}
              alt="frog"
            />
            <h1 className="font-pixel text-[50px]">Frog coin</h1>
          </div>
          <div className="flex gap-4 py-8">
            <Links url={'/'} label="About us" />
            <Links url={'/'} label="Tokenomics" />
            <Links url={'/'} label="Presale" />
            <Links url={'/'} label="Roadmap" />
            <Links url={'/'} label="Swap/Farm" />
            <Links url={'/'} label="Contact us" />
          </div>
        </div>
        <div className="flex w-full justify-between gap-8 items-center">
          <Image
            src="/images/left.png"
            width={200}
            height={10}
            alt="left"
            className="w-full"
          />
          <div className="flex gap-3 text-white">
            <Link href="/">
              <FiFacebook />
            </Link>
            <Link href="/">
              <FiTwitter />
            </Link>
            <Link href="/">
              <FiLinkedin />
            </Link>
            <Link href="/">
              <FiInstagram />
            </Link>
          </div>
          <Image
            src="/images/right.png"
            width={200}
            height={20}
            alt="left"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
