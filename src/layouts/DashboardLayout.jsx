import Sidebar from '../components/shared/Sidebar'
import Header from '../components/shared/Header'
import { Outlet } from 'react-router'
import { useState } from 'react'

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className='w-full h-full flex flex-row '>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <div
        className={`min-w-0 flex-1 h-full flex flex-col transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout