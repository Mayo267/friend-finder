var friendData = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendData);
    });

    // app.post("/api/friends", function(req, res){
    //     //If results match close to input, push to...
    //     //something.push(req.body);
    //     //else....
    // });
    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        friendData.push(newFriend);
    });
};