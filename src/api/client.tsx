import {create} from 'apisauce';

import {CatchStore} from '../Utility/Catch';

const catchStore = new CatchStore();

const apiClient = create({
  baseURL: 'http://d5ee5aed8ffa.ngrok.io',
});

const get = apiClient.get;

apiClient.get = async (url: string, params: any, axiosConfig: any) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    catchStore.setStored(url, response.data);
  }

  const data = await catchStore.getStored(url);

  return data ? data : response;
};

export default apiClient;
