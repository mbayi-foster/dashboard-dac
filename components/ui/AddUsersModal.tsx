import { useEffect } from 'react';
import { X, User, Mail, Briefcase, Building2, Fingerprint, Key, ArrowRight } from 'lucide-react';

export default function AddUsersModal({ isOpen, onClose }: any) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm flex justify-center items-start overflow-y-auto py-6 sm:py-12 px-4"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Header */}
        <div className="p-8 pb-4 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-black text-gray-900 leading-tight">Ajouter un nouvel agent</h2>
            <p className="text-primary text-sm font-semibold mt-1">Remplissez les informations pour créer un accès académique.</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
            <X size={28} />
          </button>
        </div>

        {/* Formulaire */}
        <form className="p-8 pt-2 space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Nom complet</label>
            <div className="flex items-center bg-primary/5 rounded-2xl px-5 focus-within:ring-2 focus-within:ring-primary/10 transition-all">
              <User size={20} className="text-primary/40 shrink-0" />
              <input type="text" placeholder="ex: Jean Dupont" className="w-full bg-transparent py-4 pl-3 outline-none border-none ring-0 focus:ring-0 text-gray-700 placeholder:text-primary/20 font-medium" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Adresse e-mail institutionnelle</label>
            <div className="flex items-center bg-primary/5 rounded-2xl px-5 transition-all">
              <Mail size={20} className="text-primary/40 shrink-0" />
              <input type="email" placeholder="nom.prenom@dac.edu" className="w-full bg-transparent py-4 pl-3 outline-none border-none ring-0 focus:ring-0 text-gray-700 placeholder:text-primary/20 font-medium" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Rôle</label>
              <div className="flex items-center bg-primary/5 rounded-2xl px-5">
                <Briefcase size={20} className="text-primary/40 shrink-0" />
                <select className="w-full bg-transparent py-4 pl-2 outline-none border-none ring-0 focus:ring-0 text-gray-700 cursor-pointer appearance-none font-medium">
                  <option>Sélectionner un rôle</option>
                  <option>Professeur</option>
                  <option>Caissier</option>
                  <option>Administration</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Département</label>
              <div className="flex items-center bg-primary/5 rounded-2xl px-5">
                <Building2 size={20} className="text-primary/40 shrink-0" />
                <select className="w-full bg-transparent py-4 pl-2 outline-none border-none ring-0 focus:ring-0 text-gray-700 cursor-pointer appearance-none font-medium">
                  <option>Choisir...</option>
                  <option>Informatique</option>
                  <option>Mathématiques</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">Matricule / ID Agent</label>
            <div className="flex items-center bg-primary/5 rounded-2xl px-5">
              <Fingerprint size={20} className="text-primary/40 shrink-0" />
              <input type="text" placeholder="ex: AG-2024-XXX" className="w-full bg-transparent py-4 pl-3 outline-none border-none ring-0 focus:ring-0 text-gray-700 placeholder:text-primary/20 font-medium" />
            </div>
          </div>

          <div className="flex items-center justify-between bg-primary/5 p-5 rounded-2xl">
            <div className="flex items-center gap-3">
              <Key size={22} className="text-primary" />
              <span className="text-sm font-bold text-gray-700">Envoyer les identifiants par e-mail</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-end gap-10 pt-6">
            <button type="button" onClick={onClose} className="text-sm font-black text-gray-900 uppercase tracking-[0.15em] hover:opacity-50 transition-all">
              Annuler
            </button>
            <button type="submit" className="flex items-center gap-3 bg-primary hover:bg-hover text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl shadow-primary/30 transition-all active:scale-95">
              Créer le compte
              <ArrowRight size={20} strokeWidth={3} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}