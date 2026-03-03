"use client";
import { Navbar, DarkThemeToggle, NavbarBrand, NavbarToggle, Dropdown, DropdownItem, DropdownDivider } from "flowbite-react";
import Image from "next/image";
import { FaBell } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { RiMenuFold2Line, RiMenuFoldLine } from "react-icons/ri";

export function AppNavbar({onChangeCollapsed, isCollapsed}:{onChangeCollapsed:()=>void, isCollapsed:boolean}) {
  return (
    <Navbar fluid className={`fixed top-0 end-0 ${isCollapsed ? 'left-16' : 'left-64'} border-b border-gray-700 transition-all duration-500`}>
     <div className="flex justify-between w-full h-16 items-center align-middle">
       <NavbarBrand className="gap-3">
       {!isCollapsed ?  <RiMenuFoldLine size={25} onClick={onChangeCollapsed} className="cursor-pointer"/> :
        <RiMenuFold2Line size={25} onClick={onChangeCollapsed} className="cursor-pointer"/>}
        <Image
        src={"/img/profile.jpg"}
        alt="profile"
        width={50}
        height={30}
        className="rounded-xl"
        />
       <h6 className="text-3xl text-heading font-bold">ISIPA</h6>
      </NavbarBrand>
     <div className="flex gap-3 items-center pr-4">
      <div className="flex gap-3">
        <a href="#"><IoMdSettings size={23}/></a>
        <div>
          <Dropdown className="rounded-xl w-64" dismissOnClick={false} renderTrigger={() =>{
            return <FaBell size={23} className="cursor-pointer" color="#ff00f6"/>;
          }}>
             <DropdownItem>Profile</DropdownItem>
              <DropdownDivider />
              <DropdownItem className="bg-white hover:bg-white text-center">
                <a href="#" className="text-center">
                  Voir tout
                </a>
              </DropdownItem>
          </Dropdown>
          
        </div>
      </div>
        <div className="h-8 bg-gray-700 w-px"></div>
      <Dropdown className="rounded-xl" label="" dismissOnClick={false} renderTrigger={() =>  <a href="#" className="flex justify-center items-center">
        <div className="flex flex-col gap-0 justify-end items-end">
          <span className="text-sm font-bold text-heading">Jhon Doe</span>
          <span className="text-sm">jhondoe@email.com</span>
        </div>
        <Image
        src={"/img/profile.jpg"}
        alt="profile"
        width={45}
        height={30}
        className="rounded-full"
        />
        </a>}>
      <DropdownItem>Profile</DropdownItem>
       <DropdownDivider />
      <DropdownItem>Se déconnecter</DropdownItem>
    </Dropdown>
      
     </div>
     </div>
      
    </Navbar>
   
  );
}
