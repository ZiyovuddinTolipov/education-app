import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { educationStats } from '@/data/data';

// Register the components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const SubjectsAverageChart = () => {
    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Fanlar bo\'yicha o\'rtacha ball',
                font: { size: 16 }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 5,
                title: {
                    display: true,
                    text: 'O\'rtacha ball'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Fanlar'
                }
            }
        },
        layout: { padding: 10 }
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <Line
                data={{
                    labels: educationStats.subjects.labels,
                    datasets: [{
                        label: 'O\'rtacha ball',
                        data: educationStats.subjects.data,
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }]
                }}
                options={lineChartOptions}
            />
        </div>
    );
};

export default SubjectsAverageChart;
