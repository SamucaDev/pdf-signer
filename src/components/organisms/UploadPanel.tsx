import React, { useRef, useState } from "react";
import Header from "../molecules/Header";
import { ButtonUpload } from "../molecules/ButtonUpload";
import { FileRow } from "../molecules/FileRow";
import { usePdfPicker } from "../../hooks/usePdfPicker";
import pdfApi from "../../api/pdf/pdfApi";
import Button from "../atoms/Button";
import { usePdf } from "../../context/pdfContext";
import type { SignedPdf } from "../../interfaces/signedPdf";
import ButtonString from "../atoms/ButtonString";
import { useNavigate } from "react-router-dom";
import Spinner from "../atoms/Spinner";
import Text from "../atoms/Text";

const UploadPanel: React.FC = () => {
  const { selectPdf, pdfFile } = usePdfPicker();
  const { setSignedPdf, signedPdf } = usePdf();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleButtonClick = () => inputRef.current?.click();

  const removePdf = () => {
    selectPdf(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleUpload = async () => {
    if (!pdfFile) return;
    setLoading(true);
    setError(null);
    try {
      const signed: SignedPdf = await pdfApi.sign(pdfFile);
      if (signed) setSignedPdf(signed);
    } catch (err) {
      console.error("Err", err);
      setError("Failed to sign the PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Header />
      {pdfFile && (
        <FileRow
          fileName={pdfFile.name}
          fileSize={pdfFile.size}
          removeArchive={removePdf}
        />
      )}
      <input
        type="file"
        accept="application/pdf"
        onChange={selectPdf}
        ref={inputRef}
        className="hidden"
      />
      <label htmlFor="pdfInput">
        <ButtonUpload label="Select the archive" onClick={handleButtonClick} />
      </label>

      <div className="flex flex-col gap-4">
        {pdfFile && (
          <div>
            <Button
              className="px-4 py-2 rounded-lg font-semibold text-white transition-colors"
              onClick={handleUpload}
              disabled={loading}
            >
              {loading ? <Spinner /> : "Sign PDF"}
            </Button>
          </div>
        )}
        {error && <div className="text-red-500">{error}</div>}

        {pdfFile && signedPdf && (
          <div className="flex flex-col gap-1">
            <Text className="text-black">Last signed PDF:</Text>

            <FileRow fileName={signedPdf?.signedFileName || ""} />
            <ButtonString text="See" onClick={() => navigate("viewer")} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPanel;
