const CSVToJSON = require ('csvtojson');
const fs = require('fs');


CSVToJSON().fromFile('../related.csv').then(source => {
  fs.writeFileSync("../related.json", JSON.stringify(source));
});
