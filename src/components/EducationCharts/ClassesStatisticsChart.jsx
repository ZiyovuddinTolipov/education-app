import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { educationStats } from '@/data/data';
import { useTheme } from '@/context/ThemeProvider';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ClassesStatisticsChart = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: isDark ? '#E0E0E0' : '#333333',
                    font: { size: 12 }
                }
            },
            title: {
                display: true,
                text: "Sinflar bo'yicha statistika",
                color: isDark ? '#E0E0E0' : '#333333',
                font: { size: 18, weight: 'bold' }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: isDark ? '#2D2D3F' : '#E0E0E0',
                },
                ticks: {
                    color: isDark ? '#E0E0E0' : '#333333',
                }
            },
            x: {
                grid: {
                    color: isDark ? '#2D2D3F' : '#E0E0E0',
                },
                ticks: {
                    color: isDark ? '#E0E0E0' : '#333333',
                }
            }
        },
    };

    const chartData = {
        labels: educationStats.classesSummary.labels,
        datasets: [
            {
                label: "O'rtacha davomat (%)",
                data: educationStats.classesSummary.averageAttendance,
                backgroundColor: isDark ? 'rgba(108, 93, 211, 0.8)' : 'rgba(108, 93, 211, 0.6)',
                borderColor: 'rgba(108, 93, 211, 1)',
                borderWidth: 1
            },
            {
                label: "O'rtacha baho",
                data: educationStats.classesSummary.averageGrade,
                backgroundColor: isDark ? 'rgba(255, 159, 64, 0.8)' : 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            },
            {
                label: "O'quvchilar soni",
                data: educationStats.classesSummary.studentCount,
                backgroundColor: isDark ? 'rgba(75, 192, 192, 0.8)' : 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };

    return (
        <div className="bg-white dark:bg-[#1E1E2D] p-4 rounded-lg shadow-lg h-80">
            <Bar data={chartData} options={barChartOptions} />
        </div>
    );
};

export default ClassesStatisticsChart;
