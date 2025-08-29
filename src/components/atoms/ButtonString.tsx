import React from 'react';

interface ButtonStringProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLSpanElement>;
  color?: string; 
}

const ButtonString: React.FC<ButtonStringProps> = ({ text, onClick, color }) => {
  return (
    <span 
      onClick={onClick} 
      className={`${color || 'text-blue-500'} cursor-pointer underline`} 
    >
      {text}
    </span>
  );
};

export default ButtonString;