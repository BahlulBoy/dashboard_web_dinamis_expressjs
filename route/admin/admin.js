const route = require("express").Router()

route.use('/profile', require('./profile'))
route.use('/anggota', require('./anggota'))
route.use('/berita', require('./berita'))
route.use('/periode', require('./periode'))
route.use('/proker', require('./proker'))
route.use('/user', require('./user'))
route.use('/', (req, res) => {
    res.send("haloo")
})

module.exports = route;