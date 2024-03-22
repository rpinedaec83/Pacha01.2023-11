import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Usuario } from '../models/Usuario';

export const configureGoogleStrategy = (passport) => {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const existingUser = await Usuario.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }

      const newUser = await new Usuario({
        googleId: profile.id,
        nombre: profile.name.givenName,
        apellidos: profile.name.familyName,
        email: profile.emails[0].value,
        // contraseña: No necesitamos una contraseña aquí ya que es una autenticación OAuth
      }).save();

      done(null, newUser);
    } catch (err) {
      done(err, null);
    }
  }));
};
