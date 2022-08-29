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
  let config = {
    headers: data,
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/api/user/detail`,
    config
  );
  return response;
};

export const MyPage = async (data) => {
  let config = {
    headers: {
      "X-AUTH-TOKEN": data,
    },
  };
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/api/user/record`,
    config
  );
  return response;
};

export const ResidenceRank = async () => {
  const response = await api.get(
    `${process.env.REACT_APP_SERVER_URL}/api/residence/rank`
  );
  return response;
};
