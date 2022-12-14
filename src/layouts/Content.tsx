import classNames from 'classnames';

interface ContentProps {
  full?: boolean;
  minfull?: boolean;
  center?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
  full,
  minfull,
  center,
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col py-6 px-12',
        {
          'min-h-screen': minfull,
          'h-screen': full,
          'justify-center items-center': center,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Content;
