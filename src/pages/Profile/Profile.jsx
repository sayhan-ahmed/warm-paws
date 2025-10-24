import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUser, FaBell, FaSignOutAlt, FaUserTie } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { user, logOut, setUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("profile");
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  if (!user) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-[#2f6f81]">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
          <div className="flex justify-center">
            <FaUserTie
              size={80}
              className="bg-orange-100 rounded-full p-4 text-orange-600 mb-5"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            You’re not logged in
          </h2>
          <p className="text-gray-500 mb-4">
            Please login to view your profile.
          </p>
          <a
            href="/auth/login"
            className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-95"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      toast.promise(
        logOut()
          .then(() => {
            console.log("Logged out");
          })
          .catch((err) => {
            throw new Error(`Logout failed: ${err.code}`);
          }),
        {
          loading: "Logging out...",
          success: <b>Logged out successfully!</b>,
          error: (err) => <b>{err.message}</b>,
        }
      );
    } else {
      toast("Logout cancelled", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    toast.promise(
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          setName("");
          setPhoto("");
          setActiveTab("profile");
        })
        .catch((err) => {
          throw new Error(`Failed to update profile. Reason: ${err.code}`);
        }),
      {
        loading: "Updating profile...",
        success: <b>Profile updated successfully!</b>,
        error: (err) => <b>{err.message}</b>,
      }
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#2f6f81] px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
        {/* left card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full lg:w-2/3 transition-all duration-300">
          {activeTab === "profile" && (
            <>
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-4">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.postimg.cc/ZRWLcnw5/6780628.png"
                    }
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-2xl text-gray-800">
                      {user.displayName || "Your name"}
                    </h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>

              {/* Info Fields */}
              <div className="space-y-6 text-sm text-gray-700">
                <div className="flex justify-between border-b pb-2 font-bold text-xl">
                  <span>Name</span>
                  <span className="font-medium text-lg">
                    {user.displayName || "your name"}
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2 font-bold text-xl">
                  <span>Email account</span>
                  <span className="font-medium text-lg">{user.email}</span>
                </div>
              </div>

              {/* Wanna update profile button */}
              <div className="mt-10 text-center md:text-left">
                <button
                  onClick={() => setActiveTab("settings")}
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-95"
                >
                  Wanna update your profile?
                </button>
              </div>
            </>
          )}

          {activeTab === "settings" && (
            <form onSubmit={handleUpdateProfile} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Update Profile
              </h3>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  Photo URL
                </label>
                <input
                  required
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-md cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-95"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("profile")}
                  className="flex-1 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-md cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-95"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* right card */}
        <div className="flex flex-col gap-6 w-full lg:w-1/3">
          {/* Profile Menu Card */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex flex-col items-center mb-6">
              <img
                src={
                  user.photoURL || "https://i.postimg.cc/ZRWLcnw5/6780628.png"
                }
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <h3 className="font-semibold text-gray-800">
                {user.displayName || "Your name"}
              </h3>
            </div>

            <div className="divide-y">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex justify-between items-center w-full py-3 transition ${
                  activeTab === "profile"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  <FaUser /> My Profile
                </div>
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`flex justify-between items-center w-full py-3 transition ${
                  activeTab === "settings"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                <div className="flex items-center gap-3">
                  <IoSettingsSharp /> Settings
                </div>
              </button>

              <button className="flex justify-between items-center w-full py-3 text-gray-700 hover:text-orange-500 transition">
                <div className="flex items-center gap-3">
                  <FaBell /> Notification
                </div>
                <span className="text-sm text-gray-400">Allow</span>
              </button>

              <button
                onClick={handleLogout}
                className="flex justify-between items-center w-full py-3 text-gray-700 hover:text-orange-500 transition"
              >
                <div className="flex items-center gap-3">
                  <FaSignOutAlt /> Log Out
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
