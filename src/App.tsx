import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewPdf from './pages/ViewPdf';
import UploadPdf from './pages/UploadPdf';
import { PdfProvider } from './context/pdfContext';

export const App: React.FC = () => {

  return (
    <PdfProvider>
      <Router>
        <Routes>
          <Route path="/" element={<UploadPdf />} />
          <Route path="/viewer" element={<ViewPdf />} />
        </Routes>
      </Router>
    </PdfProvider>
  );
};
