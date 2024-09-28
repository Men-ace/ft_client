import axios from "axios";
const rootApiEp = import.meta.env.VITE_ROOT_API;

const getAccessJWT = () => {
  return localStorage.getItem("accessJWT");
};

const apiProcessor = async ({ method, url, data, headers }) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    console.log(error);

    return {
      status: "error",
      message: error?.response?.data?.error || error.message,
    };
  }
};

// post new user
export const postNewUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEp + "/users",
    data,
  };
  return apiProcessor(obj);
};

// login user
export const loginUser = (data) => {
  const obj = {
    method: "post",
    url: rootApiEp + "/users/login",
    data,
  };
  return apiProcessor(obj);
};

// get user profile
export const getUser = () => {
  const obj = {
    method: "get",
    url: rootApiEp + "/users",
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(obj);
};

// ### transaction api calls

// post new user
export const postNewTransaction = (data) => {
  const obj = {
    method: "post",
    url: rootApiEp + "/transactions",
    data,
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(obj);
};
// fetch transactions for a specific user
export const fetchTransactions = () => {
  const obj = {
    method: "get",
    url: rootApiEp + "/transactions",

    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(obj);
};

export const deleteTransactions = (data) => {
  const obj = {
    method: "delete",
    url: rootApiEp + "/transactions",
    data,
    headers: {
      Authorization: getAccessJWT(),
    },
  };
  return apiProcessor(obj);
};
