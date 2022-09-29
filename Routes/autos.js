const { Router } = require("express");
const {
  autosGet,
  autosPost,
  autosPut,
  autosDelete,
} = require("../Controllers/autos");

const router = Router();

router.get("/", autosGet);

router.post("/", autosPost);

router.put("/:id", autosPut);

router.delete("/", autosDelete);


module.exports = router;
