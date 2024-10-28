import { Router } from "express";
import { store, index, show, update, destroy } from "../controllers/explore-controllers.js";

const router = Router();

router.post("/", store);

router.get("/", index);

router.get("/:id", show);

router.put("/:id", update);

router.delete("/:id", destroy);

export default router;
