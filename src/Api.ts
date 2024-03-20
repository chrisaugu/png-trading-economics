import axios from 'axios';

const API_KEY = "ea4b236450e0484:ihy2ql4xlfq8crl";
const API_URL = `https://api.tradingeconomics.com`;

export default () => {
  // return new Promise((resolve, reject) => {
    let Axios = axios.create({
      baseURL: API_URL,
      params: {
          "c": API_KEY,
          "f": "json"
        },
      headers: {
        'x-apikey': `${API_KEY}`,
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'X-Custom-Header': 'foobar',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'x-access-token': "user.accessToken",
        'Authorization': 'Bearer ' + "user.accessToken"
        // 'Authorization': 'Basi\[c dGVzdDp0ZXN0'
      },
      withCredentials: true
    });
    // .then(response => {
    //   const data = response.data
    //   if (response.status === 200) {
    //     resolve(data)
    //   } else {
    //     reject(response)
    //   }
    // })
  // })

    return Axios;
}
