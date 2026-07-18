import axios from "axios";

export const getFoods = async () => {
  const response = await axios.get("http://localhost:5000/api/foods");
  return response.data;
};