import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { educationStats } from '@/data/data';

// Register the components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const GradesDistributionChart = () => {
    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1, // Aspect ratio o'zgartirildi
        // ... (pieChartOptions o'zgarishsiz qoladi)
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow max-h-max">
            <h3 className="text-lg font-semibold mb-2 text-center">Baholar taqsimoti</h3>
        
                <Pie
                    data={{
                        labels: educationStats.grades.labels,
                        datasets: [{
                            data: educationStats.grades.data,
                            backgroundColor: ['#4CAF50', '#8BC34A', '#FFC107', '#FF9800', '#FF5252'],
                        }]
                    }}
                    options={pieChartOptions}
                />
        </div>
    );
};

export default GradesDistributionChart;