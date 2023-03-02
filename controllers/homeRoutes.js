const { Post, Business, User, Category } = require("../models");

const router = require("express").Router();

//  renders the login view
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("logInSignUpView");
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

// this is going to render the category view when category button is pressed
router.get("/category", async (req, res) => {
  try {
    const categoryData = await Category.findAll();

    const categories = categoryData.map((category) =>
      category.get({ plain: true })
    );

    res.render("categoryView", {
      categories,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// this is going to render the postsbased on the category name when category card button is pressed

router.get("/categoryPosts/:id", async (req, res) => {
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
          where: { category_id: req.params.id },
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("focusedCategoryView", {
      posts,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// the below route will render the focused category view based on the user ID
router.get("/myPosts/:id", async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.params.id },
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

    res.render("focusedCategoryView", {
      posts,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// the below route will render the 'add new post' page
router.get("/newPost", async (req, res) => {
  try {
    const categoryData = await Category.findAll();

    const categories = categoryData.map((post) => post.get({ plain: true }));

    res.render("newPostView", {
      categories,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// the below route will render the 'add new business' page
router.get("/newBusiness", async (req, res) => {
  try {
    const categoryData = await Category.findAll();

    const categories = categoryData.map((post) => post.get({ plain: true }));

    res.render("addingBusiness", {
      categories,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
