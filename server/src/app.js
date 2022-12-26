const express = require("express");
const helmet = require("helmet");
const session = require("express-session");
const store = new session.MemoryStore();
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const feedbackRouter = require("./routes/feedback.route");
const authRouter = require("./routes/auth.router");
const userRouter = require("./routes/user.router");
const employeeRouter = require("./routes/employee.router");
const appointmentRouter = require("./routes/appointment.router");

const PORT = process.env.PORT;

const app = express();

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "default-src": ["'self'", "'unsafe-inline'", "*.googleapis.com"],
      "script-src": ["'self'", "'unsafe-inline'", "*.googleapis.com"],
      "img-src": ["'self' data:", "*.googleapis.com", "*.gstatic.com"],
      "script-src-attr": null,
    },
  })
);
app.use((req, res, next) => {
  res.header("Cross-Origin-Embedder-Policy", "cross-origin");
  next();
});

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: oneDay },
    saveUninitialized: false,
    store,
    resave: false,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api/feedback", feedbackRouter);

app.use("/api/auth", authRouter);
app.use("/api/forgot", authRouter);

app.use("/api/user", userRouter);
app.use("/api/employee", employeeRouter);

app.use("/api/appointment", appointmentRouter);

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Listening on Port 8000...");
});
