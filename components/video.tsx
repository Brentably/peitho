import React, { useRef, useState } from "react";


export interface IVideoProps {
  video: string
  autoplay: boolean
}

const Video = ({ video, autoplay}: IVideoProps) => {
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
        (<div className='snap-always snap-start'>
            <video 
            ref={vidRef} 
            loop
            muted={false}
            autoPlay={autoplay}>
              <source src={video} />
            </video>
          
          <div className='absolute top-0 left-0 w-full h-full snap_start' onClick={onVideoPress}></div>
          </div>
              )
    )
};

export default Video