import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageCropper from "./ImageCropper";
import "react-image-crop/dist/ReactCrop.css";

// Import all require utils
export function PopUpScreen(props) {
  const [fileUpload, SetfileUpload] = useState(false);
  const [username, SetUsername] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  let green = "bg-green-400";
  let indigo = "bg-indigo-400";

  const notify = () => toast("Image selected");

  const cropedUrlToImageFile = (blobUrl) => {
    fetch(blobUrl)
      .then((response) => response.blob())
      .then((blobData) => {
        // Convert Blob data to a File object
        const file = new File([blobData], "image.jpg", { type: "image/jpeg" });

        // Use the File object as needed
        console.log("File object:", file);
        setImage(file);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const uploadUserCredentailed = async (event) => {
    event.preventDefault();
    console.log(`image for upload ${image}`);
    try {
      if (!image == "") {
        if (image.type.includes("image")) {
          console.log("try to upload");
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", "lbipc2l2");
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/dffowvjnd/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();

          console.log("try to change DisplayName and ImageUrl");
          updateProfile(auth.currentUser, {
            displayName: username,
            photoURL: data.secure_url,
          })
            .then(() => {
              console.log("profilename and ImageUrl   updated successfully");
              console.log("ProfileName", username);
              console.log("imgUrl", data.secure_url);
              window.location.reload();
            })
            .catch((error) => {
              console.log(error.message, error.message);
            });
        }
      } else {
        console.log("try only to upload DisplayName");
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {
            console.log("profilename updated successfully");
            console.log("ProfileName", username);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error.message, error.message);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //function for changing color of img input filled label
  const ChangeInputFilledColor = (event) => {
    const file = event.target.files[0];

    SetfileUpload(false);

    if (!file == "") {
      if (file.type.includes("image")) {
        console.log("file upload and now changing color");
        SetfileUpload(true);
        console.log("setFileupload true");
        imageToImageUrl(file);
        notify();
      }
    }
  };
  // function to change image to image url
  const imageToImageUrl = (file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const fileURl = e.target.result;
      setImageUrl(fileURl);
    };
    reader.readAsDataURL(file);
  };
  // only return popup display when there is no UserdisplayName
  return (
    props.triger && (
      <div className="blurry">
        <div className="absolute backdrop-blur-sm shadow-lg top-[20%] right-[34%]   shadow-indigo-800/20   flex justify-center content-around w-1/3 h-[400px] bg-indigo-300/30 rounded-lg ">
          <form className="mt-16">
            <label className="p-14 text-xl " htmlFor="username">
              Set Profile Name
            </label>
            <br></br>
            <input
              className="mt-2 shadow-lg outline-blue-500   shadow-indigo-500/40"
              placeholder="Enter your full name."
              type="text"
              name="username"
              id="username"
              onChange={(event) => {
                SetUsername(event.target.value);
              }}
              required
            />
            <br></br>
            <br></br>

            <label
              className={`absolute ${
                fileUpload ? green : indigo
              }  text-xl shadow-2xl cursor-pointer rounded-lg hover:bg-indigo-500  p-6 m-[8px]`}
              htmlFor="dpPhoto"
            >
              <span className="text-3xl px-1 ">+</span>Upload Profile Photo
            </label>
            <br></br>
            <input
              className={`hidden`}
              type="file"
              name="dpPhoto"
              id="dpPhoto"
              accept="image/*"
              onChange={ChangeInputFilledColor}
            />

            <button
              type="submit"
              className="bg-indigo-400 hover:bg-indigo-500 absolute bottom-20 text-black ml-24"
              onClick={uploadUserCredentailed}
            >
              Upload
            </button>
          </form>
        </div>
        <ToastContainer autoClose={2000} />
        {imageUrl && (
          <ImageCropper
            imageToCrop={imageUrl}
            onImageCropped={(croppedImage) => {
              cropedUrlToImageFile(croppedImage);
            }}
          />
        )}
      </div>
    )
  );
}
