import express from "express";
import {
  getAvailableCountries,
  getCountryInfo,
} from "../controllers/countryController.js";

const router = express.Router();

router.get("/available", getAvailableCountries);
router.get("/info/:countryCode", getCountryInfo);

export default router;
