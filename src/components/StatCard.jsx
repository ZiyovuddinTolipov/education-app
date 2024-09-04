/* eslint-disable react/prop-types */

const StatCard = ({ title, value, change, icon: Icon, color }) => {
    return (
        <div className={`bg-white dark:bg-[#1E1E2D] p-4 rounded-lg shadow-lg flex items-center`}>
            <div className={`p-3 rounded-full mr-4 ${color}`}>
                <Icon className="text-white text-2xl" />
            </div>
            <div>
                <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
                <p className="text-xl font-bold text-gray-800 dark:text-white">{value}</p>
                <p className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {change >= 0 ? '+' : ''}{change}%
                </p>
            </div>
        </div>
    );
};

export default StatCard;