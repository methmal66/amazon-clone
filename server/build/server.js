var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 5000;
app.use(bodyParser.json());
app.use("/api/users", require("./routes/user"));
app.listen(port, function () { return console.log("server listning in port " + port); });
