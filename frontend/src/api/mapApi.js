import api from "./index";

export const GetMarkerList = async (data) => {
  let config = {
    headers: data,
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/api/collectionbox`,
    config
  );
  return response;
};
