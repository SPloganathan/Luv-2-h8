// importing required files
const router = require("express").Router();
const { Post, User, Business, Category } = require("../../models");

//add imported files for image import/uploading to cloudinary
const { createPost } = require("../../controllers/postController");
const multer = require("multer");

// Configure multer middleware to store uploaded images in the uploads folder on our server (these will be removed later)
const upload = multer({ dest: "uploads/" });


// for creation of new post (with images)
router.post("/", upload.single("file"), createPost);


// for creation of new post (without images)

// router.post("/", async (req, res) => {
//   try {
//     const postData = await Post.create(req.body);
//     if (postData) {
//       res.status(200).json({ message: "Post created successfully!" });
//     } else {
//       res.status(404).json({ message: "insufficient data" });
//     }
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });


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
