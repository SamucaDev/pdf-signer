import React from "react";
import Text from "../atoms/Text";
import ButtonString from "../atoms/ButtonString";

interface FileRowProps {
  fileName: string;
  fileSize?: number;
  removeArchive?: () => void;
}

const formatBytes = (bytes: number) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

export const FileRow: React.FC<FileRowProps> = ({
  fileName,
  fileSize,
  removeArchive,
}) => (
  <div className="p-0 px-8 w-screen">
    <div className="flex justify-between flex-col items-center p-4 border rounded-lg bg-white shadow-md mb-4 w-full">
      <Text className="font-medium text-gray-800 truncate w-full">
        {fileName}
      </Text>
      {fileSize != null && (
        <Text className="text-gray-500 text-sm w-full">
          {formatBytes(fileSize)}
        </Text>
      )}
    </div>
    {removeArchive && (
      <ButtonString text="Remove" onClick={removeArchive} />
    )}
  </div>
);
