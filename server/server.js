const SERVER_PORT = 5000;

const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

// Routes
app.use((req, res) => {
  res.status(200).json({ name: "Server el gamadan" });
});

app.listen(SERVER_PORT, () =>
  console.log(`Server started on port ${SERVER_PORT}`)
);
