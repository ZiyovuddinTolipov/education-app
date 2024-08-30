/* eslint-disable react/prop-types */
import  { useRef } from 'react';
import { MdAddAPhoto } from 'react-icons/md';

const ProfileImage = ({ image, name, onImageChange }) => {
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="md:flex-shrink-0 relative">
            <img 
                className="h-48 w-full object-cover md:w-48 cursor-pointer" 
                src={image} 
                alt={name} 
                onClick={handleImageClick}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-surface-100 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 dark:bg-surface-600 dark:bg-opacity-50">
                <MdAddAPhoto className="text-white text-3xl" />
            </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={onImageChange}
                className="hidden"
                accept="image/*"
            />
        </div>
    );
};

export default ProfileImage;
