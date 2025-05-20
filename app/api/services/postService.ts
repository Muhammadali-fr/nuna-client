import api from "../api.config";
import apiEndpoins from "../api.endpoint";
import { PostData } from "./utils/postTypes";

const postService = {
  create: async (data: PostData) => {
    try {
      return await api.post(apiEndpoins.createNewPost, { data });
    } catch (err) {
      throw err;
    }
  },

  get10: async () => {
    try {
      return await api.get(apiEndpoins.getManyPosts);
    } catch (err) {
      throw err;
    }
  },
};

export default postService;
