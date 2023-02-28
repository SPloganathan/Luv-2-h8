// importing required files
const router = require("express").Router();
const { Post, User, Business, Category } = require("../../models");
// for creation of new post
router.post("/", async (req, res) => {
  try {
    const postData = await Post.create(req.body);
    if (postData) {
      res.status(200).json({ message: "Post created successfully!" });
    } else {
      res.status(404).json({ message: "insufficient data" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});
// to get all the posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Business,
          include: [Category],
        },
      ],
    });
    if (postData) {
      res.status(200).json(postData);
    } else {
      res.status(404).json({ message: "insufficient data" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
