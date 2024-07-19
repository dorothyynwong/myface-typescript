import express from "express";
import parser from 'dom-parser';
import { CreatePostRequest } from "../models/api/createPostRequest";
import {
  createPost,
  dislikePost,
  getPageOfPosts,
  likePost,
} from "../services/postService";
import { body, validationResult } from "express-validator";
import { format } from "date-fns";

const router = express.Router();

router.get("/", async (request, response) => {
  const page = request.query.page ? parseInt(request.query.page as string) : 1;
  const pageSize = request.query.pageSize
    ? parseInt(request.query.pageSize as string)
    : 10;

  const postList = await getPageOfPosts(page, pageSize);
  return response.render("post_list", {
    postList: postList,
    format: format,
  });
});

router.get("/create/", async (request, response) => {
  return response.render("create_post");
});

router.post(
  "/create/",
  body("message").notEmpty(),
  body("imageUrl").notEmpty(),
  async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }
    const post = request.body;

    await createPost(post as CreatePostRequest);
    return response.redirect("/posts/");
  }
);

router.get("/:postId/like/", async (request, response) => {
  const postId = request.params.postId;
  const doc = await fetchPosts(postId);
  console.log(doc);
});

router.post("/:postId/like/", async (request, response) => {
  const userId = 1; // For now, just assume that we are user 1
  const postId = parseInt(request.params.postId);
  const returnUrl = request.params?.returnUrl;

  await likePost(userId, postId);
 // response.redirect(returnUrl || "/posts/");
});

router.post("/:postId/dislike/", async (request, response) => {
  const userId = 1; // For now, just assume that we are user 1
  const postId = parseInt(request.params.postId);
  const returnUrl = request.params?.returnUrl;

  await dislikePost(userId, postId);
  response.redirect(returnUrl || "/posts/");
});

export default router;

async function fetchPosts(postId: string) {
  try {
      const response = await fetch("http://localhost:3001/posts/1002/like/");
      const htmlString = await response.json();
      console.log(response.status);
      return htmlString;
  } catch (error) {
      console.error('Error fetching or parsing HTML:', error);
  }
}