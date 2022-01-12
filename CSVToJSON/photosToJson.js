const CSVToJSON = require ('csvtojson');
const fs = require('fs');


CSVToJSON().fromFile('../photos.csv').then(source => {
  fs.writeFileSync("../photos.json", JSON.stringify(source));
});
