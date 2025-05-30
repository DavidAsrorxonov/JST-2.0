import React, { useState } from "react";
import { useUser } from "../../context/userContext";
import axios from "axios";

const Profile = () => {
  const [userDetailModalOpen, setUserDetailModalOpen] = useState(false);
  const [selectedBgColor, setSelectedBgColor] = useState("");
  //   const [file, setFile] = useState(null);

  const { user } = useUser();
  const backupUser = localStorage.getItem("user");
  const profileName = user
    ? user.firstName[0].toUpperCase()
    : JSON.parse(backupUser).firstName[0].toUpperCase();

  const colors = [
    "bg-red-100",
    "bg-yellow-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-indigo-100",
  ];

  //   const handleFileChange = (e) => {
  //     setFile(e.target.files[0]);
  //   };

  //   const handleUpload = async () => {
  //     if (!file) return;

  //     const formData = new FormData();
  //     formData.append("profile", file);

  //     try {
  //       const response = await axios.post(
  //         "http://localhost:3000/uploads/photoUpload",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );

  //       console.log("Uploaded", response.data);
  //     } catch (error) {
  //       console.log("Failed", error);
  //     }
  //   };

  return (
    <>
      <div
        className={`flex items-center justify-center w-12 h-12 ${
          selectedBgColor ? selectedBgColor : "bg-gray-100"
        } rounded-full p-5 cursor-pointer select-none`}
        onClick={() => setUserDetailModalOpen(!userDetailModalOpen)}
      >
        {profileName}
      </div>

      {userDetailModalOpen && (
        <div className="absolute top-16 right-5 bg-white shadow-xl rounded-xl p-5 w-72">
          <div className="flex items-center gap-4">
            <div
              className={`${
                selectedBgColor ? selectedBgColor : "bg-gray-100"
              } text-black font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl`}
            >
              {user
                ? user.firstName.charAt(0) + user.lastName.charAt(0)
                : JSON.parse(backupUser).firstName.charAt(0) +
                  JSON.parse(backupUser).lastName.charAt(0)}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-800">
                {user
                  ? `${user.firstName} ${user.lastName}`
                  : `${JSON.parse(backupUser).firstName} ${
                      JSON.parse(backupUser).lastName
                    }`}
              </span>
              <span className="text-sm text-gray-600">
                {user ? user.email : JSON.parse(backupUser).email}
              </span>
            </div>
          </div>
          <h1 className="text-lg font-semibold text-gray-800 mt-5">Theme</h1>
          <div className="flex items-center justify-between mt-2">
            {colors.map((color, idx) => (
              <div key={idx} className="items-center gap-2">
                <button
                  value={color}
                  onClick={() => setSelectedBgColor(color)}
                  className={`w-8 h-8 rounded-full ${color} cursor-pointer`}
                />
              </div>
            ))}
          </div>
          <hr />
          <span className="flex items-center justify-center text-sm text-gray-600">
            or
          </span>
          <hr />
          {/* <div className="flex flex-col gap-4">
            <input type="file" onChange={handleFileChange} accept="image/*" />
            <button
              onClick={handleUpload}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Upload
            </button>
          </div> */}
        </div>
      )}
    </>
  );
};

export default Profile;
