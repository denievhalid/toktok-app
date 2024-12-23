import { api } from "@/api";

export const fetchGetPosts = async () => {
  const response = await api.from("user").select("login");
  return response.data;
};
