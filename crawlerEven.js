//var request = request("request");
//var cheerio = request("cheerio");
//
// request({
//    url: "http://blog.infographics.tw",
//    method: "GET"
//  }, function(e,r,b) {
//    if(!e) console.log(b);
//  });

  var request = require("request");
//  var fs = require("fs");
  var cheerio = require("cheerio");
  request({
    url: "https://www.litv.tv/",
    method: "GET"
  }, function(e,r,b) {
    if(e || !b) { return; }
    var $ = cheerio.load(b);
    var result = [];
    var titles = $("li.als-item h3");
    for(var i=0;i<titles.length;i++) {
      result.push($(titles[i]).text());
    }
//    fs.writeFileSync("result.json", JSON.stringify(result));
      console.log(JSON.stringify(result))
  });