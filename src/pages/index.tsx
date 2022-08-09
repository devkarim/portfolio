import type { NextPage } from 'next';
import Image from 'next/image';
import Appbar from '../components/guest/Appbar';
import Button from '../components/ui/Button';
import GradientText from '../components/ui/GradientText';

const Home: NextPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute hidden lg:block">
        <Image src="/svg/left-blobs.svg" width={120} height={120} />
      </div>
      <Appbar className="lg:pl-28" />
      <div className="grid justify-center lg:grid-cols-2 lg:grid-flow-col py-6 lg:px-20 items-center h-full">
        <div>
          <div className="flex text-center lg:text-start">
            <div className="w-1 bg-primary mr-6 hidden lg:block" />
            <div>
              <h1 className="text-6xl md:text-7xl font-bold mb-4">I make</h1>
              <GradientText className="text-7xl md:text-9xl font-oleo bg-gradient-to-r from-primary to-secondary">
                Websites
              </GradientText>
            </div>
          </div>
          <Button className="lg:ml-8 mt-4 w-[100%] lg:w-36 h-10 text-xl">
            Let's Talk
          </Button>
        </div>
        <div className="hidden lg:block h-full relative">
          <Image src="/svg/spacecraft.svg" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className="absolute top-0 right-0 hidden lg:block w-20 h-full">
        <Image src="/svg/right-waves.svg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Home;
