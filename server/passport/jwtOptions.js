const { ExtractJwt } = require('passport-jwt');
var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'mysecret';

module.exports = jwtOptions;
