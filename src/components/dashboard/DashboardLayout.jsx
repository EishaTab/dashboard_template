import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar'

const DashboardLayout = ({children}) => {
  return (
    <>

    <Sidebar />
    <div id='db_content' className='db_content'>
        <Navbar />
        {children}
    </div>
      
    </>
  )
}

export default DashboardLayout
