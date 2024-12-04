import { useParams } from 'react-router-dom'
import Navbar from '../../components/common/Navbar'
import VideoLessonsSidebar from  '../../components/common/VideoLessonsSidebar'
import { useEffect } from 'react'

const VideoLessonsDashboard = () => {
    const {id} = useParams();
    
    // useEffect(() =>{
    //     console.log(id)
    // },[id])
    return (
        <div className='bg-white text-black dark:bg-black dark:text-white min-h-[100svh] flex'>
            <div className='w-full max-w-[300px] py-4'>
                <VideoLessonsSidebar  />
            </div>
            <div className='relative'>
                <Navbar maxWidth={300} />
                <h2 className='text-xl text-white mt-20 ml-10'>{id ? "yes" :"no"} sdfdf</h2>
            </div>
        </div>
    )
}

export default VideoLessonsDashboard