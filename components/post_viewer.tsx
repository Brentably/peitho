import React, { FormEvent, useState } from "react";
// import Video from '../components/video';

// export interface Video {
//     video_id: string
//     video: Video
// }

// export interface IvideosProps {
//     video: string
//     mutate: () => void
// }

// export interface IasyncStateProp {
//     status: string
// }

// const url_src = "https://www.youtube.com/embed/q_HN-Mr77ow";


// export default function PostViewer() {

//     const [currentState, setCurrentState] = useState<IasyncStateProp | null>({status: 'not_started'});
    
//     const updateState = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
//         setCurrentState({status: 'in_progress'})
//     }

//     return (
//         <div>
//             <h4>{currentState?.status}</h4>
//             <div>
//                 <button 
//                 className="bg-green-500 rounded" onClick={updateState}>
//                 Trollin</button>
//             </div>
//             <Video src={url_src}/>
//         </div>
//     );

// }
        