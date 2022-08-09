import classNames from 'classnames';
import Link from 'next/link';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';

interface AppbarProps {
  children?: React.ReactNode;
  className?: string;
}

const Appbar: React.FC<AppbarProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        'appbar z-50 flex justify-between items-center py-6 px-10 lg:px-20',
        className
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
    </div>
  );
};

export default Appbar;
