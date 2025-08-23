import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getCurrentUser,
  updatePassword,
  updateUsername,
} from "../../../services/auth.service.ts";
import { type FormEvent, useState } from "react";
import { alertError, alertSuccess } from "../../../utils/alert.ts";

const Profile = () => {
  const { data, isError, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getCurrentUser,
  });

  const handleUpdateName = async (e: FormEvent) => {
    e.preventDefault();
    const formData = e.target as HTMLFormElement;
    const name = formData.name.value;

    const result = await updateUsername(name);

    if (result.data) {
      await alertSuccess("Update name success");
    } else {
      await alertError("Update name failed");
    }
  };

  const handleUpdatePassword = async (e: FormEvent) => {
    e.preventDefault();
    const formData = e.target as HTMLFormElement;
    const password = formData.new_password.value;
    const confirmPassword = formData.confirm_password.value;

    if (password !== confirmPassword)
      return alertError("Confirm password is not match with password");

    const result = await updatePassword(password);

    if (result.data) {
      await alertSuccess("Update name success");
      formData.reset();
    } else {
      await alertError("Update name failed");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8 flex-grow">
      <div className="flex items-center mb-6">
        <i className="fas fa-user-cog text-blue-400 text-2xl mr-3" />
        <h1 className="text-2xl font-bold text-white">My Profile</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form 1: Edit Name */}
        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden card-hover animate-fade-in">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                <i className="fas fa-user-edit text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">Edit Profile</h2>
            </div>
            <form onSubmit={handleUpdateName}>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-user text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your full name"
                    defaultValue={data?.name}
                    required=""
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient text-white py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                  <i className="fas fa-save mr-2" /> Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Form 2: Edit Password */}
        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden card-hover animate-fade-in">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                <i className="fas fa-key text-white" />
              </div>
              <h2 className="text-xl font-semibold text-white">
                Change Password
              </h2>
            </div>
            <form onSubmit={handleUpdatePassword}>
              <div className="mb-5">
                <label
                  htmlFor="new_password"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-lock text-gray-500" />
                  </div>
                  <input
                    type="password"
                    id="new_password"
                    name="new_password"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your new password"
                    required=""
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="confirm_password"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-check-double text-gray-500" />
                  </div>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 bg-opacity-50 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Confirm your new password"
                    required=""
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-gradient text-white py-3 px-4 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center"
                >
                  <i className="fas fa-key mr-2" /> Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-10 mb-6 text-center text-gray-400 text-sm animate-fade-in">
        <p>© 2025 Contact Management. All rights reserved.</p>
      </div>
    </main>
  );
};

export default Profile;
