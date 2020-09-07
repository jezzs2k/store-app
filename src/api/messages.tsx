import client from './client';

const ENDPOINTS = '/messages';

export class Message {
    public sendMessage(data: {
        listingId: string;
        message: string;
    }): Promise<any> {
        return new Promise(async (resolve, reject) => {
            client
                .post(ENDPOINTS, {
                    ...data,
                    id: require('shortid').generate(),
                    date: new Date()
                })
                .then((res: any) => {
                    resolve({ message: res?.data });
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    public getMessage(listingId: string): Promise<any> {
        return new Promise(async (resolve, reject) => {

            client.get(ENDPOINTS + `?listingId=` + data.listingId).then(res => {
                console.log(res)
            }).catch(error => {
                console.log(error);
                reject(error)
            })
        })
    }
}
