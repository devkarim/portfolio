import type { NextPage } from 'next';

import Image from 'next/image';

import { __dev__ } from '../config/constants';
import IntroductionSection from '../components/guest/IntroductionSection';

const LeftBlobs = () => (
  <Image src="/svg/left-blobs.svg" width={100} height={100} />
);

const Home: NextPage = () => {
  return (
    <div>
      <div className="absolute hidden lg:block">
        <LeftBlobs />
      </div>
      <IntroductionSection />
      {/* <Copyright /> */}
    </div>
  );
};

export default Home;
