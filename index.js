const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    Hello! <br>
    I'm Gokul <br>
    AWS Certified Cloud Practitioner <br>
    This is my static website created for the Intern task
  `);
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
