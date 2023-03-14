import axios from "axios";
const ROOT_API = process.env.REACT_APP_API_URL;

const getOrder = async () => {
  const URL = "order";
  const response = await axios.get(`${ROOT_API}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse;
};

export { getOrder };
