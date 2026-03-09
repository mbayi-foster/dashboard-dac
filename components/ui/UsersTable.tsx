import { Pencil, Ban, Trash2, Play, ChevronLeft, ChevronRight } from 'lucide-react';

export default function UsersTable({ 
  agents, currentPage, setCurrentPage, 
  totalItems, totalPages, startIndex, itemsPerPage 
}: any) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-200">
          <thead>
            <tr className="border-b border-gray-100 text-primary text-xs font-bold uppercase tracking-wider bg-white">
              <th className="py-5 px-6">Nom de l'agent</th>
              <th className="py-5 px-6">Rôle</th>
              <th className="py-5 px-6">Département</th>
              <th className="py-5 px-6">E-mail</th>
              <th className="py-5 px-6">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {agents.length > 0 ? (
              agents.map((agent: any) => (
                <tr key={agent.id} className={`hover:bg-gray-50 transition-colors ${agent.status === 'inactive' ? 'opacity-50' : ''}`}>
                  <td className="py-4 px-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                      {agent.initials}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 whitespace-nowrap">{agent.name}</div>
                      <div className="text-xs text-primary/70 font-medium">ID: {agent.id}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap
                      ${agent.role === 'Professeur' ? 'bg-blue-50 text-blue-600' : 
                        agent.role === 'Caissier' ? 'bg-green-50 text-green-600' : 
                        'bg-purple-50 text-purple-600'}`}>
                      {agent.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-700 whitespace-nowrap">{agent.dept}</td>
                  <td className="py-4 px-6 text-sm text-primary whitespace-nowrap">{agent.email}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <button className="text-primary hover:text-hover"><Pencil size={18} /></button>
                      {agent.status === 'active' ? (
                        <button className="text-orange-500 hover:text-orange-600"><Ban size={18} /></button>
                      ) : (
                        <button className="text-green-500 hover:text-green-600"><Play size={18} /></button>
                      )}
                      <button className="text-red-500 hover:text-red-600"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-8 text-center text-gray-500">Aucun agent trouvé.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="border-t border-gray-100 p-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <span className="text-primary/70 font-medium text-center sm:text-left">
          Affichage de {totalItems === 0 ? 0 : startIndex + 1} à {Math.min(startIndex + itemsPerPage, totalItems)} sur {totalItems} agents
        </span>
        
        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setCurrentPage((p: any) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-1 text-gray-400 hover:text-primary disabled:opacity-50"
            ><ChevronLeft size={20} /></button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              return (
                <button 
                  key={pageNum} onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold transition-colors
                    ${pageNum === currentPage ? 'bg-primary text-white shadow-md shadow-primary/30' : 'text-primary hover:bg-primary/10'}`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button 
              onClick={() => setCurrentPage((p: any) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-1 text-gray-900 hover:text-primary disabled:opacity-50"
            ><ChevronRight size={20} /></button>
          </div>
        )}
      </div>
    </div>
  );
}