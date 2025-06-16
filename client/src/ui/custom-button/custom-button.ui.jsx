'use client';
import clsx from 'clsx';
import { baseButton, variants } from './custom-button.styles';

const CustomButton = ({ children, variant = 'default', className, ...props }) => {
  return (
    <button
      className={clsx(
        baseButton,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
