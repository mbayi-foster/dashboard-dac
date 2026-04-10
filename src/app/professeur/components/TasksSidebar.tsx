import {
  Upload,
  CloudUpload,
  CheckSquare,
  Check,
  UserCircle,
} from "lucide-react";
export default function TasksSidebar({
  onOpenUpload,
}: {
  onOpenUpload: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-6 bg-fuchsia-500 rounded-full"></div>
        <h2 className="text-xl font-bold text-slate-800">Tâches immédiates</h2>
      </div>

      <div className="space-y-4">
        {/* Task 1 */}
        <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 text-blue-500 p-2.5 rounded-xl">
              <Upload size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Téléverser les syllabus
              </h4>
              <p className="text-xs text-slate-500">
                Algorithmique Avancée (S2)
              </p>
            </div>
          </div>
          <button
            onClick={onOpenUpload}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
          >
            <CloudUpload size={16} />
            TÉLÉVERSER
          </button>
        </div>

        {/* Task 2 */}
        <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-fuchsia-100 text-fuchsia-500 p-2.5 rounded-xl">
              <CheckSquare size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Valider les notes
              </h4>
              <p className="text-xs text-slate-500">
                Session Rattrapage Septembre
              </p>
            </div>
          </div>
          <button className="w-full bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
            <Check size={16} />
            VALIDER
          </button>
        </div>

        {/* Task 3 */}
        <div className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 text-blue-500 p-2.5 rounded-xl">
              <UserCircle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">
                Mise à jour profil
              </h4>
              <p className="text-xs text-slate-500">
                Informations & publications
              </p>
            </div>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>
            MODIFIER
          </button>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-bold text-slate-700">
            Progression hebdomadaire
          </span>
          <span className="text-sm font-bold text-blue-500">60%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
