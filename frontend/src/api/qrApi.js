import api from "./index";

// export const QRRead = async () => {
//   const response = await api.post();
// };

export const QRForm = async (token, data) => {
  let config = {
    headers: token,
  };
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/api/mask`,
    data,
    config
  );
  return response;
};
