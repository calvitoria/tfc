import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  constructor(private service = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    const { type, message } = await this.service.login(req.body);

    if (type === 'NOT_FILLED') {
      return res.status(400).json({ message });
    }
    if (type === 'NOT_FOUND') {
      return res.status(401).json({ message });
    }

    return res.status(200).json({ token: message });
  };

  public loginValidation = async (req: Request, res: Response) => {
    const { role } = req.body.decode;

    return res.status(200).json({ role });
  };
}
