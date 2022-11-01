import * as jwt from 'jsonwebtoken';
// import * as dotenv from 'dotenv';

// dotenv.config();

const secret: string = process.env.JWT_SECRET || 'jwt_secret';

const tokenGenerator = (email:string, role:string) => {
  const payload = { email, role };

  try {
    const token = jwt.sign(payload, secret);
    return token;
  } catch (err) {
    console.log(err);
  }
};

export default tokenGenerator;
