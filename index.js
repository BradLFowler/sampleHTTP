const axios = require('axios')

axios.head('https://austincodingacademy.com/')
    .then((res) => {
        console.log(res)
    })