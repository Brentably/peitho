const TikAPI = require('tikapi').default;
const dotenvLoad = require('dotenv-load');
dotenvLoad('.env.local');

const api = TikAPI(process.env.NEXT_SERVER_TIKAPI);

(async function(){
  try{
      let response = await api.public.hashtag({
          name: "lilyachty"
      });

      let hashtagId = response.json.challengeInfo.challenge.id;

      response = await api.public.hashtag({
          id: hashtagId
      });

      
      console.dir(response?.json);

      const videoItemList = response?.json.itemList
      for(let item of videoItemList) {
        

      }



      // infinite videos
      // while(response){
      //     let cursor = response?.json?.cursor;
      //     console.log("Getting next items ", cursor);

      //     response = await Promise.resolve(
      //         response?.nextItems()
      //     );
      // }
  }
  catch(err){
      console.log(err?.statusCode, err?.message, err?.json)
  }	
})();