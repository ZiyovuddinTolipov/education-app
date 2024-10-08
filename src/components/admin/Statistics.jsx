import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import DashboardLayout from '@/layouts/common/DashboardLayout';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Statistics = () => {
    const barData = {
        labels: ['Yanvar', 'Fevral', 'Mart', 'April', 'May', 'Iyun'],
        datasets: [
            {
                label: 'Faol foydalanuvchilar',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const lineData = {
        labels: ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba', 'Yakshanba'],
        datasets: [
            {
                label: 'O\'rtacha ball',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    const pieData = {
        labels: ['O\'quvchilar', 'O\'qituvchilar', 'Adminlar'],
        datasets: [
            {
                data: [300, 50, 10],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <DashboardLayout>
            <div className="p-6 bg-gray-100 dark:bg-gray-900">
                <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Statistika</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-[400px]">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Faol foydalanuvchilar</h2>
                        <div className="h-[300px]">
                            <Bar data={barData} options={chartOptions} />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-[400px]">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">O&apos;rtacha ball</h2>
                        <div className="h-[300px]">
                            <Line data={lineData} options={chartOptions} />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-[400px]">
                        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Foydalanuvchilar taqsimoti</h2>
                        <div className="h-[300px]">
                            <Pie data={pieData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Statistics;