// importing required files
const router = require("express").Router();
const { Business, Category } = require("../../models");
// API for creating new business
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

// this API will return business based on the category ID
router.get("/:categoryId", async (req, res) => {
  try {
    const businessData = await Business.findAll({
      include: [
        {
          model: Category,
          attributes: ["name", "id"],
          where: { id: req.params.categoryId },
        },
      ],
    });
    if (businessData) {
      res.status(200).json(businessData);
    } else {
      res
        .status(404)
        .json({ message: "No data available for this category id" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
