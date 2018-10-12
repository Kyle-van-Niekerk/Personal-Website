var express = require("express"),
    app = express();
    
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("index");
});

app.get("/portfolio", function(req, res){
    res.render("portfolio");
});

app.listen(process.env.PORT, process.env.IP,function(){
    console.log("Server Is Running!");
});