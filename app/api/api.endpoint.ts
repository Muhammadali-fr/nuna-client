const apiEndpoins = {
  // Home
  home: "/",

  // auth
  registerUser: "auth/register",
  verifyMagicLink: "auth/verify-magic-link",
  loginUser: "auth/login",
  userProfile: "auth/profile",

  // users
  getOneUser: "users/:id",
  getUsers: "users/all",
  deleteUser: "users/delete/:id",
  changeUserDetails: "users/update/:id",

  // collections

  // posts
  createNewPost: "posts/new",
  getManyPosts: "posts/many",
  getOnePost: "posts/:id",
  updatePost: "posts/update/:id",
  deletePost: "posts/remove/:id",
};

export default apiEndpoins;
