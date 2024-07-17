import { comments } from "@/database/comments";
export default function handler(req, res) {
  const { comId } = req.query;
  if (req.method === "DELETE") {
    const index = comments.findIndex((c) => c.id.toString() === comId);
    comments.splice(index, 1);
    res.status(200).json(comments);
  } else if (req.method === "PATCH") {
    const { text } = req.body;
    const index = comments.findIndex((c) => c.id.toString() === comId);
    comments[index].text = text;
    res.status(200).json(comments);
  }
}
