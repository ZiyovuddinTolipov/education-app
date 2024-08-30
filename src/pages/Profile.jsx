import React, { useState, useCallback } from 'react';
import { MdEdit } from 'react-icons/md';
import DashboardLayout from '../layouts/DashboardLayout';
import { profileData } from '../data/data';
import ProfileImage from '../components/profile/ProfileImage';
import ProfileForm from '../components/profile/ProfileForm';
import ProfileInfo from '../components/profile/ProfileInfo';
import ImageCropModal from '../components/profile/ImageCropModal';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState(profileData);
    const [showCropModal, setShowCropModal] = useState(false);
    const [src, setSrc] = useState(null);
    const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 });
    const [completedCrop, setCompletedCrop] = useState(null);
    const [imageRef, setImageRef] = useState(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                setSrc(reader.result);
                setShowCropModal(true);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
        // Here you would typically send the updated user data to your backend
    };

    const onImageLoaded = useCallback((img) => {
        setImageRef(img);
        return false;
    }, []);

    const onCropChange = (crop, percentCrop) => {
        setCrop(percentCrop);
    };

    const onCropComplete = (crop) => {
        setCompletedCrop(crop);
    };

    const handleCropSave = useCallback(async () => {
        if (!completedCrop || !imageRef) {
            return;
        }

        const canvas = document.createElement('canvas');
        const scaleX = imageRef.naturalWidth / imageRef.width;
        const scaleY = imageRef.naturalHeight / imageRef.height;
        canvas.width = completedCrop.width;
        canvas.height = completedCrop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            imageRef,
            completedCrop.x * scaleX,
            completedCrop.y * scaleY,
            completedCrop.width * scaleX,
            completedCrop.height * scaleY,
            0,
            0,
            completedCrop.width,
            completedCrop.height
        );

        canvas.toBlob(
            (blob) => {
                if (!blob) {
                    console.error('Canvas is empty');
                    return;
                }
                const croppedImageUrl = URL.createObjectURL(blob);
                setUser(prevUser => ({ ...prevUser, image: croppedImageUrl }));
                setShowCropModal(false);
                setSrc(null);
            },
            'image/webp',
            0.95
        );
    }, [completedCrop, imageRef]);

    return (
        <DashboardLayout>
            <div className="container mx-auto px-4 py-8">
                <div className="bg-background-light dark:bg-background-dark rounded-lg shadow-md overflow-hidden border border-accent-light dark:border-accent-dark">
                    <div className="md:flex">
                        <ProfileImage 
                            image={user.image} 
                            name={user.name} 
                            onImageChange={handleImageChange} 
                        />
                        <div className="p-8 w-full">
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">{user.name}</h1>
                                {!isEditing && (
                                    <button onClick={() => setIsEditing(true)} className="flex items-center text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark">
                                        <MdEdit className="mr-1" /> Tahrirlash
                                    </button>
                                )}
                            </div>
                            {isEditing ? (
                                <ProfileForm 
                                    user={user} 
                                    onInputChange={handleInputChange} 
                                    onSubmit={handleSubmit} 
                                    onCancel={() => setIsEditing(false)} 
                                />
                            ) : (
                                <ProfileInfo user={user} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {showCropModal && (
                <ImageCropModal 
                    src={src}
                    crop={crop}
                    onCropChange={onCropChange}
                    onImageLoaded={onImageLoaded}
                    onComplete={onCropComplete}
                    onSave={handleCropSave}
                    onCancel={() => {
                        setShowCropModal(false);
                        setSrc(null);
                    }}
                />
            )}
        </DashboardLayout>
    );
}

export default Profile;
