const data = require("./data.json");
const Country = require("../models/Country");
const Currency = require("../models/Currency");

Country.remove({}).then(() => {
  Currency.remove({}).then(() => {
    countries = [];
    currencies = [];
    data.forEach(country => {
      countries.push({
        name: country.name,
        region: country.region,
        subregion: country.subregion
      });

      // 1. Insert countries into Country collection
      //    - insert array of objects into the collection 
        // Country.collection.insertMany(countries).then(item => console.log(item)).catch(err => console.log(err))



        Country.collection.insert(countries, function (err) {
          if (err){ 
              return console.error(err);
          } else {
            console.log("Multiple documents inserted to Collection");
          }
        });

      // Country.create(countries);

      // 2. Insert currencies into Currency collection
      //  Option A:
            //    - loop through currencies array
      for(let i = 0; i < currencies.length; i++){
           //    - query Currency for currency with name of current currency
        Currency.collection.find({name: currencies[i].name}).exec(function(err, currency){
            
          //    - if undefined, then insert. else, skip
          if(err || !currency){
            console.log(err);
            console.log(`not found and inserting ${collection[i].name} into collection`)
            Currency.collection.insert(currencies[i]);
          }
        })
      };
    });
  });
})




 

      //  Option B:
      //    - research how to dedupe an array of objects
      //    - insert array into Currency collection
      // 3. Associate country and currency
      //    - Loop through data again
      //    - find country with name of current country in DB
      //    - loop through currencies ----
      //    - find currency with name of current currency ---
      //    - add currency ID to country currencies

