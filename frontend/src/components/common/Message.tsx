import { ReactNode } from 'react';

interface MessageProps {
  variant?: 'success' | 'info' | 'warning' | 'danger';
  className?: string;
  children?: ReactNode;
}

const Message = ({ variant = 'info', children, className }: MessageProps) => {
  return (
    <div
      className={`w-full bg-[#8A957E] px-10 py-7 text-white flex items-center justify-between font-bold ${className}`}
    >
      <p className='font-medium'>{children}</p>
    </div>
  );
};

export default Message;
