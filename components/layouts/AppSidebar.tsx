"use client";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import { FaBedPulse } from "react-icons/fa6";
import { HiChartPie, HiUser, HiShoppingBag, HiArrowSmRight, HiUsers } from "react-icons/hi";
import { RiMenuFoldLine } from "react-icons/ri"; 
import SidebarItemCustomise from "../ui/SidebarItemCustomise";
import { usePathname } from "next/navigation";
import { icons } from "lucide-react";

export function AppSidebar({isCollapsed,}:{isCollapsed:boolean}) {
  const pathname = usePathname()
  const liens =[
    {title:"Tableau de bord", link:'/', icon:HiChartPie},
    {title:"Agents universitaire", link:'/admins/users', icon:HiUsers}
  ]
  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-64'} fixed left-0 top-0 h-screen flex flex-col transition-all duration-500 border-r dark:bg-background border-gray-300`}>
       <div className="py-3 border-b border-gray-300 bg-white">
          <div className="flex justify-center items-center gap-1 ">
                    <Image src={"/favicon.svg"} alt={""} 
                    width={60}
                    height={60}
                    priority
                    className="rounded-2xl"
                    />
             <div className={`flex flex-col transition-all duration-500 ${isCollapsed? 'hidden':''}`}>
                <h6 className={`text-xl font-bold text-heading transition-all duration-500 ${isCollapsed? 'hidden':''}`}>DAC Congo</h6>
                <p className={`text-sm text-heading text-center mt-1 transition-all duration-500 ${isCollapsed? 'hidden':''}`}>Portail académique</p>
            </div>
              
          </div>
          
       </div> 
    <div className="h-full overflow-x-hidden overflow-y-auto pb-10 w-full bg-white">
        <Sidebar aria-label="Dashboard Sidebar" collapsed={isCollapsed} className="w-full" theme={{
          root: {
            base: "h-full",
            inner: "h-full overflow-y-auto overflow-x-hidden bg-white px-3 py-4" // <--- TA COULEUR ICI
              }
        }}>
          <SidebarItems  className="transition-all duration-300 group-hover:bg-secondary">
          <SidebarItemGroup className="justify-center items-center h-full border-t-0 group-hover:bg-secondary">
              {
                liens.map((l)=>
            <SidebarItemCustomise icon={l.icon} href={l.link} label={l.title} isLinked={pathname==l.link}/>)
              }
             </SidebarItemGroup>
      </SidebarItems>
     </Sidebar>
    </div>
       </div>

  
    
  );
}