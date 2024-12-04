import Navbar from '../../components/common/Navbar'
import VideoLessonsSidebar from  '../../components/common/VideoLessonsSidebar'

const VideoLessonsDashboard = () => {
    return (
        <div className='bg-white text-black dark:bg-black dark:text-white min-h-[100svh] flex'>
            <div className='w-full max-w-[300px] py-4'>
                <VideoLessonsSidebar  />
            </div>
            <div className='relative'>
                <Navbar maxWidth={300} />
            </div>
        </div>
    )
}

export default VideoLessonsDashboard