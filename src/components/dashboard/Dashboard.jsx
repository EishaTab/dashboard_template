import React from 'react'
import DashboardLayout from './DashboardLayout'
import Orders from './Orders'

const Dashboard = () => {
    return (
        <DashboardLayout>
            <div className='db_comp '>
                <Orders />
                <div className="custom_card  sec_text">
                    Hello I am a card
                </div>
            </div>
        </DashboardLayout>

    )
}

export default Dashboard
