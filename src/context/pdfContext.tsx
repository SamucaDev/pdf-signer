import React, { createContext, useState, useContext, type ReactNode } from 'react';
import type { SignedPdf } from '../interfaces/signedPdf';

interface PdfContextType {
  signedPdf: SignedPdf | null;
  setSignedPdf: (pdf: SignedPdf | null) => void;
}

const PdfContext = createContext<PdfContextType | undefined>(undefined);

export const PdfProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [signedPdf, setSignedPdf] = useState<SignedPdf | null>(null);

  return (
    <PdfContext.Provider value={{ signedPdf, setSignedPdf }}>
      {children}
    </PdfContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePdf = () => {
  const context = useContext(PdfContext);
  if (!context) throw new Error('usePdf must be used within a PdfProvider');
  return context;
};
