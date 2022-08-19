import instance from "../../../insta/src/apis";

const PostApis = {
  getPosts: async () => {
    const result = await instance.get("/posts");
    return result.data;
  },
  createPosts: async (data) => {
    const result = await instance.post("/posts", data);

    return result.data;
  },
};

export default PostApis;
