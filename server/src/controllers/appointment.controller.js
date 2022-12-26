const nodemailer = require("nodemailer");
require("dotenv").config();

const {
  addAppointment,
  getDoctorAppoints,
  getPatAppoints,
  cancelAppoint,
} = require("../model/appointment.model");

const sendMail = async (req, data) => {
  let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: `${process.env.SMTP_USER}`,
      pass: `${process.env.SMTP_PASSWORD}`,
    },
  });

  let mailOptions = {
    to: req.session.user.email,
    from: `${process.env.SMTP_EMAIL}`,
    subject: "Doctor Appointment",
    text: `You are receiving this because you have booked appointment for Dr. ${data.doctorName}\n
    on ${data.date} at ${data.time}. Please be on time\n
    Thanks for choosing Mamta Hospital`,
  };

  smtpTransport.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    }
  });
};

const submitAppointment = async (req, res) => {
  try {
    const data = req.body;
    await addAppointment(req, data);
    await sendMail(req, data);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

const getDocAppoints = async (req, res) => {
  try {
    const doctorName = req.params.doctorName;

    const appoints = await getDoctorAppoints(doctorName);
    return res.status(200).json(appoints);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

const getPatientAppoints = async (req, res) => {
  try {
    const appoints = await getPatAppoints(req);
    return res.status(200).json(appoints);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

const cancelAppointment = async (req, res) => {
  try {
    const appoint = req.body;
    await cancelAppoint(req, appoint);

    return res
      .status(200)
      .json({ ok: true, msg: "Cancelled Appointment Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

module.exports = {
  submitAppointment,
  getDocAppoints,
  getPatientAppoints,
  cancelAppointment,
};
