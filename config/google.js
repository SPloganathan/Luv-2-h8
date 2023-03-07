const passport = require("passport");
const { User } = require("../models");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  // on successfull sign in with google the below call back will be used to create or validate a user
  new GoogleStrategy(
    {
      callbackURL: process.env.CALLBACK_URL,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value;
      const firstName = profile.name.givenName;
      const lastName = profile.name.familyName;

      const currentUser = await User.findOne({ where: { email } });

      if (!currentUser) {
        const newUser = await User.create({
          email,
          name: `${firstName} ${lastName}`,
        });
        return done(null, newUser);
      }

      return done(null, currentUser);
    }
  )
);
