import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { educationStats } from '@/data/data';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentsByFacultyChart = () => {
    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: "Fakultetlar bo'yicha talabalar soni",
                font: { size: 16 }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Talabalar soni'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Fakultetlar'
                }
            }
        },
        layout: { padding: 10 }
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <Bar
                data={{
                    labels: educationStats.studentsByFaculty.labels,
                    datasets: [{
                        label: 'Talabalar soni',
                        data: educationStats.studentsByFaculty.data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1
                    }]
                }}
                options={barChartOptions}
            />
        </div>
    );
};

export default StudentsByFacultyChart;
