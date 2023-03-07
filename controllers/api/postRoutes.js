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

// the below route is for like/dislike
router.post("/likeDislike", async (req, res) => {
  try {
    const { type, postId } = req.body;
    const postData = await Post.findByPk(postId);
    let like_count = postData?.like_count ?? 0;
    let dislike_count = postData?.dislike_count ?? 0;
    if (type === "like") {
      like_count += 1;
    } else {
      dislike_count += 1;
    }
    const newData = await Post.update(
      {
        like_count,
        dislike_count,
      },
      {
        where: { id: postId },
      }
    );
    if (newData) {
      res
        .status(200)
        .json({ message: `${type.toUpperCase()} updated successfully` });
    } else {
      res.status(404).json({ message: "insufficient data" });
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
