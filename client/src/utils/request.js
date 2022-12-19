const API_URL = "http://localhost:8000/api";

//FEEDBACK REQUEST

async function httpSubmitFeedback(data) {
  const response = await fetch(`${API_URL}/feedback`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}

async function httpGetFeedback(page, limit) {
  const response = await fetch(
    `${API_URL}/feedback?page=${page}&limit=${limit}`
  );
  return await response.json();
}

//AUTH REQUEST

async function httpLogIn(user) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return await response.json();
}

async function httpAddNewUser(user) {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await response.json();
}

async function httpForgotPassword(user) {
  const response = await fetch(`${API_URL}/auth/forgot`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await response.json();
}

async function httpResetPassword(data) {
  const response = await fetch(`${API_URL}/auth/reset`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}

async function httpCheckUserLoggedIn() {
  const response = await fetch(`${API_URL}/auth/session`);
  return await response.json();
}

async function httpLogout() {
  const response = await fetch(`${API_URL}/auth/logout`);
  return await response.json();
}

//USER REQUEST

async function httpGetAccountType() {
  const response = await fetch(`${API_URL}/user/account-type`);
  return await response.json();
}

export {
  httpSubmitFeedback,
  httpGetFeedback,
  httpLogIn,
  httpAddNewUser,
  httpForgotPassword,
  httpResetPassword,
  httpCheckUserLoggedIn,
  httpLogout,
  httpGetAccountType,
};
