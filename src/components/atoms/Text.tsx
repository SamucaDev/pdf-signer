import React from 'react';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Text: React.FC<TextProps> = ({ 
  children, 
  className = '', 
  style 
}) => (
  <span className={`text-base ${className}`} style={style}>
    {children}
  </span>
);

export default Text;