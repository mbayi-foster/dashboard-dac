"use client";

import AppLayout from '@/components/layouts/AppLayout';
import DossiersLayout from '@/components/layouts/DossiersLayout';
import { 
  FileText, CheckCircle2, XCircle, Eye, 
  MapPin, GraduationCap, Building2, BookOpen, AlertCircle 
} from 'lucide-react';

export default function DossierDetailsPage({ params }: { params: { id: string } }) {
  
  return (
    <AppLayout title={''} subtitle={''}      // pageTitle="Détails du Dossier - #DAC-2024-001" 
      // subtitle="Dossiers Étudiants > Détails du Dossier"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        
        <div className="flex-1 space-y-8">
          
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center gap-8 relative overflow-hidden">
            <div className="relative">
              <img 
                src="https://i.pravatar.cc/150?u=jean" 
                alt="Portrait" 
                className="w-32 h-32 rounded-3xl object-cover border-4 border-gray-50 shadow-md"
              />
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-lg">
                <div className="w-10 h-10 rounded-full border-4 border-primary flex items-center justify-center text-[10px] font-black">78%</div>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-4xl font-black text-gray-900">Jean Dupont</h2>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-500 font-bold">
                <span className="flex items-center gap-1.5"><MapPin size={16}/> Lubumbashi, Haut-Katanga</span>
                <span className="text-gray-300">•</span>
                <span>ID: #DAC-2024-001</span>
                <span className="text-gray-300">•</span>
                <span>Inscrit le 12 Oct 2024</span>
              </div>
              <span className="inline-block mt-4 px-4 py-1.5 bg-yellow-50 text-yellow-600 rounded-full text-[10px] font-black uppercase tracking-wider border border-yellow-100">
                En cours d'examen
              </span>
            </div>

            <div className="bg-[#ff00ff]/5 p-6 rounded-3xl text-center min-w-35">
              <p className="text-[10px] font-black text-primary uppercase tracking-tighter mb-1">Performance (BAC)</p>
              <p className="text-3xl font-black text-primary">78.0%</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <GraduationCap/>, label: "FACULTÉ", value: "Médecine" },
              { icon: <Building2/>, label: "ÉTABLISSEMENT", value: "Collège Imara" },
              { icon: <BookOpen/>, label: "NIVEAU", value: "Licence 1 (L1)" },
              { icon: <FileText/>, label: "DIPLÔME", value: "Diplôme d'État" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-3xl border border-gray-50 shadow-sm">
                <div className="text-primary mb-3">{item.icon}</div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</p>
                <p className="font-bold text-gray-900 mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <h3 className="text-lg font-black flex items-center gap-3 mb-10">
              <div className="w-8 h-8 bg-[#ff00ff]/10 text-primary rounded-lg flex items-center justify-center"><CheckCircle2 size={18}/></div>
              Étapes de validation
            </h3>
            <div className="relative flex justify-between items-start max-w-2xl mx-auto">

              <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-100 z-0"></div>
              
              <div className="flex flex-col items-center gap-3 z-10 text-center">
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-200"><CheckCircle2 size={20}/></div>
                <div><p className="text-xs font-black">Paiement frais</p><p className="text-[10px] text-green-500 font-bold">Validé</p></div>
              </div>
              <div className="flex flex-col items-center gap-3 z-10 text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-[#ff00ff]/20"><FileText size={20}/></div>
                <div><p className="text-xs font-black">Documents</p><p className="text-[10px] text-primary font-bold">En cours</p></div>
              </div>
              <div className="flex flex-col items-center gap-3 z-10 text-center opacity-40">
                <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center"><CheckCircle2 size={20}/></div>
                <div><p className="text-xs font-black">Validation finale</p><p className="text-[10px] font-bold">Attente</p></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-black flex items-center gap-3">
                <div className="w-8 h-8 bg-[#ff00ff]/10 text-primary rounded-lg flex items-center justify-center"><FileText size={18}/></div>
                Documents envoyés
              </h3>
              <span className="bg-[#ff00ff]/10 text-primary px-4 py-1 rounded-full text-[10px] font-black">3 Fichiers</span>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "Baccalauréat - Relevé de notes", meta: "PDF • 1.2 MB • Envoyé le 12/10/2024" },
                { name: "Pièce d'Identité (CNI/Passeport)", meta: "JPG • 4.5 MB • Envoyé le 12/10/2024" },
                { name: "Photo d'identité", meta: "PNG • 800 KB • Envoyé le 12/10/2024" }
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-500 shadow-sm"><FileText size={20}/></div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{doc.name}</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase">{doc.meta}</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl text-xs font-black shadow-md shadow-blue-200 transition-all">
                    <Eye size={16}/> Visualiser
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-87.5 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 sticky top-8">
            <h3 className="text-lg font-black flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#ff00ff]/10 text-primary rounded-lg flex items-center justify-center"><AlertCircle size={18}/></div>
              Actions de validation
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2 block">Commentaires de l'agent</label>
                <textarea 
                  placeholder="Saisissez ici vos observations ou les motifs de rejet..."
                  className="w-full h-32 bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none resize-none"
                />
              </div>

              <div className="space-y-3 pt-2">
                <button className="w-full flex items-center justify-center gap-3 bg-secondary hover:bg-success text-white py-4 rounded-2xl font-black shadow-lg shadow-green-100 transition-all active:scale-95">
                  <CheckCircle2 size={20}/> Valider le dossier
                </button>
                <button className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-hover text-white py-4 rounded-2xl font-black shadow-lg shadow-[#ff00ff]/10 transition-all active:scale-95">
                  <XCircle size={20}/> Rejeter / Correction
                </button>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#ff00ff]/5 rounded-3xl border border-[#ff00ff]/10">
              <div className="flex gap-3">
                <AlertCircle className="text-primary shrink-0" size={20}/>
                <div>
                  <p className="text-xs font-black text-gray-900 mb-1">Rappel de procédure</p>
                  <p className="text-[10px] font-bold text-gray-500 leading-relaxed">
                    Assurez-vous que le relevé de notes du baccalauréat correspond exactement aux informations saisies par l'étudiant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <footer className="mt-12 text-center">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">
          © 2024 DAC - Portail Agent • Direction des Affaires Académiques
        </p>
      </footer>
    </AppLayout>
  );
}