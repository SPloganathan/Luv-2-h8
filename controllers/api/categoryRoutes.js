// importing required files
const router = require("express").Router();
const { Category } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    if (categoryData) {
      res.status(200).json({ message: "Category created successfully!" });
    } else {
      res.status(404).json({ message: "insufficient data" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
