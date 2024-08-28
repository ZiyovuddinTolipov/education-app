const MessageSkeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full mr-2"></div>
                <div className="flex-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                </div>
            </div>
        </div>
    );
};

export default MessageSkeleton;