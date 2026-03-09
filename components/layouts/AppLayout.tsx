"use client" 
import React, { ReactNode, useState } from 'react'
import { AppNavbar } from './AppNavbar'
import { AppSidebar } from './AppSidebar'
import BreadCumbCustomise from '../ui/BreadCumbCustomise'

export default function AppLayout({children}:{children:ReactNode}) {
    const [isCollapsed, setIsCollapsed]=useState(false)
  return (
          <div className="min-h-screen">
            <AppNavbar onChangeCollapsed={ ()=>setIsCollapsed(!isCollapsed)} isCollapsed={isCollapsed}/>
            <AppSidebar isCollapsed={isCollapsed} /> 
        <main className={`${isCollapsed ? 'ml-16' : 'ml-64'} flex-1 px-6 overflow-y-auto pt-24 transition-all duration-500`}>
          {children}
        </main>
        </div>

  )
}
