const fs = require('fs')



for (let index = 0; index < 3; index++) {
    fs.mkdir(`./tes${index}/tes`, {recursive: true}, (e) => {
        console.log(e)
    })
}

