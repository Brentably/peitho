import React, { useState } from "react";
import { NextPage } from "next";
import Video from "../components/video";

const videoURLs = [
    'https://v16m-webapp.tiktokcdn-us.com/ec847088e2e94b54e83da3f120628824/63a6433f/video/tos/useast2a/tos-useast2a-ve-0068c002/ocLknco0tAI9YcqkQzIxayA0chgkfCTsujEUML/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=616&bt=308&cs=0&ds=3&ft=4KLMeMzm8Zmo0U2OU64jVhBrdpWrKsdm&mime_type=video_mp4&qs=0&rc=Nmk7PGQ2N2k3aTlmOWdpN0BpM3ZoOWU6Zm05aDMzNzczM0AzLTNhNWE0NTIxYS5jYmBjYSNubGVrcjRvcGZgLS1kMTZzcw%3D%3D&l=202212231807401E823550164BEC8CDC55',
    'https://v16m-webapp.tiktokcdn-us.com/2382cb4f0134bcd8bee5201d9ecb32f5/63a643ac/video/tos/useast2a/tos-useast2a-ve-0068c001/oEBxAcngPe8PXE7gQjDnAMb6oxfyQdC7BJHDcR/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=892&bt=446&cs=0&ds=3&ft=4KLMeMzm8Zmo0_JOU64jV1Y.dpWrKsdm&mime_type=video_mp4&qs=0&rc=NjdlNTQ5PGU0NDM8ODllNUBpam03eTM6Zmp1aDMzNzczM0BfMmMwXl9eNi8xY2JeYDNjYSNycGAycjRvYi5gLS1kMTZzcw%3D%3D&l=2022122318085916655C77432EB6AB6AEA'
]

const Feed: NextPage = () => {

  const [videos, setVideos] = useState<string[]>(videoURLs)

  return (
    <div>
        <h4>TikTok Clone</h4>
        <div id="videos_container">
        {videos.map((video: string, index: number) => {
            return <Video key={video + index.toString()} video={video}  />
        })}
        </div> 
    </div>
  
  )
}

export default Feed;