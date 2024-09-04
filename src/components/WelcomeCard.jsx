/* eslint-disable react/prop-types */
import { FaChartLine } from 'react-icons/fa';

const WelcomeCard = ({ name, budget, expense }) => {
    return (
        <div className="bg-[#6C5DD3] text-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-2xl font-bold">Welcome Back</h2>
                    <p className="text-lg">{name}</p>
                </div>
                <div className="bg-white p-3 rounded-full">
                    <FaChartLine className="text-[#6C5DD3] text-2xl" />
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="text-sm opacity-80">Budget</p>
                    <p className="text-xl font-bold">${budget}</p>
                </div>
                <div>
                    <p className="text-sm opacity-80">Expense</p>
                    <p className="text-xl font-bold">${expense}</p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeCard;