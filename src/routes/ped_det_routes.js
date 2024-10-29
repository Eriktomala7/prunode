import { Router } from "express";
import {
    getpedidosdet,
    getpedidosdetid,
    postpedidosdet,
    putpedidosdet,
    patchpedidosdet,
    deletepedidosdet
} from "../controladores/ped_detctrl.js";
import authenticateJWT from "../middleware/authMiddleware.js"; // Asegúrate de que la ruta sea correcta

const router = Router();

// Rutas protegidas con JWT
router.get("/pedidosdetalle", authenticateJWT, getpedidosdet);
router.get("/pedidosdetalle/:id", authenticateJWT, getpedidosdetid);
router.post("/pedidosdetalle", authenticateJWT, postpedidosdet); // Insertar
router.put("/pedidosdetalle/:id", authenticateJWT, putpedidosdet); // Update
router.patch("/pedidosdetalle/:id", authenticateJWT, patchpedidosdet); // Update partial
router.delete("/pedidosdetalle/:id", authenticateJWT, deletepedidosdet); // Delete

export default router;
