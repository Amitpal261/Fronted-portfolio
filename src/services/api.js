import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-backend-0r3g.onrender.com/api",
});

// ✅ Get projects
export const getProjects = async () => {
  try {
    const res = await API.get("/projects");
    console.log("Project response:", res)
    return res.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};


// services/api.js
export const getProjectById = async (id) => {
  try {
    const res = await API.get(`/projects/${id}`);
    return res.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};