// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const apiEndpoint: string = 'https://m.tiktok.com/api/recommend/item_list/'
    const query = {
        'aid': '1988',
        'app_name': 'tiktok_web',
        'device_platform': 'web_pc',
        'lang': '',
        'count': '30',
        'from_page': 'fyp',
        'itemID': '1',
    }
    const params = new URLSearchParams(query)
    const url = apiEndpoint + '?' + params.toString()
    console.log(url)
    const response = await fetch(apiEndpoint + '?' + params.toString())
    console.log(response);
    console.log(await response.text());
    res.status(200).json({ name: "Johnny Doe"})
}
