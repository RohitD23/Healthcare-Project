const { db } = require("../utils/admin");

const appointmentsDB = db.collection("Appointments");

const addAppointment = async (req, data) => {
  await appointmentsDB
    .doc()
    .set({
      doctor: data.doctorName,
      patient: req.session.user.email,
      date: data.date,
      time: data.time,
    })
    .catch((err) => console.log(err.message));
};

const getDoctorAppoints = async (doctorName) => {
  return await appointmentsDB
    .where("doctor", "==", doctorName)
    .get()
    .then((docs) => {
      if (!docs.empty) {
        let appoints = [];
        docs.forEach((doc) => {
          appoints.push({ date: doc.data().date, time: doc.data().time });
        });

        return appoints;
      } else {
        return [];
      }
    });
};

const getPatAppoints = async (req) => {
  return await appointmentsDB
    .where("patient", "==", req.session.user.email)
    .get()
    .then((docs) => {
      if (!docs.empty) {
        let appoints = [];
        docs.forEach((doc) => {
          appoints.push({
            doctor: doc.data().doctor,
            date: doc.data().date,
            time: doc.data().time,
          });
        });

        return appoints;
      } else {
        return [];
      }
    });
};

const cancelAppoint = async (req, appoint) => {
  await appointmentsDB
    .where("doctor", "==", appoint.doctor)
    .where("patient", "==", req.session.user.email)
    .where("date", "==", appoint.date)
    .where("time", "==", appoint.time)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });
};

module.exports = {
  addAppointment,
  getDoctorAppoints,
  getPatAppoints,
  cancelAppoint,
};
