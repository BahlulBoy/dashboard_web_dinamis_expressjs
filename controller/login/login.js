const database = require("../../config/database_config");

module.exports = {
    login(req, res) {
        res.render("./login/index", {layout : './layout/loginlayout.ejs'})
    },
    loginauth(req, res){
        var username = req.body.username
        var password = req.body.password
        if (username && password) {
            database.getConnection((err, connection) => {
                connection.query('SELECT username, password FROM user WHERE username=' + "'" + username + "'" + ' AND password=' + 'MD5(' + password + ')', function (err, result, field) {
                    if (result.length > 0) {
                        req.session.loginid = true
                        req.session.username = username.toString()
                        res.redirect('/admin')
                    } else {
                        res.redirect('/login')
                    }
                    connection.release()
                })
            })
        }
    }
}
