import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://portfolio-backend-0r3g.onrender.com/api/projects"; // update if needed

// Helper: Logout function (clear token)

export default function AdminProjectUpload() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin"); // redirect after logout
  };
  const [form, setForm] = useState({
    title: "",
    category: "",
    file: null, // IMPORTANT: match backend (upload.single("file"))
    disc: "",
    tech: "",
    github: "",
    live: "",
    featured: false,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      // DEBUG: check token
      console.log("TOKEN:", token);

      if (!token) {
        alert("No token found. Please login again.");
        return;
      }

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("category", form.category);
      formData.append("file", form.file); // IMPORTANT FIX
      formData.append("disc", form.disc);
      formData.append(
        "tech",
        JSON.stringify(form.tech.split(",").map((t) => t.trim())),
      );
      formData.append("github", form.github);
      formData.append("live", form.live);
      formData.append("featured", form.featured);

      await axios.post(API_URL, formData, {
        headers: {
          Authorization: `Bearer ${token}`, // <-- send the token
          "Content-Type": "multipart/form-data", // important for file uploads
        },
      });

      alert("Project uploaded successfully!");

      setForm({
        title: "",
        category: "",
        file: null,
        disc: "",
        tech: "",
        github: "",
        live: "",
        featured: false,
      });
      setPreview(null);
    } catch (err) {
      alert(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-zinc-900 p-8 rounded-2xl shadow-2xl border border-zinc-800">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold tracking-wide">
            Admin Project Upload
          </h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm"
          >
            Logout
          </button>
        </div>
        <h1>Admin Project Upload</h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-zinc-800 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-zinc-800 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          {/* File Upload */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 text-sm text-gray-400">
              Upload Image / File
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              required
              className="w-full p-3 rounded-lg bg-zinc-800 text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700"
            />
          </div>

          {/* Preview */}
          {preview && (
            <div className="col-span-1 md:col-span-2">
              <img
                src={preview}
                alt="preview"
                className="w-full max-h-60 object-cover rounded-lg border border-zinc-700"
              />
            </div>
          )}

          <textarea
            name="disc"
            placeholder="Project Description"
            value={form.disc}
            onChange={handleChange}
            required
            rows={4}
            className="p-3 rounded-lg bg-zinc-800 focus:ring-2 focus:ring-purple-500 outline-none col-span-1 md:col-span-2"
          />

          <input
            type="text"
            name="tech"
            placeholder="Tech Stack (React, Node, MongoDB)"
            value={form.tech}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-zinc-800 focus:ring-2 focus:ring-purple-500 outline-none col-span-1 md:col-span-2"
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub Link"
            value={form.github}
            onChange={handleChange}
            className="p-3 rounded-lg bg-zinc-800 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <input
            type="text"
            name="live"
            placeholder="Live URL"
            value={form.live}
            onChange={handleChange}
            className="p-3 rounded-lg bg-zinc-800 focus:ring-2 focus:ring-purple-500 outline-none"
          />

          <label className="flex items-center space-x-2 col-span-1 md:col-span-2">
            <input
              type="checkbox"
              name="featured"
              checked={form.featured}
              onChange={handleChange}
              className="accent-purple-600"
            />
            <span className="text-sm text-gray-300">Mark as Featured</span>
          </label>

          <button
            type="submit"
            disabled={loading}
            className="col-span-1 md:col-span-2 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition duration-300"
          >
            {loading ? "Uploading..." : "Upload Project"}
          </button>
        </form>
      </div>
    </div>
  );
}
