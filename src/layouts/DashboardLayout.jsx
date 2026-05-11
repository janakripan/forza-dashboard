import Sidebar from '../components/shared/Sidebar'
import Header from '../components/shared/Header'
import { Outlet } from 'react-router'
import { useState } from 'react'

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className='w-full h-full flex flex-row '>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <div className='w-full h-full flex flex-col '>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout