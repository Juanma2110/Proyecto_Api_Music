const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //secretOrKey: process.env.SECRET_KEY
    secretOrKey: "domingo"
}

const jwt = new jwtStrategy(opts, (payload, done)=>{    
    return done(null, payload.username);
});

passport.use(jwt);