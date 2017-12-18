"use strict";

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var url = "https://search.kidzsearch.com/kzwikisearch.php?q=whale%20shark";
_axios2.default
  .get(url)
  .then(function(response) {
    var $ = _cheerio2.default.load(response.data);
    console.log(response.data);
    console.log($);
    var links = $(".gs-title");
    console.log(links.toArray());
  })
  .catch(function(error) {
    console.log("error", error);
  });
