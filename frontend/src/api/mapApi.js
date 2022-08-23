import api from "./index";

export const getMarkerList = async () => {
  const response = await api.get(`${proces.env.REACT_APP_SERVER_URL}/map`);
  return response.data;
};

