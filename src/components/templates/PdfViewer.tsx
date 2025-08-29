import { Document, Page, pdfjs } from 'react-pdf';
import { usePdf } from '../../context/pdfContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?worker&url";
import Button from '../atoms/Button';
import Text from '../atoms/Text';

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

export const PdfViewerPage = () => {
  const { signedPdf } = usePdf();
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth * 0.9);
  const [numPages, setNumPages] = useState<number>(0);

  useEffect(() => {
    if(!signedPdf) {
      navigate("/");
    }

    const handleResize = () => setWidth(window.innerWidth * 0.9);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigate, signedPdf]);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-100">
      <Button
        onClick={() => navigate("/")}
        className="self-start mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Back
      </Button>

      {signedPdf?.signedBase64 ? (
        <Document 
          file={`${signedPdf.signedBase64}`} 
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page key={index} pageNumber={index + 1} width={width} />
          ))}
        </Document>
      ) : (
        <Text className="text-gray-600">No PDF loaded.</Text>
      )}
    </div>
  );
};
