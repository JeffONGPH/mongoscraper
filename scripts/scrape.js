var request = require("request");
var cheerio = require("cheerio");

//scrape manunited news
var scrape = function(callback) {

  var articlesArr = [];

  request("https://www.skysports.com/manchester-united-news", function(error, response, html) {

      var $ = cheerio.load(html);


      $("h4.news-list__headline").each(function(i, element) {

          var result = {};

          
          result.title = $(this).children("a").text();
          result.link = $(this).children("a").attr("href");

          if (result.title !== "" && result.link !== "") {
              articlesArr.push(result);
          }
      });
      callback(articlesArr);
  });

};

module.exports = scrape;
