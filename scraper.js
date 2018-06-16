var request = require("request");
var cheerio = require("cheerio");

dofusIdClasses = [
  '6-ecaflip',
  '7-eniripsa',
  '8-iop',
  '9-cra',
  '1-feca',
  '11-sacrieur',
  '10-sadida',
  '2-osamodas',
  '3-enutrof',
  '4-sram',
  '5-xelor',
  '12-pandawa',
  '13-roublard',
  '14-zobal',
  '15-steamer',
  '16-eliotrope',
  '17-huppermage',
  '18-ouginak'
];
for (i in dofusIdClasses) {
  request({
    uri: "https://www.dofus.com/fr/mmorpg/encyclopedie/classes/"+i,
  }, function(error, response, body) {
    console.log(body);
    var $ = cheerio.load(body);
  });
};