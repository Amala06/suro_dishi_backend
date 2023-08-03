const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// const { chats } = require("./data/data.js");
const connectDB = require("./config/db.js");
const userRoutes = require("./Routes/userRoutes.js");
// const chatRoutes = require("./Routes/chatRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const app = express();

app.use(express.json());
dotenv.config();
connectDB();


app.use(cors());



app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);
// app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

app.listen(PORT, console.log(`Server Started ${PORT}`));
