const { Post, Business, User, Category } = require("../models");

const router = require("express").Router();

//  renders the login view
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// below route will clear the cookie and logout the user
router.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  } else {
    res.redirect("/");
  }
});

// this will render the homepage view
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

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homePage", {
      posts,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
