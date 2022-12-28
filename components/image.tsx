import React, { useRef, useState } from "react";


export interface IImageProps {
  image: string
}

const Image = ({ image}: IImageProps) => {
  const [playing, setPlaying] = useState<boolean>(false)
  const imgRef = useRef<HTMLImageElement>(null);

  // const onImagePress = () => {
  //     if (playing) {
  //       pause()
  //     } else {
  //       play()
  //     }

  // }

  // const pause = () => {
  //   if (imgRef.current !== null) {
  //     setPlaying(false)
  //   }
  // }

  // const play = () => {
  //   if (imgRef.current !== null) {
  //     setPlaying(true)
  //   }
  // }

  return ( 
        (<section className='snap-always snap-start shrink-0 border w-full h-screen'>
            <img
            className='shrink-0'
            ref={imgRef}
            src={image} >
            </img>
          
          </section>
              )
    )
};

export default Image