import api from "../api.config";
import apiEndpoints from "../api.endpoint";
import { LoginData, RegisterData } from "./utils/authTypes";

const authService = {
  login: async (data: LoginData) => {
    try {
      return await api.post(apiEndpoints.loginUser, data);
    } catch (err) {
      throw err;
    }
  },

  register: async (data: RegisterData) => {
    try {
      return await api.post(apiEndpoints.registerUser, data);
    } catch (err) {
      throw err;
    }
  },
};

export default authService;
