/* eslint-disable react/prop-types */
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const StatCard = ({ title, value, change, isIncrease }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-3xl font-bold mb-2">{value}</p>
            <p className={`flex items-center ${isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                {isIncrease ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                {change}%
            </p>
        </div>
    );
};

export default StatCard;