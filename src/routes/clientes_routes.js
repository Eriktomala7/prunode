import { Router } from "express";
import { getClientes, getClientesid, postClientes, putClientes, patchClientes, deleteClientes } from "../controladores/clientesCtrl.js";
import authenticateJWT from '../middleware/authMiddleware.js'; // Importa el middleware

const router = Router();

// Armar nuestras rutas con el middleware de autenticación
router.get("/clientes", authenticateJWT, getClientes);
router.get("/clientes/:id", authenticateJWT, getClientesid);
router.post("/clientes", authenticateJWT, postClientes); // insertar
router.put("/clientes/:id", authenticateJWT, putClientes); // update
router.patch("/clientes/:id", authenticateJWT, patchClientes); // update parcial
router.delete("/clientes/:id", authenticateJWT, deleteClientes); // delete

export default router;
