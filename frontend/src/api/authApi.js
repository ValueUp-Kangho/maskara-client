import { config } from "@fortawesome/fontawesome-svg-core";
import api from "./index";

export const Login = async (data) => {
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/api/login`,
    data
  );
  console.log(response);
  return response.data;
};

export const Register = async (data) => {
  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/api/signup`,
    data
  );
  return response;
};

export const Logout = async () => {
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/api/logout`
  );
  return response.data;
};

export const Auth = async (data) => {
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/api/mainpage`,
    config({ headers: data })
  );
  return response.data;
};
