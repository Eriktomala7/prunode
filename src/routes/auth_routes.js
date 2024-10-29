import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();
const SECRET_KEY = process.env.JWT_SECRET_KEY || "pryapi";

// Endpoint temporal de login para generar el token
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Datos de prueba para la autenticación
    if (username === "admin" && password === "1234") {
        const user = { username: "admin" }; // Datos mínimos en el token

        // Genera el token con una expiración de 1 hora
        const accessToken = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
        res.json({ accessToken });
    } else {
        res.status(401).json({ message: "Credenciales incorrectas" });
    }
});

export default router;
