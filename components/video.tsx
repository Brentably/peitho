import React, { useRef, useState } from "react";


export interface IVideoProps {
  video: string
}

const Video = ({ video}: IVideoProps) => {
  const [playing, setPlaying] = useState<boolean>(false)
  const vidRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
      if (playing) {
        pause()
      } else {
        play()
      }

  }

  const pause = () => {
    if (vidRef.current !== null) {
      vidRef.current.pause()
      setPlaying(false)
    }
  }

  const play = () => {
    if (vidRef.current !== null) {
      vidRef.current.play()
      setPlaying(true)
    }
  }

  return ( 
        (<div className='relative w-full h-full'>
          <div>
            <video 
            ref={vidRef} 
            loop
            muted={false}
            autoPlay={true}
            >
              <source
                src={video}
              />
            </video>
          </div>
          
          <div className='absolute top-0 left-0 w-full h-full' onClick={onVideoPress}></div>
          </div>
              )
    )
};

export default Video