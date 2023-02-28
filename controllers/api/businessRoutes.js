// importing required files
const router = require("express").Router();
const { Business } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const businessData = await Business.create(req.body);
    if (businessData) {
      res.status(200).json({ message: "Business created successfully!" });
    } else {
      res.status(404).json({ message: "insufficient data" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
