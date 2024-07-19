import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function ImageCropper(props) {
  console.log("try to display image cropper");
  const { imageToCrop, onImageCropped } = props;
  const [triger, setTriger] = useState(true);
  const [cropConfig, setCropConfig] = useState({
    unit: "px", // Can be 'px' or '%'
    x: 100,
    y: 100,
    width: 400,
    height: 400,
  });
  const closeCropModel = () => {
    setTriger(false);
  };
  async function cropImage(crop) {
    if (imageToCrop && crop.width && crop.height) {
      console.log("image crop is processing");

      const croppedImage = await getCroppedImage(
        imageToCrop,
        crop,
        "croppedImage.jpeg" // destination filename
      );

      // calling the props function to expose
      // croppedImage to the parent component
      console.log("calling croppedImage");
      onImageCropped(croppedImage);
    }
  }
  function getCroppedImage(sourceImageUrl, cropConfig, fileName) {
    return new Promise((resolve, reject) => {
      const sourceImage = new Image(600, 600);

      sourceImage.onload = () => {
        const canvas = document.createElement("canvas");
        const scaleX = sourceImage.naturalWidth / sourceImage.width;
        const scaleY = sourceImage.naturalHeight / sourceImage.height;
        canvas.width = cropConfig.width;
        canvas.height = cropConfig.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
          sourceImage,
          cropConfig.x * scaleX,
          cropConfig.y * scaleY,
          cropConfig.width * scaleX,
          cropConfig.height * scaleY,
          0,
          0,
          cropConfig.width,
          cropConfig.height
        );

        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Canvas is empty"));
            return;
          }
          blob.name = fileName;
          // creating a Object URL representing the Blob object given
          const croppedImageUrl = window.URL.createObjectURL(blob);

          resolve(croppedImageUrl);
        }, "image/jpeg"); // Adjust the format and quality as needed
      };
      sourceImage.onerror = (error) => {
        reject(error);
      };
      sourceImage.src = sourceImageUrl;
    });
  }

  return triger ? (
    <>
      {console.log(`triger ${triger}`)}
      <div className="absolute z-20 w-[50vw]  flex-col space-y-4 justify-space rounded-md  h-[98vh] bg-blue-950 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
        <ReactCrop
          crop={cropConfig}
          ruleOfThirds
          locked={true}
          onComplete={(cropConfig) => cropImage(cropConfig)}
          onChange={(cropConfig) => setCropConfig(cropConfig)}
          crossorigin="anonymous" // to avoid CORS-related problems
        >
          <img
            src={imageToCrop}
            alt="upload"
            style={{ height: "600px", width: "600px" }}
          />
        </ReactCrop>
        <button onClick={closeCropModel}> Done</button>
      </div>
    </>
  ) : (
    ""
  );
}

export default ImageCropper;
