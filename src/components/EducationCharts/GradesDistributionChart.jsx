import { Pie } from 'react-chartjs-2';
import { educationStats } from '@/data/data';

const GradesDistributionChart = () => {
    const pieChartOptions = {
        // ... (pieChartOptions o'zgarishsiz qoladi)
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
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