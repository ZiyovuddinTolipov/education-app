const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center w-full h-[100vh] loading-anima bg-background-light dark:bg-background-dark">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" width="100" height="100">
                {/* Kitob */}
                <rect x="20" y="30" width="60" height="40" fill="none" stroke="#4299E1" strokeWidth="2">
                    <animate attributeName="y" values="30;28;30" dur="1s" repeatCount="indefinite" />
                </rect>
                <path d="M20 30 Q50 10 80 30" fill="none" stroke="#4299E1" strokeWidth="2">
                    <animate attributeName="d" values="M20 30 Q50 10 80 30; M20 28 Q50 8 80 28; M20 30 Q50 10 80 30" dur="1s" repeatCount="indefinite" />
                </path>
                
                {/* Qalam */}
                <line x1="85" y1="20" x2="85" y2="80" stroke="#4299E1" strokeWidth="2">
                    <animateTransform attributeName="transform" type="rotate" from="0 85 50" to="360 85 50" dur="3s" repeatCount="indefinite" />
                </line>
                <polygon points="83,20 87,20 85,15" fill="#4299E1">
                    <animateTransform attributeName="transform" type="rotate" from="0 85 50" to="360 85 50" dur="3s" repeatCount="indefinite" />
                </polygon>
                
                {/* Loading yozuvi */}
                <text x="50" y="90" textAnchor="middle" fill="#4299E1" fontSize="10">
                    Loading
                    <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
                </text>
            </svg>
        </div>
    );
}

export default LoadingPage;