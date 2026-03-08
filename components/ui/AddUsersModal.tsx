import { X, User, Mail, Briefcase, Building2, Fingerprint, Key, ArrowRight } from 'lucide-react';

export default function AddUsersModal({ isOpen, onClose }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-lg rounded-4xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-8 pb-0 flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-black text-gray-900">Ajouter un nouvel agent</h2>
            <p className="text-[#ff00ff] text-sm font-medium mt-1">Remplissez les informations pour créer un accès académique.</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Nom complet</label>
            <div className="flex items-center bg-[#ff00ff]/5 rounded-xl px-4 focus-within:ring-2 focus-within:ring-[#ff00ff]/20 transition-all">
              <User size={18} className="text-[#ff00ff]/40" />
              <input type="text" placeholder="ex: Jean Dupont" className="w-full bg-transparent py-3.5 pl-3 outline-none text-gray-700 placeholder:text-[#ff00ff]/30" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Adresse e-mail institutionnelle</label>
            <div className="flex items-center bg-[#ff00ff]/5 rounded-xl px-4 focus-within:ring-2 focus-within:ring-[#ff00ff]/20 transition-all">
              <Mail size={18} className="text-[#ff00ff]/40" />
              <input type="email" placeholder="nom.prenom@dac.edu" className="w-full bg-transparent py-3.5 pl-3 outline-none text-gray-700 placeholder:text-[#ff00ff]/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Rôle</label>
              <div className="flex items-center bg-[#ff00ff]/5 rounded-xl px-4 transition-all">
                <Briefcase size={18} className="text-[#ff00ff]/40" />
                <select className="w-full bg-transparent py-3.5 pl-2 outline-none text-gray-700 cursor-pointer appearance-none">
                  <option>Sélectionner un rôle</option>
                  <option>Professeur</option>
                  <option>Caissier</option>
                  <option>Administration</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Département</label>
              <div className="flex items-center bg-[#ff00ff]/5 rounded-xl px-4 transition-all">
                <Building2 size={18} className="text-[#ff00ff]/40" />
                <select className="w-full bg-transparent py-3.5 pl-2 outline-none text-gray-700 cursor-pointer appearance-none">
                  <option>Choisir...</option>
                  <option>Informatique</option>
                  <option>Ressources Humaines</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Matricule / ID Agent</label>
            <div className="flex items-center bg-[#ff00ff]/5 rounded-xl px-4 focus-within:ring-2 focus-within:ring-[#ff00ff]/20 transition-all">
              <Fingerprint size={18} className="text-[#ff00ff]/40" />
              <input type="text" placeholder="ex: AG-2024-XXX" className="w-full bg-transparent py-3.5 pl-3 outline-none text-gray-700 placeholder:text-[#ff00ff]/30" />
            </div>
          </div>

          <div className="flex items-center justify-between bg-[#ff00ff]/5 p-4 rounded-2xl">
            <div className="flex items-center gap-3">
              <Key size={18} className="text-[#ff00ff]" />
              <span className="text-sm font-bold text-gray-700">Envoyer les identifiants par e-mail</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ff00ff]"></div>
            </label>
          </div>

          <div className="flex items-center justify-end gap-6 pt-4">
            <button type="button" onClick={onClose} className="text-sm font-black text-gray-900 uppercase tracking-widest hover:opacity-70 transition-opacity">
              Annuler
            </button>
            <button type="submit" className="flex items-center gap-2 bg-[#ff00ff] hover:bg-[#d600d6] text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-[#ff00ff]/25 active:scale-95">
              Créer le compte
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}