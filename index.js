// const data = require('./data')
// console.log(data.z())

const http = require('http')
http.createServer((req, res) => {
    res.end("<H1>Hello Kuldeep Soni</H1>")
}
).listen(3000)  // 3000 is port number
