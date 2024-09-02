import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { FaCalendarAlt } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AttendanceChart = () => {
    const [attendancePeriod, setAttendancePeriod] = useState('weekly');
    const [customStartDate, setCustomStartDate] = useState('');
    const [customEndDate, setCustomEndDate] = useState('');

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    padding: 10,
                    font: { size: 10 }
                }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'Davomat foizi'
                }
            }
        },
        layout: { padding: 10 }
    };

    const getAttendanceData = () => {
        // Bu yerda backend'dan ma'lumotlarni olish kerak
        // Hozircha statik ma'lumotlarni qaytaramiz
        switch(attendancePeriod) {
            case 'daily':
                return {
                    labels: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'],
                    data: [95, 92, 88, 90, 93]
                };
            case 'weekly':
                return {
                    labels: ['1-hafta', '2-hafta', '3-hafta', '4-hafta'],
                    data: [92, 88, 90, 85]
                };
            case 'monthly':
                return {
                    labels: ['Yanvar', 'Fevral', 'Mart', 'Aprel'],
                    data: [88, 90, 85, 92]
                };
            case 'custom':
                // Custom davr uchun ma'lumotlarni olish logikasi
                console.log(`Custom period: ${customStartDate} to ${customEndDate}`);
                return {
                    labels: ['1-kun', '2-kun', '3-kun', '4-kun', '5-kun'],
                    data: [90, 88, 92, 85, 89]
                };
            default:
                return {
                    labels: ['1-hafta', '2-hafta', '3-hafta', '4-hafta'],
                    data: [92, 88, 90, 85]
                };
        }
    };

    const attendanceData = getAttendanceData();

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4 text-center">Davomat</h3>
            <div className="mb-4 flex flex-wrap gap-2">
                <button 
                    onClick={() => setAttendancePeriod('daily')}
                    className={`px-3 py-1 rounded-full text-sm ${
                        attendancePeriod === 'daily' 
                            ? 'bg-primary-light dark:bg-primary-dark text-white' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                >
                    Kunlik
                </button>
                <button 
                    onClick={() => setAttendancePeriod('weekly')}
                    className={`px-3 py-1 rounded-full text-sm ${
                        attendancePeriod === 'weekly' 
                            ? 'bg-primary-light dark:bg-primary-dark text-white' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                >
                    Haftalik
                </button>
                <button 
                    onClick={() => setAttendancePeriod('monthly')}
                    className={`px-3 py-1 rounded-full text-sm ${
                        attendancePeriod === 'monthly' 
                            ? 'bg-primary-light dark:bg-primary-dark text-white' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                >
                    Oylik
                </button>
                <button 
                    onClick={() => setAttendancePeriod('custom')}
                    className={`px-3 py-1 rounded-full text-sm ${
                        attendancePeriod === 'custom' 
                            ? 'bg-primary-light dark:bg-primary-dark text-white' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                >
                    Boshqa davr
                </button>
            </div>
            {attendancePeriod === 'custom' && (
                <div className="mb-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <div className="relative flex-1">
                        <input 
                            type="date" 
                            value={customStartDate} 
                            onChange={(e) => setCustomStartDate(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                        />
                        <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div className="relative flex-1">
                        <input 
                            type="date" 
                            value={customEndDate} 
                            onChange={(e) => setCustomEndDate(e.target.value)}
                            className="w-full pl-10 pr-3 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
                        />
                        <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
            )}
            <Line 
                data={{
                    labels: attendanceData.labels,
                    datasets: [{
                        label: 'Davomat foizi',
                        data: attendanceData.data,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                }} 
                options={lineChartOptions}
            />
        </div>
    );
};

export default AttendanceChart;