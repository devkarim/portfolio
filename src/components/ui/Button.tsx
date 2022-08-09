import classNames from 'classnames';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'solid' | 'outline';
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type,
  variant = 'solid',
  className,
  children,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={classNames(
        'px-4 py-1 transition colors opacity duration-300',
        {
          'bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-lg font-medium':
            variant == 'solid',
          'border-2 border-black hover:bg-black rounded-lg hover:text-white':
            variant == 'outline',
        },
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
