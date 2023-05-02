import ImageCard from '@/components/Card/ImageCard';
import Card from '@/components/Card/ListCard';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frog Nation</title>
      </Head>
      <section className=" bg-[#E9FFFF] md:h-[730px]s">
        <div className="bg-particle-bg bg-cover w-full px-5 md:px-0 py-10 md:w-full">
          <div className="container  md:mx-auto md:w-[1100px]">
            <h1 className="font-pixel text-[50px] md:text-[40px] mb-10 md:mb-0 font-[600] ">
              Features
            </h1>
            <div className="flex flex-col md:flex-row w-full items-center text-center justify-center gap-8">
              <div className=" md:w-[25%] md:flex justify-end">
                <div className="flex w-full md:w-[300px] flex-col relative bg-[#7DD6F3] justify-start text-left rounded-md p-5 leading-7 shadow-md">
                  <h1 className="font-pixel text-[40px]">Frog Coin</h1>
                  <p className="font-montserrat text-base leading-7 my-4">
                    How does it work? Its simple! You can earn FrogCoins by
                    participating in frog-related activities on our website
                  </p>
                  <button
                    type="button"
                    className="w-fit font-pixel text-[20px] text-green "
                  >
                    Buy now
                  </button>
                  <Image
                    src="/images/coin.svg"
                    width={130}
                    height={50}
                    alt="frog"
                    className="absolute right-8 -top-[60px]"
                  />
                </div>
              </div>
              <div className="flex flex-col text-center items-center  md:w-[30%] justify-center gap-10">
                <div className="flex w-full md:w-[300px] flex-col relative bg-[#7DD6F3] justify-start text-left rounded-md p-5 leading-7 shadow-md">
                  <h1 className="font-pixel text-[40px]">BABY Frog Coin</h1>
                  <p className="font-montserrat text-base leading-7 my-4">
                    How does it work? Its simple! You can earn FrogCoins by
                    participating in frog-related activities on our website
                  </p>
                  <button
                    type="button"
                    className="w-fit font-pixel text-[20px]"
                  >
                    coming soon
                  </button>
                  <Image
                    src="/images/frong.svg"
                    width={130}
                    height={50}
                    alt="frog"
                    className="absolute right-2 -top-[80px]"
                  />
                </div>
                <div className="flex w-full md:w-[300px] flex-col relative bg-[#7DD6F3] justify-start text-left rounded-md p-5 leading-7 shadow-md md:my-10">
                  <h1 className="font-pixel text-[40px]">Frog NFT</h1>
                  <p className="font-montserrat text-base leading-7 my-4">
                    How does it work? Its simple! You can earn FrogCoins by
                    participating in frog-related activities on our website
                  </p>
                  <button
                    type="button"
                    className="w-fit font-pixel text-[20px] text-green "
                  >
                    Buy now
                  </button>
                  <Image
                    src="/images/glass.svg"
                    width={130}
                    height={50}
                    alt="frog"
                    className="absolute right-0 -top-[30px]"
                  />
                </div>
              </div>
              <div className="right md:w-[25%]">
                <div className="flex w-full md:w-[300px] flex-col relative bg-[#7DD6F3] text-left rounded-md p-5 leading-7 shadow-md">
                  <h1 className="font-pixel text-[40px]">Baby frog card</h1>
                  <p className="font-montserrat text-base leading-7 my-4">
                    How does it work? Its simple! You can earn FrogCoins by
                    participating in frog-related activities on our website
                  </p>
                  <button
                    type="button"
                    className="w-fit font-pixel text-[20px]"
                  >
                    Coming soon
                  </button>
                  <Image
                    src="/images/card.svg"
                    width={200}
                    height={50}
                    alt="frog"
                    className="absolute right-0 md:-right-10 -top-[105px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:flex w-full items-center bg-blue-bg flex-col relative">
        <div className="flex h-screen md:mb-[165px]">
          <div className="p-5 md:container md:mx-auto md:w-[1000px] md:flex md:gap-6 md:items-center">
            <div className="flex-1 md:w-[60%]">
              <h1 className="font-pixel text-[60px]">About frog coin</h1>
              <p className="leading-6 md:leading-10 font-montserrat text-[14px] md:text-[16px]">
                Frog coin is a funny and entertainment coin (🤣🤣 to ugly
                beautiful frog 🐸) I bet you wont want me to tease you with a
                frog meme. Its a peer to peer digital currency , favored by{' '}
                <b>Dogecoin</b>.
              </p>
              <p className="leading-6 md:leading-10 font-montserrat text-[14px] md:text-[16px]">
                deflationary token designed to become more scarce over time. All
                holders of Frog coin will earn more baby Frog and frog coin that
                is automatically sent to your wallet by simply holding Frog and
                bay frog  coins in your wallet. Watch the amount of frog and 
                baby Frog gow in your wallet.
              </p>
            </div>
            <div className="hidden h-[300px] w-[40%]">
              <Image
                src="/images/particles.png"
                width={500}
                height={200}
                alt="particle"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full bg-[url('/images/bg_bottom.png')] h-[400px] absolute bottom-0 bg-no-repeat bg-cover"></div>
      </section>
      <section className="flex flex-col w-full bg-[#E9FFFF] pb-20">
        <div className="container mx-auto py-10 px-5 md:px-0">
          <h1 className="font-pixel text-[50px] mb-10">Roadmap</h1>
          <div className="w-full grid grid-cols-1 gap-y-[80px] md:grid-cols-4 md:gap-y-0 md:gap-4">
            <Card title="Phase 1">
              <ul className="list-disc font-montserrat text-[16px]">
                <li>Presales</li>
                <li>Launch</li>
                <li>CoinGecko/Coin marketcap Listins</li>
                <li>10,000+ Holders</li>
                <li>Get $FROG Trending on twitter with our memetic power</li>
              </ul>
            </Card>
            <Card title="Phase 2">
              <ul className="list-disc font-montserrat text-[16px]">
                <li>Community Partnerships #PEPE</li>
                <li>
                  Formation of token gated discord group, FROG Palace for
                  holders.
                </li>
                <li>CEX Listing</li>
              </ul>
            </Card>
            <Card title="Phase 3">
              <ul className="list-disc font-montserrat text-[16px]">
                <li>Frog Video making and sharing apps</li>
                <li>Frog games</li>
                <li>Frog gated concerts and events.</li>
              </ul>
            </Card>
            <Card title="Phase 4">
              <ul className="list-disc font-montserrat text-[16px]">
                <li>Tire one exchange listing</li>
              </ul>
            </Card>
          </div>
        </div>
        <div className="container mx-auto py-10 px-5 md:px-0">
          <h1 className="font-pixel text-[50px] ml-3 mb-5">Utility/Products</h1>
          <div className="w-full grid grid-cols-1 gap-2 md:grid-cols-3">
            <ImageCard
              title="Frog swags"
              text="Purchase from our wide range of froggy merchandise and rock the frog
            style"
              image="/images/bg1.png"
            />
            <ImageCard
              title="Frog games"
              text="Launching of top video Game platform, for earning frog coins."
              image="/images/bg2.png"
            />
            <ImageCard
              title="Frog games"
              text="Purchase from our wide range of froggy merchandise and rock the frog
            style"
              image="/images/bg1.png"
            />
          </div>
        </div>
      </section>
    </>
  );
}
