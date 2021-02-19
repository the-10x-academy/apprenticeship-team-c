const express = require("express");
const router = express.Router();
const Post = require("../models/post");
const multer = require("multer");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
});


//------------- updating likes count(handling patch req)---------------------

router.patch('/likes/:id', async (req, res) => {
    try {
        const id = req.params.id
        const updates = req.body
        const result = await Post.findByIdAndUpdate(id,updates)
        res.send(result)
    }
    catch (err) {
        console.log(err.message)
    }
})



// ----------------saving post(handling post request)-------------------------
var upload = multer({ storage: storage });

router.post("/upload", upload.single('file'), function (req, res, next) {
    var data = {
        author: req.body.author,
        location: req.body.location,
        filePath: req.file.path.replace("public", ""),
        caption: req.body.caption,
        reaction: req.body.reaction
    }
    console.log("data: ", data)

    const Profile = new Post({
        author: data.author,
        location: data.location,
        filePath: data.filePath,
        caption: data.caption,
        reaction: data.reaction
    });
    console.log("profile: ", Profile)
    Profile.save((err, docs) => {
        if (err) console.log(err);
        console.log(docs);
    });
    res.sendStatus(201)


})


/* get post */
function getPost(res) {
    Post.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(docs)
        }
    });
}
/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});
router.get("/posts", function (req, res, next) {
    // console.log("hitted post api")
    getPost(res)

})
module.exports = router
