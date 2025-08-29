import { useState } from 'react';

export function usePdfPicker() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const selectPdf = (event: React.ChangeEvent<HTMLInputElement> | null) => {
    const file = event?.target.files?.[0] || null;

    if (file) {
      setPdfFile(file);
    } else {
      setPdfFile(null);
    }
  };

  return { pdfFile, selectPdf };
}
