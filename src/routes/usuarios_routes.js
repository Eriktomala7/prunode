import { Router } from "express";
import {
    getusuarios,
    getusuariosid,
    postusuarios,
    putusuarios,
    patchusuarios,
    deleteusuarios
} from "../controladores/usuariosctrl.js";
import authenticateJWT from "../middleware/authMiddleware.js"; // Asegúrate de que la ruta sea correcta

const router = Router();

// Rutas protegidas con JWT
router.get("/usuarios", authenticateJWT, getusuarios);
router.get("/usuarios/:id", authenticateJWT, getusuariosid);
router.post("/usuarios", authenticateJWT, postusuarios); // Insertar
router.put("/usuarios/:id", authenticateJWT, putusuarios); // Update
router.patch("/usuarios/:id", authenticateJWT, patchusuarios); // Update partial
router.delete("/usuarios/:id", authenticateJWT, deleteusuarios); // Delete

export default router;
