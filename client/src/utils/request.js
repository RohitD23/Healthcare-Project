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

async function httpChangePassword(password) {
  const response = await fetch(`${API_URL}/auth/changePassword`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(password),
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

async function httpGetUserData() {
  const response = await fetch(`${API_URL}/user`);
  return await response.json();
}

async function httpChangeUserData(user) {
  const response = await fetch(`${API_URL}/user/changeData`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return await response.json();
}

//EMPLOYEE REQUEST

async function httpGetDoctors() {
  const response = await fetch(`${API_URL}/employee`);
  return await response.json();
}

async function httpGetDoctorInfo(name) {
  const response = await fetch(`${API_URL}/employee/${name}`);
  return await response.json();
}

//APPOINTMENT REQUEST

async function httpSubmitAppointment(data) {
  const response = await fetch(`${API_URL}/appointment/submit`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
}

async function httpGetDocAppoints(doctorName) {
  const response = await fetch(`${API_URL}/appointment/${doctorName}`);
  return await response.json();
}

async function httpGetPatientAppoints() {
  const response = await fetch(`${API_URL}/appointment`);
  return await response.json();
}

async function httpCancelAppointment(appoint) {
  const response = await fetch(`${API_URL}/appointment/cancel`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appoint),
  });

  return await response.json();
}

export {
  httpSubmitFeedback,
  httpGetFeedback,
  httpLogIn,
  httpAddNewUser,
  httpForgotPassword,
  httpResetPassword,
  httpChangePassword,
  httpCheckUserLoggedIn,
  httpLogout,
  httpGetAccountType,
  httpGetUserData,
  httpChangeUserData,
  httpGetDoctors,
  httpGetDoctorInfo,
  httpSubmitAppointment,
  httpGetDocAppoints,
  httpGetPatientAppoints,
  httpCancelAppointment,
};
