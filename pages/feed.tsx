import React, { useState } from "react";
import { NextPage } from "next";
import Video from "../components/video";
import Modal from "../components/modal";

const videoURLs = [
    'https://www.tiktok.com/@theorchdorkteacher/video/7130046760541605163?is_from_webapp=1&sender_device=pc&web_id=7178978984079328811',
    'https://www.tiktok.com/@ducks_in_space/video/7164449207980510507?is_from_webapp=1&sender_device=pc&web_id=7178978984079328811',
    'https://www.tiktok.com/@chinpals/video/7119522362294422827?is_from_webapp=1&sender_device=pc&web_id=7178978984079328811'
]

const Feed: NextPage = () => {

  const [videos, setVideos] = useState<string[]>(videoURLs)

  return (
    <div className='bg-stone-400 h-screen' >
      <div className='grid grid-rows-4 grid-flow-col gap-4 auto-rows-auto justify-items-center'>
        <Modal></Modal>
        <Modal></Modal>
        <Modal></Modal>
      </div>
      
    </div>
  
  )
}

export default Feed;