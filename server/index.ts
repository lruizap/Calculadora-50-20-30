import express from "express";
import { budgetRoutes } from "./routes/budgetRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    message: "Backend funcionando correctamente",
  });
});

app.use("/api/budget", budgetRoutes);

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
