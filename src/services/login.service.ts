import * as cript from 'bcryptjs'; // doc: https://www.npmjs.com/package/bcryptjs
// import Iuser from '../interfaces/Iuser';
import ILogin from '../interfaces/Ilogin';
import UsersModel from '../database/models/UsersModels';
import tokenGenerator from '../utils/tokenGenerator';
import Ires from '../interfaces/Ires';

export default class LoginService {
  private model;
  //   private role: string;

  constructor() {
    this.model = UsersModel;
  }

  public async login(newLogin: ILogin): Promise<Ires> {
    const { email, password } = newLogin;

    if (!email || !password) return { type: 'NOT_FILLED', message: 'All fields must be filled' };

    const userFromDB = await this.model.findOne({ where: { email } });

    if (userFromDB && cript.compareSync(password, userFromDB.password)) {
      const token = tokenGenerator(email, userFromDB.role);

      return { type: 'SUCCESS', message: token };
    }

    return { type: 'NOT_FOUND', message: 'Incorrect email or password' };
  }

//   public async loginValidation(decode:Iuser) {
//     this.role = decode.role;
//     return this.role;
//   }
}
