import error from "next/error";
import { type } from "os";
import { ChangeEvent, MouseEventHandler, useState, useRef, ChangeEventHandler, FormEvent } from "react";
// import PostViewer from '../components/post_viewer';


interface IVideoProps {
  video_desc: string;
  video_id: string;
  views: number;
  likes: number;
  comments: number;
}

interface IKeywordProps {
  text: string;
  value: number;
}

interface IAnalyticsProps {
  videos: IVideoProps[];
  keywords: IKeywordProps[];
}


const AnalyzeUser = () => {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('typing');
  const [posts, setPosts] = useState<IVideoProps[] | undefined>();
  const [keywords, setKeywords] = useState<IKeywordProps[] | undefined>();

  
  const handleTextareaChange = async (e: ChangeEvent<HTMLTextAreaElement>): Promise<void> => {
    setUsername(e.target.value)
  }

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();
    setStatus('submitting');
    try {
      await searchUser()
      setStatus('success');
    } catch (err) {

    }
  }

  const searchUser = async ():  Promise<void> => {
    if (username !== null || username !== '') {
      const response = await fetch("/api/search_user", {
          method: "POST",
          body: JSON.stringify({username: username})
      });
      let video_response: IAnalyticsProps = await response.json();
      video_response.videos.sort((a, b) => b.views - a.views)
      video_response.keywords.sort((a, b) => b.value - a.value)
      setPosts(video_response.videos)
      setKeywords(video_response.keywords)

  }
  }

  return (
    <div className='place-content-center'>
      <div>
        <h4>Search TikTok User</h4>
        <form onSubmit={handleSubmit}>
          <textarea
            className="border-2 rounded border-purple-200 hover:border-purple-500"
            value={username}
            onChange={handleTextareaChange}
            disabled={status === 'submitting'}
          />
          <br />
          <button 
          className='bg-purple-200 rounded-md'
          disabled={
            username.length === 0 ||
            status === 'submitting'
          }>
            Submit (Status: 
            {status})
          </button>
        </form>
      </div>
      {posts && keywords &&
        <div>
          <div>
            <h2>Top 10 Keywords</h2>
            <ul>
              {keywords.slice(0, 11).map((keyword: IKeywordProps, index: number) => {return (<li key={index.toString() + keyword.text}>{keyword.text}: {keyword.value}</li>)})}
            </ul>
          </div>
          <div className='justify-items-center'>
            {posts.map((post: IVideoProps) => {
              return (
                <div key={post.video_id}>
                <h2>{post.video_desc}</h2>
                <ul className='list-disc'>
                  <li>Views: {post.views}</li>
                  <li>Pct Liked: {Math.round((post.likes / post.views) * 100) / 100 }</li>
                  <li>Likes: {post.likes}</li>
                  <li>Comments: {post.comments}</li>
                </ul>
                </div>
              )
            })}
          </div>  
          
        </div>}
    </div>
  )
    
  
}

export default AnalyzeUser;