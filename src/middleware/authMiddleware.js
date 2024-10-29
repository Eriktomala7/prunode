import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "pryapi";

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Token inválido" });
            }
            req.user = user; // Agrega los datos del usuario a la solicitud
            next();
        });
    } else {
        res.status(401).json({ message: "Token no proporcionado" });
    }
};

export default authenticateJWT;
