import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import { Usuario } from '../models/Usuario';

export const configureLocalStrategy = (passport) => {
  passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const user = await Usuario.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'No se encontró el usuario' });
      }

      const match = await bcrypt.compare(password, user.contraseña);
      if (match) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Contraseña incorrecta' });
      }
    } catch (err) {
      return done(err);
    }
  }));
};
