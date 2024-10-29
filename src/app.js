import express from "express";
import clientes_routes from "./routes/clientes_routes.js";
import usuarios_routes from "./routes/usuarios_routes.js";
import producto_routes from "./routes/producto_routes.js";
import pedidos_routes from "./routes/pedidos_routes.js";
import ped_det_routes from "./routes/ped_det_routes.js";
import auth_routes from "./routes/auth_routes.js"; 
import authenticateJWT from "./middleware/authMiddleware.js"; 

const app = express();
app.use(express.json());
app.use("/api", clientes_routes);
app.use("/api", usuarios_routes);
app.use("/api", producto_routes);
app.use("/api", pedidos_routes);
app.use("/api", ped_det_routes);
app.use("/auth", auth_routes); 


app.get("/api/protected", authenticateJWT, (req, res) => {
    res.json({ message: `Hola, ${req.user.username}. Esta es una ruta protegida.` });
});

app.use((req, res) => {
    res.status(404).json({ message: "Página no encontrada" });
});

export default app;
