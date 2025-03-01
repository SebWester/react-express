import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/api/hello", (req, res) => {
  console.log("JSON from /api/hello");
  res.json({ message: "Hello from express👋" });
});

app.get("/api/test", (req, res) => {
  console.log("JSON from /api/test");
  res.json({ ok: "More data from the server🧬" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}🚀`);
});
