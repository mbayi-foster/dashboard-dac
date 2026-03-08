"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { allAgents, stats } from '@/data/mock';
import UsersHeader from '@/components/ui/UsersHeader'
import Filters from '@/components/ui/Filters';
import AgentsTable from '@/components/ui/UsersTable';
import StatsGrid from '@/components/ui/StatsGrid';
import AppLayout from '@/components/ui/AppLayout';
import AddUsersModal from '@/components/ui/AddUsersModal';

const ITEMS_PER_PAGE = 4;

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('Tous les rôles');
  const [deptFilter, setDeptFilter] = useState('Tous les départements');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredAgents = useMemo(() => {
    return allAgents.filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           agent.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = roleFilter === 'Tous les rôles' || agent.role === roleFilter;
      const matchesDept = deptFilter === 'Tous les départements' || agent.dept === deptFilter;
      return matchesSearch && matchesRole && matchesDept;
    });
  }, [searchTerm, roleFilter, deptFilter]);

  useEffect(() => { setCurrentPage(1); }, [searchTerm, roleFilter, deptFilter]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedAgents = filteredAgents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <AppLayout>
    <div className="min-h-screen bg-gray-50/50 font-sans text-gray-800 flex flex-col">

      <main className="max-w-6xl mx-auto py-8 px-4 w-full grow">
        <UsersHeader onAddClick={()=> setIsModalOpen(true)}></UsersHeader>

        <Filters 
          searchTerm={searchTerm} setSearchTerm={setSearchTerm}
          roleFilter={roleFilter} setRoleFilter={setRoleFilter}
          uniqueRoles={['Tous les rôles', ...new Set(allAgents.map(a => a.role))]}
          deptFilter={deptFilter} setDeptFilter={setDeptFilter}
          uniqueDepts={['Tous les départements', ...new Set(allAgents.map(a => a.dept))]}
        />

        <AgentsTable 
          agents={paginatedAgents}
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          totalItems={filteredAgents.length}
          totalPages={Math.ceil(filteredAgents.length / ITEMS_PER_PAGE)}
          startIndex={startIndex}
          itemsPerPage={ITEMS_PER_PAGE}
        />

        <StatsGrid stats={stats} />
        <AddUsersModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </main>

    </div>
    </AppLayout>
  );
}