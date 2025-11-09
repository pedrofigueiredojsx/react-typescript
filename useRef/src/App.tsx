import React from 'react'
import videoSrc from './video.mp4'

function App() {
  const video = React.useRef<HTMLVideoElement>(null)

  React.useEffect(() => {
    console.log(video.current)
  }, [video])

  return (
    <>
      <div className='flex'>
        <button onClick={() => video.current?.play()}>Play</button>
        <button onClick={() => video.current?.pause()}>Pause</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </>
  )
}

export default App
