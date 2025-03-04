import { Router } from 'express';
import { registerUser } from '#controllers/userController.ts'; // ⚠️ Caminho relativo (sem alias)

const userRoutes = Router();

userRoutes.post("/user/create", registerUser);

export default userRoutes;