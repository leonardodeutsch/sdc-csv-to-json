const CSVToJSON = require ('csvtojson');
const fs = require('fs');


CSVToJSON().fromFile('../features.csv').then(source => {
  fs.writeFileSync("../features.json", JSON.stringify(source));
});
