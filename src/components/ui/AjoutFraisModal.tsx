"use client";
import { Save, X } from "lucide-react";
import React from "react";

interface AjoutFraisModalProps {
  onClose?: () => void;
  type: "edit" | "add";
  isOpen?: boolean;
}

export default function AjoutFraisModal({
  onClose,
  type = "edit",
  isOpen = false,
}: AjoutFraisModalProps) {
  if (!isOpen) {
    return null;
  }
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
        <div className="p-8 pb-4 flex justify-between rounded-t-[2.5rem] items-start border-b border-gray-100 bg-gray-50 ">
          <div>
            <h2 className="text-3xl font-black text-gray-900 leading-tight">
              {type == "edit" ? `` : "Ajouter un nouveau frais"}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Configurez les détails du frais pour l'académie.
            </p>
            {/* <p className="text-primary text-sm font-semibold mt-1">{type=='edit' ? "Mettre à jour les données de l'agent":"Remplissez les informations pour créer un accès académique."}</p> */}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer"
          >
            <X size={28} />
          </button>
        </div>
        {/* Modal Body / Form */}
        <form action="">
          <div className="p-6 space-y-5">
            {/* Nom du frais */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Nom du frais
              </label>
              <input
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="Ex: Frais d'inscription"
                type="text"
              />
            </div>
            {/* Montants Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Montant en USD
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                    $
                  </span>
                  <input
                    className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="0.00"
                    type="number"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Montant en CDF
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                    FC
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    placeholder="0.00"
                    type="number"
                  />
                </div>
              </div>
            </div>
            {/* Académique & Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Année Académique
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none bg-no-repeat bg-position-[right_1rem_center] cursor-pointer"
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e')",
                  }}
                >
                  <option value="">Sélectionner l'année</option>
                  <option value="2023-2024">2023-2024</option>
                  <option value="2024-2025">2024-2025</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Date limite <span className="text-xs font-normal text-gray-400">(Optionnel)</span>
                </label>
                <input
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  type="date"
                />
              </div>
            </div>
            {/* Classes Concernées */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Classes concernées
              </label>
              <div className="border border-gray-200 dark:border-white/10 rounded-lg p-3 bg-gray-50 dark:bg-white/5 max-h-40 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {/* Class item */}
                  <label className="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-white/10 rounded-md cursor-pointer transition-colors">
                    <input
                      className="w-4 h-4 rounded text-accent-blue focus:ring-accent-blue border-gray-300"
                      type="checkbox"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      G1 Informatique
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-white/10 rounded-md cursor-pointer transition-colors">
                    <input
                      checked
                      className="w-4 h-4 rounded text-accent-blue focus:ring-accent-blue border-gray-300"
                      type="checkbox"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      G2 Informatique
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-white/10 rounded-md cursor-pointer transition-colors">
                    <input
                      checked
                      className="w-4 h-4 rounded text-accent-blue focus:ring-accent-blue border-gray-300"
                      type="checkbox"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      G3 Informatique
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-white/10 rounded-md cursor-pointer transition-colors">
                    <input
                      className="w-4 h-4 rounded text-accent-blue focus:ring-accent-blue border-gray-300"
                      type="checkbox"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">L1 Réseaux</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-white/10 rounded-md cursor-pointer transition-colors">
                    <input
                      className="w-4 h-4 rounded text-accent-blue focus:ring-accent-blue border-gray-300"
                      type="checkbox"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">L2 Réseaux</span>
                  </label>
                  <label className="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-white/10 rounded-md cursor-pointer transition-colors">
                    <input
                      className="w-4 h-4 rounded text-accent-blue focus:ring-accent-blue border-gray-300"
                      type="checkbox"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">G1 Économie</span>
                  </label>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 italic">
                Cochez les promotions auxquelles ce frais s'applique.
              </p>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-gray-50 rounded-b-[2.5rem] dark:bg-white/5 border-t border-gray-100 dark:border-white/10 flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button type="button" onClick={onClose} className="px-6 py-2.5 rounded-lg text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors order-2 sm:order-1">
              Annuler
            </button>
            <button type="submit" className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-primary hover:opacity-90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 order-1 sm:order-2">
              <span className="material-symbols-outlined text-sm"><Save /></span>
              Enregistrer le frais
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
