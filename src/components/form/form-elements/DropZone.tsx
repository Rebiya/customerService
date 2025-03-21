import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import ComponentCard from "../../common/ComponentCard";

const DropzoneComponent: React.FC<{ onImageUpload: (url: string) => void }> = ({
  onImageUpload,
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null); // State to store the uploaded image URL
  const [showPreview, setShowPreview] = useState<boolean>(false); // State to control the preview popup
  const [isImageConfirmed, setIsImageConfirmed] = useState<boolean>(false); // State to track if the image is confirmed

  const onDrop = async (acceptedFiles: File[]) => {
    if (isImageConfirmed) return; // Do nothing if an image is already confirmed

    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset", "x2omxwjd"); // Replace with your Cloudinary upload preset

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/djxrxjiuf/image/upload",
        formData
      );
      const imageUrl = response.data.secure_url; // Cloudinary URL of the uploaded image
      // console.log("Cloudinary Image URL:", imageUrl); // Log the URL
      setUploadedImage(imageUrl); // Set the uploaded image URL for preview
      setShowPreview(true); // Show the preview popup
    } catch (error) {
      // console.error("Error uploading image:", error);
    }
  };

  const handleConfirm = () => {
    if (uploadedImage) {
      onImageUpload(uploadedImage); // Pass the URL to the parent component
      setShowPreview(false); // Close the preview popup
      setIsImageConfirmed(true); // Mark the image as confirmed
    }
  };

  const handleCancel = () => {
    setUploadedImage(null); // Clear the uploaded image
    setShowPreview(false); // Close the preview popup
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    noClick: isImageConfirmed, // Disable click if an image is confirmed
    noKeyboard: isImageConfirmed, // Disable keyboard if an image is confirmed
    noDrag: isImageConfirmed, // Disable drag if an image is confirmed
  });

  return (
    <ComponentCard title="Dropzone">
      <div
        className={`transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500 ${
          isImageConfirmed ? "pointer-events-none" : "" // Disable pointer events if an image is confirmed
        }`}
      >
        <form
          {...getRootProps()}
          className={`dropzone rounded-xl border-dashed border-gray-300 p-7 lg:p-10
          ${
            isDragActive
              ? "border-brand-500 bg-gray-100 dark:bg-gray-800"
              : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
          }`}
        >
          <input {...getInputProps()} />
          <div className="dz-message flex flex-col items-center !m-0">
            {uploadedImage && isImageConfirmed ? (
              // Display the confirmed image in the dropzone
              <div className="w-full h-40 flex items-center justify-center">
                <img
                  src={uploadedImage}
                  alt="Uploaded Preview"
                  className="w-full h-full rounded-lg"
                />
              </div>
            ) : uploadedImage && showPreview ? (
              // Display the uploaded image preview in a popup
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="w-64 h-64 flex items-center justify-center">
                    <img
                      src={uploadedImage}
                      alt="Uploaded Preview"
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                  <div className="flex justify-end mt-4 space-x-2">
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleConfirm}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Default dropzone content
              <>
                <div className="mb-[22px] flex justify-center">
                  <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                    <svg
                      className="fill-current"
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* SVG Icon */}
                    </svg>
                  </div>
                </div>
                <h4 className="mb-3 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
                  {isDragActive ? "Drop Files Here" : "Drag & Drop Files Here"}
                </h4>
                <span className="text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">
                  Drag and drop your PNG, JPG, WebP, SVG images here or browse
                </span>
                <span className="font-medium underline text-theme-sm text-brand-500">
                  Browse File
                </span>
              </>
            )}
          </div>
        </form>
      </div>
    </ComponentCard>
  );
};

export default DropzoneComponent;
