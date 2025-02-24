const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated.js");
const upload = require("../middlewares/multer.js");
const { addNewPost, getAllPost, getUserPost, likePost, dislikePost, addComment, getCommentsOfPost, deletePost, bookmarkPost } = require("../controllers/post.controller.js");

const router = express.Router();

router.route("/addpost").post(isAuthenticated, upload.single('image'), addNewPost);
router.route("/all").get(isAuthenticated,getAllPost);
router.route("/userpost/all").get(isAuthenticated, getUserPost);
router.route("/:id/like").get(isAuthenticated, likePost);
router.route("/:id/dislike").get(isAuthenticated, dislikePost);
router.route("/:id/comment").post(isAuthenticated, addComment); 
router.route("/:id/comment/all").get(isAuthenticated, getCommentsOfPost);
router.route("/delete/:id").delete(isAuthenticated, deletePost);
router.route("/:id/bookmark").get(isAuthenticated, bookmarkPost);

module.exports = router;

