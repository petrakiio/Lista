import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CreateUser } from "./controller/cadastroController.js";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, "view")));

app.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "view", "templates", "cadastro.html"));
});

app.post("/users", async (req, res) => {
    const result = await CreateUser(req.body);

    if (!result) {
        res.status(400).json({ success: false, message: "Erro ao criar conta" });
        return;
    }

    res.status(201).json({ success: true, message: "Conta criada com sucesso" });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
