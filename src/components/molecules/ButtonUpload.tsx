import React from 'react';
import Button from '../atoms/Button';

interface ButtonUploadProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const ButtonUpload: React.FC<ButtonUploadProps> = ({
  label,
  onClick,
  disabled = false,
  loading = false,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || loading}
      className={`px-4 py-2 rounded-lg font-semibold text-white transition-colors 
        ${disabled || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
      `}
    >
      {loading ? 'Carregando...' : label}
    </Button>
  );
};
