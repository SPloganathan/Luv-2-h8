//add imported files for image import/uploading to cloudinary
require("dotenv").config();
const path = require("path");
const fs = require("fs");
const { Post, User, Business, Category } = require("../models");
const cloudinary = require("cloudinary").v2;

//for connection with claudinary
cloudinary.config({
  cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.CLOUDINARY_API_SECRET}`,
  secure: true,
});

//new post creation (with images)
const createPost = async (req, res) => {
  try {
    // Get the path for the uploaded image that is provided by the multer middleware
    const imagePath = req.file?.path;
    // upload the image to cloudinary
    let image = null;
    if (imagePath) {
      image = await cloudinary.uploader.upload(imagePath, {effect: "pixelate_faces:30"});
    }

    // create the post on my database
    await Post.create({
      title: req.body.title,
      description: req.body.description,
      image1: image?.secure_url,
      business_id: req.body.business,
      user_id: req.session.user_id,
    });

    // Delete the uploaded image from our server
    if (imagePath) {
      fs.unlinkSync(imagePath, (err) => {
        if (err) {
          throw err;
        }
      });
    }
    res.status(201).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  createPost,
};
