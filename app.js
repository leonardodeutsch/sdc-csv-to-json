const CSVToJSON = require ('csvtojson');


CSVToJSON().fromFile('./products.csv').then(source => {
  console.log(source);
});
