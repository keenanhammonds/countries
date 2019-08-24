const Country = require("../models/Country");
const dataJson = require("./data.json");

let countryData = dataJson.map(item => {
  let obj = {
    name: item.name,
    region: item.region,
    population: item.population,
    currency: item.currencies[0].name
  };
  return obj;
});

Country.remove({});

Country.collection
  .insert(countryData)
  .then(country => {
    console.log(country);
  })
  .catch(err => {
    console.log(err);
  });
