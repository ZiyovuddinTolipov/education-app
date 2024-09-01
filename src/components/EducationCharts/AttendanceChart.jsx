import { Line } from 'react-chartjs-2';

const AttendanceChart = () => {

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
        // ... (getAttendanceData funksiyasi o'zgarishsiz qoladi)
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4 text-center">Davomat</h3>
            {/* ... (tugmalar va sana tanlash inputlari o'zgarishsiz qoladi) */}
            <Line 
                data={{
                    labels: getAttendanceData().labels,
                    datasets: [{
                        label: 'Davomat foizi',
                        data: getAttendanceData().data,
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