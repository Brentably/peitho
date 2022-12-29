import type { NextApiRequest, NextApiResponse } from 'next';
import TikAPI from 'tikapi';

interface KeywordOccurence {
    text: string;
    value: number;
}

function getKeywords(descs: string[]): KeywordOccurence[] {
    let count_occurence = new Map<string, number>();
    descs.forEach((desc: string) => {
        let tokens = desc.split(' ')
        tokens.forEach((token: string) => {
            let curr_mapping = count_occurence.get(token)
            if (curr_mapping !== undefined) {
                count_occurence.set(token, curr_mapping + 1)
            } else {
                count_occurence.set(token, 1)
            }
        })
    })
    return Array.from(count_occurence.entries()).map(([text, value]: [string, number]) => {return {text: text, value: value}});

}

async function searchUser(req: NextApiRequest, res: NextApiResponse) {
    const api = TikAPI(process.env.NEXT_SERVER_TIKAPI);
    try {
        let username = JSON.parse(req.body).username;
        let user_secUID_res = await api.public.check({username: username});
        let user_secUID = await user_secUID_res.json;
        let secUID = user_secUID.userInfo.user.secUid;
        let user_videos_res = await api.public.posts({secUid: secUID})
        let user_videos = await user_videos_res.json;
        console.log(user_videos_res)
        console.log(user_videos_res.headers)
        let video_response = user_videos.itemList.map((video: any) => {
            return {
                video_desc: video.desc,
                views: video.stats.playCount,
                likes: video.stats.diggCount,
                comments: video.stats.commentCount,
            }
        })
        let res_body = {videos: video_response, keywords: getKeywords(video_response.map((vid: any) => {return vid.video_desc}))};
        console.log(res_body)
        res.status(200).json(res_body)
    } catch(err: any) {
        res.status(500).json({ error: 'failed to load data' });

    }
    

  }

export default (req: NextApiRequest, res: NextApiResponse) => {
    req.method === 'POST'
        ? searchUser(req, res)
        : res.status(404).json({error: "only POST"});
};