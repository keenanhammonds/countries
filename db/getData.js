const axios = require('axios');
const fs = require('fs')

const url = 'https://restcountries.eu/rest/v2/all';

axios.get(url).then(response => {
    let stringified = JSON.stringify(response.data)
    
    fs.writeFile('./db/data.json', stringified, err => {
        if (err) {
            console.log(err)
        }
    })
})