import { Router } from "express";
import {
    getproductos,
    getproductosid,
    postproductos,
    putproductos,
    patchproductos,
    deleteproductos
} from "../controladores/productoctrl.js";
import authenticateJWT from "../middleware/authMiddleware.js"; // Asegúrate de que la ruta sea correcta

const router = Router();

// Rutas protegidas con JWT
router.get("/productos", authenticateJWT, getproductos);
router.get("/productos/:id", authenticateJWT, getproductosid);
router.post("/productos", authenticateJWT, postproductos); // Insertar
router.put("/productos/:id", authenticateJWT, putproductos); // Update
router.patch("/productos/:id", authenticateJWT, patchproductos); // Update partial
router.delete("/productos/:id", authenticateJWT, deleteproductos); // Delete

export default router;
