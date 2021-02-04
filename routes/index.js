const express = require("express");
const router = express.Router();
const Post = require("../models/post");
/* get post */
function  getPost(res) {
    Post.find({}, function(err, docs){
        if (err){
            console.log(err);
        }
        else{
            res.json(docs)
        }
    });
}
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});
router.get("/posts",function(req,res,next) {
 getPost(res)

})
module.exports = router