import api from "../api.config";
import apiEndpoins from "../api.endpoint";

const userService = {
  getByUsername: async (username: string) => {
    try {
      return await api.get(apiEndpoins.getOneUser(username));
    } catch (err) {
      throw err;
    }
  },
};

export default userService;
