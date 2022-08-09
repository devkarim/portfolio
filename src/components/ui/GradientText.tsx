import classNames from 'classnames';

interface GradientTextProps {
  children?: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ className, children }) => {
  return (
    <p className={classNames('text-transparent bg-clip-text', className)}>
      {children}
    </p>
  );
};

export default GradientText;
