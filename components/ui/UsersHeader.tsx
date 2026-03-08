import { Plus } from 'lucide-react';

export default function UsersHeader({ onAddClick }: any) {
  return (
    <div className="mb-8">
      <div className="text-sm text-gray-400 mb-2">
        <span className="text-[#ff00ff] font-medium">Accueil</span> 
        <span className="mx-2 text-gray-300">›</span> 
        Gestion Agents Académiques
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 mb-1 tracking-tight">
            Gestion des Agents Académiques
          </h1>
          <p className="text-[#ff00ff] font-medium">
            Consultez et gérez les professeurs, caissiers et le personnel administratif de l'institution.
          </p>
        </div>
        
        <button 
          onClick={onAddClick}
          className="flex items-center justify-center gap-2 bg-[#ff00ff] hover:bg-[#d600d6] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-[#ff00ff]/25 active:scale-95"
        >
          <Plus size={20} strokeWidth={3} />
          Ajouter un agent
        </button>
      </div>
    </div>
  );
}