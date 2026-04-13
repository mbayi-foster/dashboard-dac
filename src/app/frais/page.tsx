"use client";
import AppLayout from "@/components/layouts/AppLayout";
import AjoutFraisModal from "@/components/ui/AjoutFraisModal";
import {
  Book,
  ChevronLeft,
  ChevronRight,
  Currency,
  Download,
  Grid2x2,
  Pencil,
  PiggyBank,
  Play,
  Plus,
  UsersRound,
} from "lucide-react";
import React, { useState } from "react";

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState<"edit" | "add">("add");

  const openModal = (type: "edit" | "add") => {
    setTypeModal(type);
    setIsModalOpen(true);
  };
  const actionHeader = (
    <button
      onClick={() => {
        openModal("add");
      }}
      className="flex items-center justify-center gap-2 bg-primary hover:bg-hover text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/25 active:scale-95 cursor-pointer"
    >
      <Plus size={20} strokeWidth={3} />
      Ajouter un frais
    </button>
  );
  return (
    <AppLayout
      actionHeader={actionHeader}
      onRefresh={() => {}}
      pageTitle="Configuration des frais"
      title={"Liste des frais"}
      subtitle={"Configurer et gérer les frais pour chaque promotion."}
    >
      <div className="flex flex-col md:items-end justify-between gap-4">
        <div className="bg-white w-full dark:bg-[#2d142c] p-4 rounded-xl shadow-sm flex flex-wrap gap-4 items-center border border-primary/5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider pl-2">
              Filtrer par:
            </span>
          </div>
          <select className="text-sm border-slate-200 dark:border-slate-700 bg-transparent rounded-lg focus:ring-primary focus:border-primary">
            <option>Toutes les promotions</option>
            <option>L1 Informatique</option>
            <option>L2 Informatique</option>
            <option>L3 Informatique</option>
          </select>
          <select className="text-sm border-slate-200 dark:border-slate-700 bg-transparent rounded-lg focus:ring-primary focus:border-primary">
            <option>Toutes les catégories</option>
            <option>Frais Académiques</option>
            <option>Frais Techniques</option>
            <option>Frais Administratifs</option>
          </select>
          <div className="ml-auto flex gap-2">
            <button className="p-2 text-primary bg-primary/10 rounded-lg hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined">
                <Download />
              </span>
            </button>
            <button className="p-2 text-slate-400 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <span className="material-symbols-outlined">
                <Grid2x2 />
              </span>
            </button>
          </div>
        </div>
        {/* Fee List Table */}
        <div className="w-full bg-white dark:bg-[#2d142c] rounded-2xl shadow-xl shadow-primary/5 overflow-hidden border border-primary/10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-[#3d1a3b] border-b border-primary/10">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                  Type de Frais
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                  Montant (USD)
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                  Montant (CDF)
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">
                  Promotions Cibles
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-primary/5">
              {/* Minerval */}
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                      <span className="material-symbols-outlined">
                        <Book />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200">
                        Minerval (Frais Académiques)
                      </p>
                      <p className="text-xs text-slate-500">Frais d'inscription annuel</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-lg text-slate-900 dark:text-white">
                  $ 450.00
                </td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">
                  1,125,000 CDF
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase">
                    Toutes
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">
                        <Pencil size={18} />
                      </span>
                    </button>
                    <button className="p-1.5 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">
                        <Play size={18} />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Laboratoire */}
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                      <span className="material-symbols-outlined">
                        <Book />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200">
                        Frais de Laboratoire
                      </p>
                      <p className="text-xs text-slate-500">Accès aux équipements informatiques</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-lg text-slate-900 dark:text-white">
                  $ 75.00
                </td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">
                  187,500 CDF
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600">
                      L1
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600">
                      L2
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600">
                      L3
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">
                        <Pencil size={18} />
                      </span>
                    </button>
                    <button className="p-1.5 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">
                        <Play size={18} />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                      <span className="material-symbols-outlined">
                        <Book />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200">
                        Frais de Bibliothèque
                      </p>
                      <p className="text-xs text-slate-500">
                        Ressources numériques &amp; physiques
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-lg text-slate-900 dark:text-white">
                  $ 25.00
                </td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">
                  62,500 CDF
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary uppercase">
                    Toutes
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">
                        <Pencil size={18} />
                      </span>
                    </button>
                    <button className="p-1.5 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">
                        <Play size={18} />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
              <tr className="hover:bg-primary/5 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                      <span className="material-symbols-outlined">
                        <Book />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-slate-200">
                        Carte d'Étudiant
                      </p>
                      <p className="text-xs text-slate-500">
                        Identification &amp; Authentification
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-lg text-slate-900 dark:text-white">
                  $ 10.00
                </td>
                <td className="px-6 py-4 text-slate-600 dark:text-slate-400 font-medium">
                  25,000 CDF
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 uppercase">
                    Uniquement L1
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">
                        <Pencil size={18} />
                      </span>
                    </button>
                    <button className="p-1.5 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">
                        <Play size={18} />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="p-6 bg-slate-50/50 dark:bg-[#3d1a3b]/50 border-t border-primary/10 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Affichage de <span className="font-bold text-slate-900 dark:text-white">4</span> frais
              configurés
            </p>
            <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-lg border border-primary/10 shadow-sm">
              <button className="p-1 text-slate-400 hover:text-primary">
                <span className="material-symbols-outlined">
                  <ChevronLeft />
                </span>
              </button>
              <button className="px-3 py-1 bg-primary text-white rounded font-bold text-sm">
                1
              </button>
              <button className="px-3 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded text-sm font-medium">
                2
              </button>
              <button className="p-1 text-slate-400 hover:text-primary">
                <span className="material-symbols-outlined">
                  <ChevronRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Academic Info Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-[#2d142c] p-6 rounded-2xl border border-primary/10 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <span className="material-symbols-outlined text-3xl">
                <Currency />
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase mb-1">
                Taux de Change Actuel
              </h3>
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                1 USD = 2,500 CDF
              </p>
              <p className="text-xs text-primary font-bold mt-1 hover:underline cursor-pointer">
                Modifier le taux
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#2d142c] p-6 rounded-2xl border border-primary/10 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
              <span className="material-symbols-outlined text-3xl">
                <PiggyBank />
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase mb-1">Total Frais L1</h3>
              <p className="text-2xl font-black text-slate-900 dark:text-white">$ 560.00</p>
              <p className="text-[10px] text-slate-500">Hors frais facultatifs</p>
            </div>
          </div>
          <div className="bg-white dark:bg-[#2d142c] p-6 rounded-2xl border border-primary/10 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <span className="material-symbols-outlined text-3xl">
                <UsersRound />
              </span>
            </div>
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase mb-1">
                Promotions Actives
              </h3>
              <p className="text-2xl font-black text-slate-900 dark:text-white">12 Niveaux</p>
              <p className="text-[10px] text-slate-500">De Bac 1 à Master 2</p>
            </div>
          </div>
        </div>
      </div>
      <AjoutFraisModal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        type={typeModal}
      />
    </AppLayout>
  );
}
