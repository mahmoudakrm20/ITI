import { comments } from "@/database/comments";
import { v4 as uuidv4 } from "uuid";
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  }
  if (req.method === "POST") {
    console.log(req.body);
    const comment = req.body.com;
    const newComment = { id: uuidv4(), text: comment };
    comments.push(newComment);
    res.status(200).json(comments);
  }
}
