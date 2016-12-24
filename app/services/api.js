// a library to wrap and simplify api calls
import apisauce from 'apisauce';

const create = (baseUrl = 'http://127.0.0.1/api') => {
  // create and configure an apisauce-based api object.
  const api = apisauce.create({
    baseUrl,
    headers {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });


}