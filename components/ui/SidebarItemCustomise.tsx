import { SidebarItem } from 'flowbite-react'
import React from 'react'
import { IconType } from 'react-icons'
import { HiDatabase } from 'react-icons/hi'

export default function SidebarItemCustomise({label, href='#', isLinked=false, icon=HiDatabase}:{label:string, href?:string, isLinked?:boolean, icon?:IconType}) {
  return (
   <SidebarItem icon={icon} href={href} className={`${isLinked ? 'bg-primary text-white [&_svg]:text-white': 'hover:[&_svg]:text-white hover:text-white'} rounded-lg p-2 text-base hover:bg-secondary`}>{label}</SidebarItem>
  )
}
