import DashboardLayout from '@/layouts/common/DashboardLayout';

const Quiz = () => {
    return (
        <DashboardLayout>
            <div className="p-6 bg-background-light dark:bg-background-dark">
                <h1 className="text-3xl font-bold mb-4 text-text-light dark:text-text-dark">Test</h1>
                <p className="text-gray-600 dark:text-gray-300">Bu yerda test savollari boladi.</p>
                {/* Test savollari va javoblari qo'shiladi */}
            </div>
        </DashboardLayout>
    );
};

export default Quiz;