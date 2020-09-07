import client from './client';

import {setTokenStore} from '../Authcontext/StoreToken';

const ENDPOINTS = '/users';

export class Auth {
  public login(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      client
        .get(ENDPOINTS + `?email=${email}`)
        .then(async (res: any) => {
          if (res?.data[0]?.email !== email) {
            reject({msg: 'Invalid email and password !!'});
          }
          if (res?.data[0]?.password !== password) {
            reject({msg: 'Password wrong'});
          }
          const payload = {
            email: email,
            name: res?.data[0]?.name,
            id: res?.data[0].id,
            token: res?.data[0]?.token,
          };

          setTokenStore(res?.data[0]?.token);
          resolve({user: payload});
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public register(data: {
    email: string;
    password: string;
    name: string;
  }): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const userExits: any = await client.get(
        ENDPOINTS + `?email=${data.email}`,
      );
      if (userExits?.data?.length > 0) {
        reject({msg: 'Email have exists ?'});
        return;
      }
      const token = require('shortid').generate();

      client
        .post(ENDPOINTS, {
          ...data,
          token,
          id: require('shortid').generate(),
        })
        .then((res: any) => {
          setTokenStore(token);
          resolve({user: res?.data});
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
