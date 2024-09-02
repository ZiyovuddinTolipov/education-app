import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { educationStats } from '@/data/data';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const GenderDistributionChart = () => {
    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.5,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 16,
                    padding: 10,
                    font: { size: 10 }
                }
            },
            title: {
                display: true,
                text: "Talabalar jinsi bo'yicha taqsimot",
                font: { size: 16 }
            },
        },
        layout: { padding: 10 }
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <Pie
                data={{
                    labels: educationStats.genderDistribution.labels,
                    datasets: [{
                        data: educationStats.genderDistribution.data,
                        backgroundColor: ['#2196F3', '#E91E63'],
                        borderColor: ['#1976D2', '#C2185B'],
                        borderWidth: 1
                    }]
                }}
                options={pieChartOptions}
            />
        </div>
    );
};

export default GenderDistributionChart;
