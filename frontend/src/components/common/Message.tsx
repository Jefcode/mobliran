import { ReactNode } from 'react';

interface MessageProps {
  variant?: 'success' | 'info' | 'warning' | 'danger';
  className?: string;
  children?: ReactNode;
}

const Message = ({ variant = 'info', children, className }: MessageProps) => {
  let elementClass: string;

  switch (variant) {
    case 'info':
      elementClass =
        'w-full bg-black text-lg px-10 py-7 text-white flex items-center justify-between font-bold';
      break;

    case 'danger':
      elementClass =
        'w-full bg-[#D7BFBB] text-lg px-10 py-7 text-white flex items-center justify-between font-bold';
      break;

    default:
      elementClass =
        'w-full bg-[#8A957E] text-lg px-10 py-7 text-white flex items-center justify-between font-bold';
      break;
  }

  return (
    <div className={`${elementClass} ${className}`}>
      <p className='font-medium'>{children}</p>
    </div>
  );
};

export default Message;
