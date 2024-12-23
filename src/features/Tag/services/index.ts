import { api } from "@/api";

export const fetchGetTags = async () => {
  const response = await api.from("tag").select();
  return response.data;
};
