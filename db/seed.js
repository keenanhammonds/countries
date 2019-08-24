const Country = require("./models/Country");
const Currency = require("./models/Currency");
const dataJson = require("../data.json");

let countryData = dataJson.map(item => {
  let obj = {
    name: item.name,
    region: item.region,
    population: item.population,
    currency: item.currency
  };
  return obj;
});

Country.remove({});

Country.collection
  .insert(CountryData)
  .then(country => {
    comsole.log(country);
  })
  .catch(err => {
    console.log(err);
  });
