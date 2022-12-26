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

const getAppoints = async (doctorName) => {
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

module.exports = { addAppointment, getAppoints };
