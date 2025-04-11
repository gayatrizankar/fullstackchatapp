import axios from "axios"; // ✅ Don't forget this import

export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/api"
      : "/api",
  withCredentials: true,
});
