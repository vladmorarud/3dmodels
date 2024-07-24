const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import cors package
const messageRoutes = require("./routes/messageRoutes");
const sequelize = require("./config");

const app = express();

// Use CORS middleware
app.use(cors());

app.use(bodyParser.json());
app.use("/api", messageRoutes);

const PORT = process.env.PORT || 8000;
sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
