import { Plus } from 'lucide-react';
import BreadCumbCustomise from './BreadCumbCustomise';

export default function UsersHeader({ onAddClick }: any) {
  return (
    <div className="mb-8">
    
    <BreadCumbCustomise title={'Gestion Agents Académiques'}/>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 mb-1 tracking-tight">
            Gestion des Agents Académiques
          </h1>
          <p className="text-primary font-medium">
            Consultez et gérez les professeurs, caissiers et le personnel administratif de l'institution.
          </p>
        </div>
        
        <button 
          onClick={onAddClick}
          className="flex items-center justify-center gap-2 bg-primary hover:bg-hover text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/25 active:scale-95"
        >
          <Plus size={20} strokeWidth={3} />
          Ajouter un agent
        </button>
      </div>
    </div>
  );
}