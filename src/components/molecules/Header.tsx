import React from 'react';
import Text from '../atoms/Text';

const Header: React.FC = () => {
  return (
    <header className="p-4 rounded-lg flex flex-col items-center gap-6">
      <Text className="text-2xl font-bold text-center text-blue-500">Sign Your PDF</Text>
      <Text className="text-lg text-center text-gray-600">Select a PDF file to get started</Text>
    </header>
  );
};

export default Header;