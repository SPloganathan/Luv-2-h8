const passport = require("passport");
const { User } = require("../models");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const currentUser = await User.findOne({ where: { id } });
  done(null, currentUser);
});
