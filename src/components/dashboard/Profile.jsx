import React, { useEffect, useState } from "react";
import { useUser } from "../../context/userContext";

const Profile = () => {
  const [userDetailModalOpen, setUserDetailModalOpen] = useState(false);
  const [selectedBgColor, setSelectedBgColor] = useState("#F3F4F6");
  const [imageURL, setImageURL] = useState(null);

  const { user } = useUser();
  const backupUser = localStorage.getItem("user");

  const profileName = user
    ? user.firstName[0].toUpperCase()
    : JSON.parse(backupUser).firstName[0].toUpperCase();

  const colors = [
    { name: "Red", value: "#fee2e2" },
    { name: "Yellow", value: "#fef9c3" },
    { name: "Green", value: "#dcfce7" },
    { name: "Blue", value: "#dbeafe" },
    { name: "Indigo", value: "#e0e7ff" },
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageURL(imageURL);
      setSelectedBgColor("");
      localStorage.setItem("profileImage", imageURL);
      localStorage.removeItem("profileBgColor");
    }
  };

  const handleColorChange = (color) => {
    setSelectedBgColor(color);
    setImageURL(null);
    localStorage.setItem("profileBgColor", color);
    localStorage.removeItem("profileImage");
  };

  useEffect(() => {
    const savedImageURL = localStorage.getItem("profileImage");
    const savedColor = localStorage.getItem("profileBgColor");
    if (savedImageURL) setImageURL(savedImageURL);
    else if (savedColor) setSelectedBgColor(savedColor);
  }, []);

  return (
    <>
      <div
        className={`flex items-center justify-center w-20 h-12 rounded-full cursor-pointer bg-center bg-cover bg-no-repeat`}
        style={{
          backgroundColor: imageURL ? "transparent" : selectedBgColor,
          backgroundImage: imageURL ? `url(${imageURL})` : "none",
        }}
        onClick={() => setUserDetailModalOpen(!userDetailModalOpen)}
      >
        {!imageURL && (
          <span className="text-black font-bold">{profileName}</span>
        )}
      </div>

      {userDetailModalOpen && (
        <div className="absolute top-16 right-5 bg-white shadow-xl rounded-xl p-5 w-72 z-50">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-full bg-center bg-cover bg-no-repeat flex items-center justify-center text-xl font-bold text-black"
              style={{
                backgroundColor: imageURL ? "transparent" : selectedBgColor,
                backgroundImage: imageURL ? `url(${imageURL})` : "none",
              }}
            >
              {!imageURL &&
                (user
                  ? user.firstName[0] + user.lastName[0]
                  : JSON.parse(backupUser).firstName[0] +
                    JSON.parse(backupUser).lastName[0])}
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
              <button
                key={idx}
                onClick={() => handleColorChange(color.value)}
                className={`w-8 h-8 rounded-full cursor-pointer`}
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between my-3">
            <hr className="w-1/4" />
            <span className="text-sm text-gray-500">or</span>
            <hr className="w-1/4" />
          </div>

          <div className="flex items-center gap-2 mt-4">
            <label
              htmlFor="profile-upload"
              className="cursor-pointer bg-blue-100 hover:bg-blue-200 border-blue-500 border text-blue-600 px-4 py-2 rounded-lg text-sm transition"
            >
              Upload Profile Picture
            </label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
