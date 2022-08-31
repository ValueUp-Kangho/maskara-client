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

export const Logout = async (data) => {
  let config = {
    headers: data,
  };

  const response = await api.post(
    `${process.env.REACT_APP_SERVER_URL}/api/logout`,
    null,
    config
  );
  return response;
};

export const Auth = async (data) => {
  let config = {
    headers: data,
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/api/user/detail`,
    config
  );
  return response;
};

export const MyRecords = async (data) => {
  let config = {
    headers: data,
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/api/user/record`,
    config
  );
  return response;
};

export const ResidenceRank = async (data) => {
  let config = {
    headers: data,
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/api/residence/rank`,
    config
  );
  return response;
};

export const Edit = async (data) => {
  let config = {
    headers: data,
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/api/user/edit`,
    config
  );
  return response;
};

export const EditProfile = async (token, data) => {
  let config = {
    headers: token,
  };
  const response = await api.put(
    `${process.env.REACT_APP_SERVER_URL}/api/edit`,
    data,
    config
  );
  return response;
};
