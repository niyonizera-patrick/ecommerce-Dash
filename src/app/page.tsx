"use client"

import { useState } from "react"
import Navbar from "./components/Navbar/nav"
import Sidebar from "./components/Navbar/sidebar/sidebar"
import DashboardPage from "./components/Navbar/Dashboard/dashboard"
import ProductsPage from "./components/Product/product" // You’ll make this

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard")

  const renderContent = () => {
    switch (currentPage) {
      case "Dashboard":
        return <DashboardPage />
      case "Products":
        return <ProductsPage />
      default:
        return <div className="text-white">Coming soon...</div>
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-semibold mb-4">{currentPage}</h1>
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default Home
