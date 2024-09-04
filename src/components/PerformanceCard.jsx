/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PerformanceCard = ({ title, value, orders }) => {
    return (
        <div className="bg-white dark:bg-[#1E1E2D] p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">{title}</h3>
            <div className="flex items-center justify-between">
                <div className="w-24 h-24">
                    <CircularProgressbar
                        value={value}
                        text={`${value}`}
                        styles={buildStyles({
                            textSize: '22px',
                            pathColor: '#6C5DD3',
                            textColor: '#6C5DD3',
                            trailColor: '#d6d6d6',
                        })}
                    />
                </div>
                <div>
                    {orders.map((order, index) => (
                        <div key={index} className="mb-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">{order.title}</p>
                            <p className="text-lg font-semibold text-gray-800 dark:text-white">{order.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PerformanceCard;