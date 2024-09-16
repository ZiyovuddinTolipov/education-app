import DashboardLayout from '@/layouts/common/DashboardLayout';
import IndependentWorkCards from '@/components/student/IndependentWorkCards';
const IndependentWorks = () => {
    return (
        <DashboardLayout>
            <div className='flex flex-col'>
                <IndependentWorkCards />
            </div>
        </DashboardLayout>
    )
}

export default IndependentWorks