require("dotenv").config();
const app = require("./src/app");
const { connectDB } = require("./src/config/db");

const startServer = async () => {
  try {
    await connectDB();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
