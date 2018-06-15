var request = require("request");
var cheerio = require("cheerio");


console.log(list.html());

request({
  uri: "http://www.sitepoint.com",
}, function(error, response, body) {
  console.log(body);
  var $ = cheerio.load(body);
});