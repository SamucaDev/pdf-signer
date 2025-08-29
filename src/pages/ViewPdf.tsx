import React from 'react';
import { PdfViewerPage } from '../components/templates/PdfViewer';

const ViewPdf: React.FC = () => {
  return (
    <div className='w-screen h-screen'>
      <PdfViewerPage />
    </div>
  );
};

export default ViewPdf;