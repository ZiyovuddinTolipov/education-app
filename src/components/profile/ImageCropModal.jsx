/* eslint-disable react/prop-types */
import ReactCrop from 'react-image-crop';

const ImageCropModal = ({ src, crop, onCropChange, onImageLoaded, onComplete, onSave, onCancel }) => {
    return (
        <div className="fixed inset-0 bg-background-light bg-opacity-50 flex items-center justify-center z-50 dark:bg-background-dark dark:bg-opacity-50">
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg max-w-2xl w-full">
                <h2 className="text-2xl font-bold mb-4 text-text-light dark:text-text-dark">Rasmni kesib olish</h2>
                {src && (
                    <ReactCrop
                        src={src}
                        crop={crop}
                        onChange={onCropChange}
                        onImageLoaded={onImageLoaded}
                        onComplete={onComplete}
                        circularCrop
                    />
                )}
                <div className="mt-4 flex justify-end space-x-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-accent-light text-text-light rounded hover:bg-secondary-light dark:bg-accent-dark dark:text-text-dark dark:hover:bg-secondary-dark"
                    >
                        Bekor qilish
                    </button>
                    <button
                        onClick={onSave}
                        className="px-4 py-2 bg-primary-light text-text-light rounded hover:bg-secondary-light dark:bg-primary-dark dark:text-text-dark dark:hover:bg-secondary-dark"
                    >
                        Saqlash
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageCropModal;
