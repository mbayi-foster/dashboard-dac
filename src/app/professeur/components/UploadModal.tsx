import { useState, useEffect, useRef } from "react";
import { Lock, Eye, Download, CloudUpload, Upload, X } from "lucide-react";

// --- DATA MOCKS ---
const MODAL_COURSES = [
  { id: "c1", name: "Base de données I", checked: true },
  { id: "c2", name: "Intelligence Artificielle", checked: false },
  { id: "c3", name: "Réseaux Informatiques", checked: false },
  { id: "c4", name: "Algorithmique II", checked: false },
];

// ... (le reste de tes imports et données)

export default function UploadModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [permission, setPermission] = useState<"read" | "download">("read");
  const modalRef = useRef<HTMLDivElement>(null);

  // Figer l'arrière-plan quand le modal est ouvert
  useEffect(() => {
    // 2. Fonction qui gère le clic
    const handleClickOutside = (event: MouseEvent) => {
      // Si la ref existe et que l'élément cliqué (target) n'est PAS dans le modal
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // 3. Ajouter l'écouteur d'événement quand le modal est ouvert
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "unset";
    }

    // Nettoyage au démontage du composant
    return () => {
      document.body.style.overflow = "unset"; // 3. Ajouter l'écouteur d'événement quand le modal est ouvert
      document.addEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // 1. Le conteneur parent prend tout l'écran et permet le défilement (overflow-y-auto)
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm">
      <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          ref={modalRef}
          className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header Modal */}
          <div className="flex items-start justify-between p-6 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Téléversement de Document
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Paramétrez la diffusion de votre contenu pédagogique.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Modal (on a retiré overflow-y-auto et flex-1) */}
          <div className="p-6 space-y-6">
            {/* Titre */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 block">
                Titre du document
              </label>
              <input
                type="text"
                placeholder="Ex: Introduction à l'Algorithmique - Chapitre 1"
                className="w-full p-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Catégorie */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 block">
                  Catégorie
                </label>
                <div className="relative">
                  <select className="w-full p-3 border border-slate-200 rounded-xl text-sm appearance-none bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer">
                    <option value="">Sélectionnez une catégorie</option>
                    <option value="cours">Support de cours</option>
                    <option value="td">Travaux Dirigés</option>
                    <option value="tp">Travaux Pratiques</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Cours concernés */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 block">
                  Cours concernés
                </label>
                <div className="border border-slate-200 rounded-xl p-3 space-y-3 bg-white h-40 overflow-y-auto custom-scrollbar">
                  {MODAL_COURSES.map((course) => (
                    <label
                      key={course.id}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        defaultChecked={course.checked}
                        className="w-4 h-4 rounded border-slate-300 text-fuchsia-500 focus:ring-fuchsia-500 cursor-pointer accent-fuchsia-500"
                      />
                      <span className="text-sm text-slate-700 group-hover:text-slate-900">
                        {course.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Permissions d'accès */}
            <div className="bg-slate-50/50 p-5 rounded-xl border border-slate-100 space-y-4">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                <Lock size={16} className="text-fuchsia-500" />
                Permissions d&apos;accès
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setPermission("read")}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                    permission === "read"
                      ? "border-fuchsia-500 bg-fuchsia-50/50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`p-2 rounded-full ${permission === "read" ? "bg-fuchsia-100 text-fuchsia-500" : "bg-slate-100 text-slate-400"}`}
                  >
                    <Eye size={20} />
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-sm ${permission === "read" ? "text-fuchsia-500" : "text-slate-800"}`}
                    >
                      Lecture seule
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Visualisation dans l&apos;app
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setPermission("download")}
                  className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                    permission === "download"
                      ? "border-fuchsia-500 bg-fuchsia-50/50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`p-2 rounded-full ${permission === "download" ? "bg-fuchsia-100 text-fuchsia-500" : "bg-slate-100 text-slate-400"}`}
                  >
                    <Download size={20} />
                  </div>
                  <div>
                    <h4
                      className={`font-bold text-sm ${permission === "download" ? "text-fuchsia-500" : "text-slate-800"}`}
                    >
                      Autoriser téléchargement
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Accès au fichier PDF
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Dropzone */}
            <div className="border-2 border-dashed border-blue-200 bg-blue-50/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center group hover:bg-blue-50/50 transition-colors cursor-pointer">
              <div className="bg-blue-100 text-blue-500 p-3 rounded-full mb-4">
                <CloudUpload size={24} />
              </div>
              <p className="text-sm text-slate-700 font-medium mb-1">
                Glissez votre fichier ici ou{" "}
                <span className="text-blue-500 hover:underline">
                  cliquez pour parcourir
                </span>
              </p>
              <p className="text-xs text-slate-400">
                PDF, DOCX, PPTX (Max. 50 Mo)
              </p>
            </div>
          </div>

          {/* Footer Modal (on a rajouté une bordure en bas pour fermer proprement la carte) */}
          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 rounded-b-2xl flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:flex">
              <div className="bg-slate-400 text-white text-[10px] font-bold p-1.5 rounded">
                DAC
              </div>
              <span className="text-xs font-bold text-slate-400 tracking-wider">
                DIGITAL ACADEMY CONGO
              </span>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-sm font-bold text-slate-600 hover:text-slate-800 transition-colors flex-1 sm:flex-none"
              >
                Annuler
              </button>
              <button className="px-6 py-2.5 bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 flex-1 sm:flex-none shadow-sm shadow-fuchsia-200">
                <Upload size={16} />
                Téléverser
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
