import { Router } from 'express';
import tokenValidation from '../utils/tokenValidation';
import LoginController from '../controllers/login.controller';

const router = Router();
const controller = new LoginController();

router.post('/', controller.login);
router.get('/validate', tokenValidation, controller.loginValidation);

export default router;
