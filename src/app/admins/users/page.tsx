"use client";

import React, { useState, useMemo, useEffect, ReactNode } from 'react';
import UsersHeader from '@/components/ui/BreadCumbPage'
import Filters from '@/components/ui/Filters';
import AgentsTable from '@/components/ui/UsersTable';
import StatsGrid from '@/components/ui/StatsGrid';
import AddUsersModal from '@/components/ui/AddUsersModal'; 
import AppLayout from '@/components/layouts/AppLayout';
import BreadCumbPage from '@/components/ui/BreadCumbPage';
import { Plus } from 'lucide-react';
import { Role, User } from '@/data/models/models';
import { getConfigs, getUsersAction } from '@/data/actions/admins';
import FullPageLoader from '@/components/ui/FullPageLoader';
import ChangeUserStatusModal from '@/components/ui/ChangeUserStatusModal';




export default function AgentsPage() {
  const [agents, setAgents] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermShown, setSearchTermShown]=useState('')
  const [roleFilter, setRoleFilter] = useState<number>(0);
  // const [deptFilter, setDeptFilter] = useState("Tous les départements");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [itemsTotal, setItemsTotal]=useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState<any[]>([])
  const [changeStatusModal, setChangeStatusModal] = useState(false)
  const [editUser, setEditUser] = useState<User|undefined>()
  const [typeModal, setTypeModal]=useState('add')
  const [stats, setCounts]=useState<{id:number, title:string, count:number}[]>([])


  const updateEditUser = (id:string, t:'status'|'edit')=>{
    const user = agents.find((u)=> u.id === id)
    setEditUser(user)
    if(t=='status'){
      setChangeStatusModal(true)
    }else if(t=='edit'){
      setTypeModal('edit')
      setIsModalOpen(true)
    }
  }

  const fetchAgents = async () => {
      setIsLoading(true);
      const res = await getUsersAction({
        limit:itemsPerPage, search:searchTerm, page:currentPage, role:roleFilter
      }); 
      if (res) {
        setAgents(res.users);
        setItemsTotal(res.meta.total)
        setCurrentPage(res.meta.page)
      }
      setIsLoading(false);
    };

  const fetchConfigs = async ()=>{
    setIsLoading(true)
    const res = await getConfigs()
    if(res){
    setRoles(res.roles);
    setStatus(res.status)
    setCounts(res.counts)
    }
    setIsLoading(false)
  }




    const updateListAgents = () => {
       setRoleFilter(0)
      setCurrentPage(1)
      setSearchTerm('')
      setSearchTermShown('')
      fetchAgents(),
      fetchConfigs()
    };

    useEffect(()=>{
      fetchConfigs()
    },[])

  useEffect(() => {
    fetchAgents();
  }, [searchTerm, currentPage, roleFilter, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const actionHeader = (
    <button 
          onClick={()=>{
            setTypeModal('add')
            setEditUser(undefined)
            setIsModalOpen(true)
          }}
          className="flex items-center justify-center gap-2 bg-primary hover:bg-hover text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/25 active:scale-95 cursor-pointer"
        >
          <Plus size={20} strokeWidth={3} />
          Ajouter un agent
        </button>
        )


  return (
    <AppLayout onRefresh={updateListAgents} pageTitle="Gestion d'utilisateur" actionHeader={actionHeader} title="Gestion d'utilisateur" subtitle="Consultez et gérez les professeurs, caissiers et le personnel administratif de l'institution.">
    <main className="max-w-6xl mx-auto w-full grow">
        <Filters 
          setSearchTerm={(e)=>{
            setSearchTermShown(e)
          }}
          submitSearchTerm={(e)=>{
            setSearchTerm(e)
          }}
          searchTerm={searchTermShown}
          roleFilter={roleFilter} setRoleFilter={(r)=>{
            setCurrentPage(1)
            setRoleFilter(r)
          }}
          uniqueRoles={roles}
          itemsPerPage={itemsPerPage} setItemsPerPage={(i)=>{
            setCurrentPage(1)
            setItemsPerPage(i)
          }}
        />

          <AgentsTable
            agents={agents}
            setUser={(u, t)=>updateEditUser(u, t)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={itemsTotal}
            totalPages={Math.ceil(itemsTotal / itemsPerPage)}
            startIndex={startIndex}
            itemsPerPage={itemsPerPage}
            status={status}
          />

        <StatsGrid stats={stats} />
        <AddUsersModal 
          isOpen={isModalOpen} 
          type={typeModal}
          setUser={editUser}
          roles={roles}
          updateAgentsList={updateListAgents}
          onClose={() => setIsModalOpen(false)} 
        />
        <ChangeUserStatusModal 
        user={editUser} 
         updateAgentsList={updateListAgents}
        isOpen={changeStatusModal}
         onClose={()=>setChangeStatusModal(!changeStatusModal)} 
         status={status}/>
      </main>
    <FullPageLoader loading={isLoading} />
    </AppLayout>
  );
}
