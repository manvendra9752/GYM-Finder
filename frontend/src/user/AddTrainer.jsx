import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function AddTrainer() {
  const [authUser] = useAuth();
  const userId = authUser._id; // Get user ID from context

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const trainerData = {
      userId: userId, // Use userId from context
      name: data.name,
      specialization: data.specialization,
      experience: data.experience,
      image: data.image,
      gender: data.gender,
      instagram: data.instagram,
      twitter: data.twitter,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/user/trainers",
        trainerData
      );
      console.log(res.data);
      if (res.data) {
        toast.success("Trainer added successfully");
        navigate("/");
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };

  return (
    <section className="h-full flex items-center justify-center py-12">
      <div className="w-full max-w-4xl shadow-lg rounded-lg p-8 flex flex-col ">
        <h2 className="text-2xl font-bold mb-4 mx-auto text-center w-full">
          Add New Trainer
        </h2>
        <div className="w-full max-w-4xl shadow-lg rounded-lg p-8 flex md:flex-row flex-col ">
          <div className="w-full md:w-1/2 p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  id="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="specialization"
                  className="block text-gray-700 mb-2"
                >
                  Specialization
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  id="specialization"
                  {...register("specialization", { required: true })}
                />
                {errors.specialization && (
                  <span className="text-red-500">
                    Specialization is required
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="experience"
                  className="block text-gray-700 mb-2"
                >
                  Experience
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  id="experience"
                  {...register("experience", { required: true })}
                />
                {errors.experience && (
                  <span className="text-red-500">Experience is required</span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  id="image"
                  {...register("image")}
                />
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="mb-4">
                <label htmlFor="gender" className="block text-gray-700 mb-2">
                  Training Gender
                </label>
                <div className="flex items-center">
                  <label className="mr-4">
                    <input
                      type="radio"
                      value="Male"
                      {...register("gender", { required: true })}
                      className="mr-2"
                    />
                    Male
                  </label>
                  <label className="mr-4">
                    <input
                      type="radio"
                      value="Female"
                      {...register("gender", { required: true })}
                      className="mr-2"
                    />
                    Female
                  </label>
                  <label className="mr-4">
                    <input
                      type="radio"
                      value="Both"
                      {...register("gender", { required: true })}
                      className="mr-2"
                    />
                    Both
                  </label>
                </div>
                {errors.gender && (
                  <span className="text-slate-500">
                    Training gender is required
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="instagram" className="block text-gray-700 mb-2">
                  Instagram
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  id="instagram"
                  {...register("instagram")}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="twitter" className="block text-gray-700 mb-2">
                  Twitter
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  id="twitter"
                  {...register("twitter")}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-950 transition duration-200"
              >
                Add Trainer
              </button>
            </form>
            <p className="mt-4 text-gray-600">
              <Link to="/">Go back</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddTrainer;
