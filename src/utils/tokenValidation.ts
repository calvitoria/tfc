import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

const secret: string = process.env.JWT_SECRET || 'jwt_secret';

const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Token must be a valid token',
    });
  }

  try {
    const decode = jwt.verify(req.headers.authorization as string, secret);
    req.body.decode = decode;
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
};
export default tokenValidation;
