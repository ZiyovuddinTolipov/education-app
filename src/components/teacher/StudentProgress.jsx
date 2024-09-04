import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import DashboardLayout from '@/layouts/common/DashboardLayout';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentProgress = () => {
    const students = [
        { name: 'Ali Valiyev', progress: 75 },
        { name: 'Guli Karimova', progress: 88 },
        { name: 'Bobur Alimov', progress: 62 },
        { name: 'Zarina Umarova', progress: 95 },
        // Boshqa talabalar...
    ];

    const chartData = {
        labels: students.map(student => student.name),
        datasets: [
            {
                label: 'O\'zlashtirish darajasi',
                data: students.map(student => student.progress),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Talabalar o\'zlashtirish darajasi',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                title: {
                    display: true,
                    text: 'O\'zlashtirish (%)',
                },
            },
        },
    };

    return (
        <DashboardLayout>
        <div className="p-6 bg-gray-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Talabalar o&apos;zlashtirishi</h1>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <Bar data={chartData} options={options} />
            </div>
            <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Talabalar ro&apos;yxati</h2>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {students.map((student, index) => (
                        <li key={index} className="py-4 flex justify-between items-center">
                            <span className="text-gray-800 dark:text-white">{student.name}</span>
                            <span className="text-gray-600 dark:text-gray-300">{student.progress}%</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </DashboardLayout>
    );
};

export default StudentProgress;