import api from "./index";

export const Login = async (data) => {
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/login`,
    data
  );
  console.log(response);
  return response.data;
};

export const Register = async (data) => {
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/register`,
    data
  );
  console.log(response.data);
  return response.data;
};

export const Logout = async () => {
  const response = await api.get(`${process.env.REACT_APP_SERVER_URL}/logout`);
  return response.data;
};
