import classNames from 'classnames';
import Link from 'next/link';
import GradientText from './GradientText';

interface AuthorProps {
  className?: string;
  href?: string;
}

const Author: React.FC<AuthorProps> = ({
  className,
  href = 'https://github.com/devkarim',
}) => {
  return (
    <GradientText
      className={classNames(
        'font-pacifico inline bg-gradient-to-r from-primary to-secondary',
        className
      )}
    >
      <Link href={href} target="_blank">
        devkarim
      </Link>
    </GradientText>
  );
};

export default Author;
