import client from './client';

const ENDPOINTS = '/listings';

export class ListingsFactory {
  public async getListings(): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      client
        .get(ENDPOINTS)
        .then((res) => {
          resolve(res);
        })
        .catch((error: any) => {
          console.log(error);
          reject(error);
        });
    });
  }

  public async postList(
    listing: {
      title: string;
      price: number;
      category: any;
      imageUrls: {url: string; thumbnailUrl: string}[];
      location?: {latitude: number; longitude: number};
      description?: string;
    },
    _onUploadProgress: any,
  ): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
      const config = {
        onUploadProgress: _onUploadProgress,
      };
      const data: any = {};
      data.images = [];
      // const data: any = new FormData();

      // data.append('id', Math.random() * 1000);
      data.id = Math.random() * 1000;
      // data.append('title', listing.title);
      data.title = listing.title;
      // data.append('price', listing.price);
      data.price = listing.price;
      // data.append('categoryId', listing.category.id);
      listing.imageUrls.forEach((image, index) => {
        data.images = [
          ...data.images,
          {
            name: 'image' + `${index}`,
            type: 'image/jpeg',
            url: image,
          },
        ];
      });
      if (listing.location) {
        // data.append('location', listing.location);
        data.location = listing.location;
      }
      if (listing.description) {
        // data.append('description', listing.description);
        data.description = listing.description;
      }

      client
        .post(ENDPOINTS, data, config)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
