const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello !"));
app.get("/", (req, res) => res.send("I'm Gokul"));
app.get("/", (req, res) => res.send("AWS Certified Cloud Practitioner"));
app.get("/", (req, res) => res.send("This is my static website created for the Intern task"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
