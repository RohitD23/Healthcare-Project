const API_URL = "http://localhost:8000/api";

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

export {
  httpSubmitFeedback,
  httpLogIn,
  httpAddNewUser,
  httpForgotPassword,
  httpResetPassword,
};
