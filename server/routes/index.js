var getStudentsHandler = require("../handlers/getStudentsHandler");
var fallbackHandler = require("../handlers/fallbackHandler");

var passport = require("passport");

require("../passport")();

module.exports = app => {
  app.get(
    "/getStudents",
    passport.authenticate("jwt", { session: false }),
    getStudentsHandler
  );

  app.get("/", fallbackHandler);
};
