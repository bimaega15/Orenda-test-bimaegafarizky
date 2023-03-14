import axios from "axios";
const ROOT_API = process.env.REACT_APP_API_URL;

const getCustomer = async () => {
  const URL = "customer";
  const response = await axios.get(`${ROOT_API}/${URL}`);
  const axiosResponse = response.data;
  return axiosResponse;
};

export { getCustomer };
