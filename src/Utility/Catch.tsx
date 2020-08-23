import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';

const prefix = 'catch';
const timeOut = 30;

export class CatchStore {
  public setStored(key: any, value: any): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const item = {value, timestamp: Date.now()};
        await AsyncStorage.setItem(`${prefix}${key}`, JSON.stringify(item));
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  public getStored(key: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      AsyncStorage.getItem(`${prefix}${key}`)
        .then(async (result: any) => {
          const item = JSON.parse(result);

          const now = moment(Date.now());
          const storeTimed = item.timestamp;

          const isExpired = now.diff(storeTimed, 'minutes') > timeOut;

          if (isExpired) {
            await AsyncStorage.removeItem(`${prefix}${key}`);
            resolve(null);
          }

          resolve({ok: true, data: item.value});
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
