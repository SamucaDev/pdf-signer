const pdfOrigin = 'http://localhost:4000/pdf'; 

interface SignedPdf {
  signedBase64: string;
  signedFileName: string;
}

export const sign = async (file: File) => {
  const reader = new FileReader();

  return new Promise<SignedPdf>((resolve, reject) => {
    reader.readAsDataURL(file);

    reader.onload = async () => {
      try {
        const base64 = reader.result as string;
        const response = await fetch(`${pdfOrigin}/sign`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fileName: file.name, base64 }),
        });
        const data = await response.json();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    };

    reader.onerror = () => reject(reader.error);
  });
};

export default {
  sign
}