const CSVToJSON = require ('csvtojson');
const fs = require('fs');


CSVToJSON().fromFile('../products.csv').then(source => {
  fs.writeFileSync("../products.json", JSON.stringify(source));
});
