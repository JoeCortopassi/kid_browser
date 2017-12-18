"use strict";

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_axios2.default
  .get("http://joecortopassi.com")
  .then(function(response) {
    console.log("response", response);
  })
  .catch(function(error) {
    console.log("error", error);
  });
