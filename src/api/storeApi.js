import api from "./index";

export const GetStoreInfo = async (data) => {
  let config = {
    headers: data,
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/api/store`,
    config
  );
  return response;
};
