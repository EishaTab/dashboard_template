import React from 'react';
import DashboardLayout from './DashboardLayout';
import Orders from './Orders';
import Stats from './Stats';
import Users from './Users';
const Dashboard = () => {
    return (
        <DashboardLayout>
            <div className='db_comp p-3 md:p-5 flex flex-col gap-4 '>       
                <Stats />
                <Orders />
                <Users />
            </div>
        </DashboardLayout>

    )
}

export default Dashboard
