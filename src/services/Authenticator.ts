import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../model/User";


export type AuthenticationData = {
  id:string,
  role:USER_ROLES
}

export class Authenticator {
  public generate(input: AuthenticationData): string {
    const token = jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: process.env.EXPIRE_TOKEN,
    });
    return token;
  }

  public getTokenData(token: any): AuthenticationData {
    const data = jwt.verify(token, process.env.JWT_KEY as string);
    return data as AuthenticationData;
  }
}