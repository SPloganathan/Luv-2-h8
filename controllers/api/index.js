//modularizing the routes
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");
const businessRoutes = require("./businessRoutes");
const postRoutes = require("./postRoutes");

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/businesses", businessRoutes);
router.use("/posts", postRoutes);
module.exports = router;
