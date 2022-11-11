import  express from "express";
import {getPostsBySearch ,createPost, getPosts,updatePost,deletePost,likePost,getPost,commentPost} from "../controllers/post.js";
import auth from "../middleware/auth.js"
const router = express.Router()

router.get("/search",getPostsBySearch)
router.get("/",getPosts)
router.post('/',auth,createPost)
router.patch("/:id",auth,updatePost)
router.delete("/:id",auth,deletePost)
router.patch('/:id/likePost',auth,likePost)
router.get('/:id',getPost)
router.post('/:id/commentPost', auth,commentPost)


export  default router;