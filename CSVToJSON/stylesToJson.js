const CSVToJSON = require ('csvtojson');
const fs = require('fs');


CSVToJSON().fromFile('../styles.csv').then(source => {
  fs.writeFileSync("../styles.json", JSON.stringify(source));
});
