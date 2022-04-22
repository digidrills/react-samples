import React from 'react'

class VideoList extends React.Component{

  selectVideo=(video)=>{
    //console.log(this.props.selectVideo())
     this.props.selectVideo({
       id:video.id,
       src:video.src,
       imgSrc: video.imgSrc
     })
  }
  
  render(){
   const {videos,activeVideo} = this.props
   console.log(activeVideo)
  return(
      <div className="video-scroll-list ">
        {videos.map((video,i)=>{
          return (
              <div  key={video.id}
                onClick={()=>this.selectVideo(video)}
                className={`videos ${video.id === activeVideo.id ? 'active' : '' }`}>
                <img src={video.imgSrc} width='120px' height='120px' />
              </div>
            
          )
        })}
      </div>
  )
  }
}

export default VideoList