const TikAPI = require('tikapi').default;
const dotenvLoad = require('dotenv-load');
dotenvLoad('.env.local');

const api = TikAPI(process.env.NEXT_SERVER_TIKAPI);

console.log('test')
console.log(api)