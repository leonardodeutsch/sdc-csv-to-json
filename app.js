const CSVToJSON = require ('csvtojson');
const fs = require('fs');


CSVToJSON({colParser: {"id": "number"}}).fromFile('../test.csv').then(source => {
  console.log(source);
  fs.writeFileSync("../test.json", JSON.stringify(source));
});
