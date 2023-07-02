const data = require('./data')
console.log(data.z())

const http = require('http')
http.createServer((req, res) => {
    res.write("<H1>Hello Kuldeep Soni</H1>")
    res.end()
}
).listen(3001)  // 3000 is port number
