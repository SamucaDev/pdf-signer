import React from 'react';
import { HashLoader } from 'react-spinners';

interface SpinnerProps {
  color?: string;
  size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ color = '#FFFFFF', size = 32 }) => (
  <div className="flex items-center justify-center">
    <HashLoader color={color} size={size} />
  </div>
);

export default Spinner;
