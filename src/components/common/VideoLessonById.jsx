import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const VideoLessonById = () => {
    return (
        <div className="w-full  flex flex-col items-center max-w-[1000px] mx-auto mt-10 space-y-2">
            <iframe
                // width="560"
                className="max-w-[1000px] w-full min-h-[400px]"
                // height="315"
                src="https://www.youtube.com/embed/JNAqrwAXdwU?si=4rNaZQ0xm-MHr8fd"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />

            <div className="text-left w-full">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">1-dars, Kuchlanish va tok</h3>
                    <div className="flex items-center gap-2">
                        <button className="bg-blue-500/90 flex items-center py-2 px-4 rounded-md gap-x-2"> Quiz <Clock /></button>
                        <button className="bg-gray-500/40 flex items-center py-2 px-4 rounded-md gap-x-2"> Keyingi Dars <ArrowRight /></button>
                    </div>
                </div>
                <ul className="text-sm text-blue-500">
                    <li> <Link to='#'>1.Tinkercard.com</Link></li>
                    <li> <Link to='#'>2.Tinkercard.com</Link></li>
                    <li> <Link to='#'>3.Tinkercard.com</Link></li>
                    <li> <Link to='#'>4.Tinkercard.com</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default VideoLessonById;
