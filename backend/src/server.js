import express from "express";
import cors from "cors";
import countryRoutes from "./routes/countryRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0";

const corsOptions = {
  origin: process.env.ORIGIN,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/countries", countryRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Server running on port ${PORT}!`);
});
