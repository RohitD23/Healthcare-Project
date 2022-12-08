const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const feedbackRouter = require("./routes/feedback.route");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/feedback", feedbackRouter);

app.listen(8000, () => {
  console.log("Listening on Port 8000...");
});
