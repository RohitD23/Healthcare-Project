const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const feedbackRouter = require("./routes/feedback.route");
const authRouter = require("./routes/auth.router");

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

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/api/feedback", feedbackRouter);

app.use("/api/auth", authRouter);
app.use("/api/forgot", authRouter);

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log("Listening on Port 8000...");
});
