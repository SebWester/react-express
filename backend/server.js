import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from express👋" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}🚀`);
});
