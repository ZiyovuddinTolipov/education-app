import { useParams } from 'react-router-dom'
import Navbar from '@/components/common/Navbar'
import VideoLessonsSidebar from  '@/components/common/VideoLessonsSidebar'
import { useEffect } from 'react'
import VideoLessonById from '@/components/common/VideoLessonById'

const VideoLessonsDashboard = () => {
    const {id} = useParams();
    
    // useEffect(() =>{
    //     console.log(id)
    // },[id])
    return (
        <div className='bg-white text-black dark:bg-black dark:text-white min-h-[100svh] flex overflow-y-hidden'>
            <div className='w-full max-w-[300px] py-4'>
                <VideoLessonsSidebar  />
            </div>
            <div className='relative w-full flex flex-col overflow-y-auto'>
                <Navbar maxWidth={300} />
                {
                    id ? <VideoLessonById /> : "Dars topilmadi"
                }
            </div>
        </div>
    )
}

export default VideoLessonsDashboard