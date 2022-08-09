import Typewriter from 'typewriter-effect';
import Image from 'next/image';

import Button from '../ui/Button';
import Spacecraft from './Spacecraft';
import { __dev__ } from '../../config/constants';
import Appbar from './Appbar';

interface IntroductionSectionProps {
  children?: React.ReactNode;
}

const TEXT_PAUSE = __dev__ ? 1000 : 2000;

const ServiceTypeWriter = () => (
  <Typewriter
    options={{
      loop: true,
      cursorClassName: 'ml-2 text-6xl text-primary',
      delay: 150,
      wrapperClassName:
        'text-center w-auto pl-2 text-transparent bg-clip-text text-7xl lg:text-8xl xl:text-10xl font-oleo bg-gradient-to-r from-primary to-secondary',
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString('Web')
        .pauseFor(TEXT_PAUSE)
        .deleteAll()
        .typeString('Desktop')
        .pauseFor(TEXT_PAUSE)
        .deleteAll()
        .typeString('Mobile')
        .pauseFor(TEXT_PAUSE)
        .deleteAll()
        .start();
    }}
  />
);

const RightWaves = () => (
  <Image src="/svg/right-waves.svg" layout="fill" objectFit="cover" />
);

const IntroductionSection: React.FC<IntroductionSectionProps> = ({}) => {
  return (
    <div className="flex flex-col h-screen">
      <Appbar />
      <div className="grid justify-center lg:grid-cols-2 lg:grid-flow-col py-6 lg:px-8 xl:px-16 items-center h-full">
        <div className="flex flex-col items-center lg:block">
          <div className="flex text-center lg:text-start">
            <div className="w-1 bg-primary mr-6 hidden lg:block" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                I make apps on
              </h1>
              <ServiceTypeWriter />
            </div>
          </div>
          <Button className="lg:ml-8 mt-12 w-64 lg:w-36 h-10 text-xl">
            Let's Talk
          </Button>
        </div>
        <div className="myspacecraft hidden lg:block h-full relative">
          <Spacecraft />
        </div>
      </div>
      <div className="absolute top-0 right-0 hidden xl:block w-20 h-full">
        <RightWaves />
      </div>
    </div>
  );
};

export default IntroductionSection;
