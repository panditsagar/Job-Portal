import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  deleteJobById,
  getAdminjobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";
const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(isAuthenticated, getAllJobs);
router.route("/getadminjobs").get(isAuthenticated, getAdminjobs);
router.route("/get/:id").get(isAuthenticated, getJobById);
router.route("/delete/:id").delete(isAuthenticated,deleteJobById)

export default router;
