var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 5000");
});

app.get("/"),(req, res) => {
    res.json{[]}
}