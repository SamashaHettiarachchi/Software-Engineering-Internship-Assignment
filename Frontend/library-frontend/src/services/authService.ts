import axios from "axios";
import { RegisterData, LoginData, AuthResponse } from "../types/User";

const API_URL = "http://localhost:5001/api/auth";

export const authService = {
  // Register a new user
  register: async (data: RegisterData): Promise<AuthResponse> => {
    try {
      const response = await axios.post(`${API_URL}/register`, data);
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Registration failed. Please try again.");
    }
  },

  // Login a user
  login: async (data: LoginData): Promise<AuthResponse> => {
    try {
      const response = await axios.post(`${API_URL}/login`, data);
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Login failed. Please try again.");
    }
  },

  // Save user to localStorage
  saveUser: (user: AuthResponse): void => {
    localStorage.setItem("user", JSON.stringify(user));
  },

  // Get user from localStorage
  getCurrentUser: (): AuthResponse | null => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },

  // Logout user
  logout: (): void => {
    localStorage.removeItem("user");
  },

  // Check if user is logged in
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("user");
  },
};
