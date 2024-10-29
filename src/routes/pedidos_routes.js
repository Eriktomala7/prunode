import { Router } from "express";
import {
    getpedidos,
    getpedidosid,
    postpedidos,
    putpedidos,
    patchpedidos,
    deletepedidos
} from "../controladores/pedidosctrl.js";
import authenticateJWT from "../middleware/authMiddleware.js"; // Asegúrate de que la ruta sea correcta

const router = Router();

// Rutas protegidas con JWT
router.get("/pedidos", authenticateJWT, getpedidos);
router.get("/pedidos/:id", authenticateJWT, getpedidosid);
router.post("/pedidos", authenticateJWT, postpedidos); // Insertar
router.put("/pedidos/:id", authenticateJWT, putpedidos); // Update
router.patch("/pedidos/:id", authenticateJWT, patchpedidos); // Update partial
router.delete("/pedidos/:id", authenticateJWT, deletepedidos); // Delete

export default router;
