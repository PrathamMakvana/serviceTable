import axios from "axios";

export const fetchServices = async (page) => {
  const url = `http://20.193.149.47:2242/salons/service/?page=${page}`;
  try {
    const response = await axios.get(url);
    console.log("🚀 response --->", response);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch services:", error);
    throw new Error("Failed to fetch services");
  }
};
