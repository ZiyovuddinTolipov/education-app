import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { educationStats } from '@/data/data';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ClassesStatisticsChart = () => {
    const barChartOptions = {
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
            title: {
                display: true,
                text: "Sinflar bo'yicha statistika",
                font: { size: 16 }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Qiymat'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Sinflar'
                }
            }
        },
        layout: { padding: 10 }
    };

    return (
        <div className="bg-white dark:bg-black p-4 rounded-lg shadow max-h-80">
            <Bar
                data={{
                    labels: educationStats.classesSummary.labels,
                    datasets: [
                        {
                            label: "O'rtacha davomat (%)",
                            data: educationStats.classesSummary.averageAttendance,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        },
                        {
                            label: "O'rtacha baho",
                            data: educationStats.classesSummary.averageGrade,
                            backgroundColor: 'rgba(255, 159, 64, 0.6)',
                            borderColor: 'rgba(255, 159, 64, 1)',
                            borderWidth: 1
                        },
                        {
                            label: "O'quvchilar soni",
                            data: educationStats.classesSummary.studentCount,
                            backgroundColor: 'rgba(153, 102, 255, 0.6)',
                            borderColor: 'rgba(153, 102, 255, 1)',
                            borderWidth: 1
                        }
                    ]
                }}
                options={barChartOptions}
            />
        </div>
    );
};

export default ClassesStatisticsChart;
