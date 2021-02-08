const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const uploadModel = require("./uploads");

/* data Save */
router.post("./upload", upload, function(req, res, next){
    const imageFile = req.file.filename+"uploaded successfully";

    const imageDetails = new uploadModel({
        imageName : imageFile
    });
    imageDetails.save(function(err, docs){
        if(err) throw err;
        
        res.render("upload-file", {title: "files", success:success})
    })
})


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
