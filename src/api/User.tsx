import client from './client';

const ENDPOINTS = '/users';

export class User {
  public getUsers(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      client
        .get(ENDPOINTS + `?token=${token}`)
        .then(async (res: any) => {
          const user = {
            username: res?.data[0]?.username,
            id: res?.data[0]?.id,
            email: res?.data[0]?.email,
          };

          resolve({user});
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
