import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProductForm = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();
  const userId = authUser._id;
  const username = authUser.username;
  const profile = authUser.profile;

  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/products/add", {
        userId,
        caption,
        username,
        profile,
        imageUrl,
      });
      toast.success(response.data.message);
      setCaption("");
      setImageUrl("");
      navigate("/");
    } catch (error) {
      toast.error("Failed to add product");
    }
  };

  return (
    <div
      className="w-full min-h-screen -mb-20"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2016/11/19/12/43/barbell-1839086_1280.jpg')",
        backgroundPosition: "",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        opacity: "1",
        height: "100%",
      }}
    >
      <div className="max-w-lg mx-auto min-h-full p-8 pt-16 h-screen rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">
          Add New Post
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-50 font-medium mb-2">
              Post Caption
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-50 font-medium mb-2">
              Image URL
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-slate-500 to-gray-500 text-white py-3 rounded-lg shadow-md hover:from-slate-600 hover:to-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
