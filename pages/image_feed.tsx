import React, { useState } from "react";
import { NextPage } from "next";
import Image from "../components/image";

const imageURLs = [
    'https://cdn.pixabay.com/photo/2017/10/26/17/39/server-2891812_960_720.jpg',
    'https://cdn.pixabay.com/photo/2018/03/15/10/35/website-3227784__340.jpg',
    'https://cdn.pixabay.com/photo/2021/10/09/13/21/man-6694180__340.png',
]

const ImageFeed: NextPage = () => {

  const [images, setImages] = useState<string[]>(imageURLs)

  return (
    <div >
        <h4>Instagram Clone!!!</h4>
        <div className=''>
          <h2>Snapping almost done ..</h2>
        </div>
        <div id="images_container" className='max-h-screen overflow-y-scroll relative w-full snap-y snap-mandatory'>
        {images.map((image: string, index: number) => {
            return <Image key={image + index.toString() } image={image}   />
        })}
        </div> 
    </div>
  
  )
}

export default ImageFeed;