import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';
import IconLink from '../ui/IconLink';
import { FaBars } from 'react-icons/fa';

interface AppbarProps {
  children?: React.ReactNode;
}

interface MobileNavbarProps {
  isNavbarExpanded: boolean;
  toggle: () => any;
}

const DesktopAppbar: React.FC<{}> = () => {
  return (
    <nav
      className={classNames(
        'appbar z-50 justify-between items-center py-6 px-10 lg:pl-24 lg:px-20 hidden sm:flex'
      )}
    >
      <GradientText className="text-4xl font-pacifico bg-gradient-to-r from-primary to-secondary">
        devkarim
      </GradientText>
      <div className="flex justify-between items-center space-x-8">
        <Link href="/services">Services</Link>
        <Link href="/work">Work</Link>
        <Link href="/reviews">Reviews</Link>
        <Button className="w-28 bg-gradient-to-r from-primary to-secondary">
          Contact
        </Button>
      </div>
    </nav>
  );
};

const MobileAppbar: React.FC<MobileNavbarProps> = ({
  isNavbarExpanded,
  toggle,
}) => {
  return (
    <div>
      <nav className="appbar z-50 justify-between items-center py-6 px-10 flex sm:hidden">
        <GradientText className="text-4xl font-pacifico bg-gradient-to-r from-primary to-secondary">
          devkarim
        </GradientText>
        <IconLink className="text-2xl" onClick={toggle}>
          <FaBars />
        </IconLink>
      </nav>

      {isNavbarExpanded && (
        <div className="flex flex-col text-xl font-medium mt-4 py-6 px-6 absolute w-full h-screen space-y-8 bg-dark dark:bg-appbar-dark md:hidden">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/reviews">Reviews</Link>
          <Button className="w-full bg-gradient-to-r from-primary to-secondary">
            Contact
          </Button>
        </div>
      )}
    </div>
  );
};

const Appbar: React.FC<AppbarProps> = ({}) => {
  const [isNavbarExpanded, setNavbarExpanded] = useState(false);

  useEffect(() => {
    if (isNavbarExpanded) {
      document.body.classList.add('!overflow-y-hidden', 'md:!overflow-y-auto');
    } else {
      document.body.classList.remove(
        '!overflow-y-hidden',
        'md:!overflow-y-auto'
      );
    }
  }, [isNavbarExpanded]);

  return (
    <div>
      <DesktopAppbar />
      <MobileAppbar
        isNavbarExpanded={isNavbarExpanded}
        toggle={() => setNavbarExpanded(!isNavbarExpanded)}
      />
    </div>
  );
};

export default Appbar;
