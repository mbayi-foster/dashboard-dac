import { Search } from 'lucide-react';

export default function Filters({ 
  searchTerm, setSearchTerm, 
  roleFilter, setRoleFilter, uniqueRoles,
  deptFilter, setDeptFilter, uniqueDepts 
}: any) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col lg:flex-row gap-4 mb-8 items-center">
      
      <div className="flex-1 flex items-center bg-[#ff00ff]/5 rounded-xl px-4 w-full">
        <Search className="text-[#ff00ff]/50 shrink-0" size={20} />
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Rechercher par nom..." 
          className="w-full bg-transparent py-4 pl-3 outline-none border-none focus:ring-0 text-[#ff00ff]"
        />
      </div>

      <select 
        value={roleFilter}
        onChange={(e) => setRoleFilter(e.target.value)}
        className="bg-gray-50 rounded-xl px-4 py-4 text-gray-700 font-semibold border-none outline-none focus:ring-0 cursor-pointer w-full sm:w-auto"
      >
        {uniqueRoles.map((role: any) => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>

      <select 
        value={deptFilter}
        onChange={(e) => setDeptFilter(e.target.value)}
        className="bg-gray-50 rounded-xl px-4 py-4 text-gray-700 font-semibold border-none outline-none focus:ring-0 cursor-pointer w-full sm:w-auto"
      >
        {uniqueDepts.map((dept:any) => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>
      
    </div>
  );
}