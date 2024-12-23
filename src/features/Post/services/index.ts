import { api } from "@/api";

export const fetchGetPosts = async () => {
  const response = await api.from("post").select("*,user:user(*)");
  return response.data;
};
