const crypto = require("crypto");
const nodemailer = require("nodemailer");
require("dotenv").config();

const {
  verifyEmployee,
  checkEmployeeExists,
  addEmpPasswordResetToken,
  resetEmpPassword,
} = require("../model/employee.model");

const {
  checkUserExists,
  storeUser,
  verifyUser,
  addUserPasswordResetToken,
  resetUserPassword,
  changeUserPassword,
} = require("../model/user.model");

const loginUser = async (req, res) => {
  try {
    const data = req.body;
    let status;

    if (data.type === "employee") {
      status = await verifyEmployee(data);
    } else {
      status = await verifyUser(data);
    }

    if (status) {
      req.session.authenticated = true;

      if (data.type == "employee")
        req.session.user = { username: data.username, type: data.type };
      else req.session.user = { email: data.email, type: data.type };

      return res.status(200).json({ session: req.session, ok: true });
    } else {
      return res
        .status(400)
        .json({ ok: false, msg: "Incorrect Email Address or Password" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

const addNewUser = async (req, res) => {
  try {
    const user = req.body;

    let status = await checkUserExists(user);

    if (!status) {
      await storeUser(user);
      return res.status(201).json({ ok: true });
    } else {
      return res
        .status(400)
        .json({ ok: false, msg: "User with Email Address already exists" });
    }
  } catch (error) {
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    let token = crypto.randomBytes(20).toString("hex");

    let data = req.body;
    let status;

    if (data.type === "patient") status = await checkUserExists(data);
    else status = await checkEmployeeExists(data);

    if (status) {
      if (data.type === "patient") await addUserPasswordResetToken(data, token);
      else
        data = { ...data, email: await addEmpPasswordResetToken(data, token) };

      await sendMail(data, token, req);
    } else {
      return res.status(400).json({
        ok: false,
        msg: `Account doesn't exists`,
      });
    }

    return res.status(200).json({
      msg: "An Email with a link to reset password has been send to you",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

const sendMail = async (data, token, req) => {
  let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.SMTP_USER}`,
      pass: `${process.env.SMTP_PASSWORD}`,
    },
  });

  let mailOptions = {
    to: data.email,
    from: `${process.env.SMTP_EMAIL}`,
    subject: "Password Reset",
    text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
    Please click on the following link, or paste this into your browser to complete the process:\n
    http://${req.headers.host}/reset?type=${data.type}&token=${token}\n
    If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  };

  smtpTransport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    }
  });
};

const resetPassword = async (req, res) => {
  try {
    const { type, password, token } = req.body;
    let status;

    if (type === "patient") status = await resetUserPassword(token, password);
    else status = await resetEmpPassword(token, password);

    if (!status) {
      return res
        .status(400)
        .json({ ok: false, msg: "Invalid reset link or reset link expired." });
    }

    return res
      .status(200)
      .json({ ok: true, msg: "Password Changed Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

const changePassword = async (req, res) => {
  try {
    const { password } = req.body;

    await changeUserPassword(req, password);

    return res
      .status(200)
      .json({ ok: true, msg: "Password Changed Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

const checkUserLoggedIn = (req, res) => {
  try {
    if (req.session.authenticated) return res.status(200).json({ ok: true });
    else return res.status(200).json({ ok: false });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false });
  }
};

const logout = (req, res) => {
  try {
    req.session.destroy();
    return res.status(200).json({ ok: false });
  } catch (error) {
    return res.status(500);
  }
};

module.exports = {
  loginUser,
  addNewUser,
  forgotPassword,
  resetPassword,
  changePassword,
  checkUserLoggedIn,
  logout,
};
