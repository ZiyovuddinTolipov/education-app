import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from 'chart.js';
import { Doughnut, Pie, Line, Bar } from 'react-chartjs-2';
import { educationStats } from '@/data/data';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement
);

const EducationCharts = () => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true, // false o'rniga true qo'yildi
        aspectRatio: 2, // Bu qiymatni 1 dan 2 ga o'zgartiring
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    padding: 10,
                    font: {
                        size: 10
                    }
                }
            },
        },
        layout: {
            padding: 10
        }
    };

    const lineChartOptions = {
        ...chartOptions,
        scales: {
            y: {
                beginAtZero: true,
                max: 5,
            },
        },
    };

    const pieChartOptions = {
        ...chartOptions,
        aspectRatio: 1.5, // Pie va Doughnut chartlar uchun
    };

    const barChartOptions = {
        ...chartOptions,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    maxTicksLimit: 5
                }
            }
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"> {/* lg:grid-cols-3 olib tashlandi */}
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow "> {/* h-[300px] o'rniga h-[250px] */} {/* h-[300px] qo'shildi */}
                <h3 className="text-lg font-semibold mb-2 text-center">Davomat</h3>
                <Doughnut 
                    data={{
                        labels: educationStats.attendance.labels,
                        datasets: [{
                            data: educationStats.attendance.data,
                            backgroundColor: ['#4CAF50', '#FF5252'],
                        }]
                    }} 
                    options={pieChartOptions}
                />
            </div>
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
                    options={chartOptions}
                />
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2 text-center">Fanlar bo&apos;yicha o&apos;rtacha ball</h3>
                <Line 
                    data={{
                        labels: educationStats.subjects.labels,
                        datasets: [{
                            label: "O'rtacha ball",
                            data: educationStats.subjects.data,
                            borderColor: '#3F51B5',
                            tension: 0.1
                        }]
                    }} 
                    options={lineChartOptions}
                />
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2 text-center">Talabalar jinsi bo&apos;yicha taqsimot</h3>
                <Pie 
                    data={{
                        labels: educationStats.genderDistribution.labels,
                        datasets: [{
                            data: educationStats.genderDistribution.data,
                            backgroundColor: ['#2196F3', '#E91E63'],
                        }]
                    }} 
                    options={chartOptions}
                />
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2 text-center">Fakultetlar bo&apos;yicha talabalar soni</h3>
                <Bar 
                    data={{
                        labels: educationStats.studentsByFaculty.labels,
                        datasets: [{
                            label: 'Talabalar soni',
                            data: educationStats.studentsByFaculty.data,
                            backgroundColor: '#4CAF50',
                        }]
                    }} 
                    options={barChartOptions}
                />
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2 text-center">Sinflar bo&apos;yicha statistika</h3>
                <Bar 
                    data={{
                        labels: educationStats.classesSummary.labels,
                        datasets: [
                            {
                                label: "O'rtacha davomat (%)",
                                data: educationStats.classesSummary.averageAttendance,
                                backgroundColor: '#4CAF50',
                            },
                            {
                                label: "O'rtacha baho",
                                data: educationStats.classesSummary.averageGrade,
                                backgroundColor: '#2196F3',
                            },
                            {
                                label: "O'quvchilar soni",
                                data: educationStats.classesSummary.studentCount,
                                backgroundColor: '#FFC107',
                            }
                        ]
                    }} 
                    options={{
                        ...chartOptions,
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default EducationCharts;
