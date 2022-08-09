import classNames from 'classnames';
import Link from 'next/link';
import { APP_NAME } from '../config/constants';
import GradientText from './ui/GradientText';

interface CopyrightProps {
  className?: string;
}

const Copyright: React.FC<CopyrightProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        'text-base p-4 text-center flex justify-center tracking-wide text-[#818181] dark:text-[#e9e9e9]',
        className
      )}
    >
      <p>
        Made with <span className="text-primary">❤️</span> by{' '}
        <GradientText className="font-pacifico inline bg-gradient-to-r from-primary to-secondary">
          <Link href="https://github.com/devkarim" target="_blank">
            devkarim
          </Link>
        </GradientText>
      </p>
      <p className="mx-1">|</p>
      <Link href="https://github.com/devkarim/portfolio" target="_blank">
        GitHub Repo
      </Link>
    </div>
  );
};

export default Copyright;
