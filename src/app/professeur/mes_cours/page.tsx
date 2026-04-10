"use client";
import React, { useState, useMemo } from "react";
import AppLayout from "@/components/layouts/AppLayout";
import {
  Search,
  Filter,
  Code,
  Layers,
  ShieldCheck,
  Globe,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  Check,
} from "lucide-react";

const COURSES = [
  {
    id: "1",
    name: "Algorithmique Avancée",
    subtitle: "CS301 • Architecture Logicielle",
    hours: 45,
    status: "green",
    level: "L3 INFO",
    date: "Mar. 12 Octobre",
    time: "10:00 — 12:30 (S204)",
    icon: Code,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "2",
    name: "Bases de Données SQL",
    subtitle: "CS204 • Systèmes d'Info",
    hours: 60,
    status: "green",
    level: "L2 INFO",
    date: "Mer. 13 Octobre",
    time: "14:30 — 17:00 (Lab A)",
    icon: Layers,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-400",
  },
  {
    id: "3",
    name: "Sécurité Informatique",
    subtitle: "CS405 • Cyberdéfense",
    hours: 30,
    status: "yellow",
    level: "M1 SECU",
    date: "Ven. 15 Octobre",
    time: "08:00 — 11:00 (S102)",
    icon: ShieldCheck,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "4",
    name: "Réseaux TCP/IP",
    subtitle: "CS202 • Connectivité",
    hours: 45,
    status: "green",
    level: "L2 INFO",
    date: "Lun. 18 Octobre",
    time: "09:00 — 12:00 (Amphi A)",
    icon: Globe,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "5",
    name: "Réseaux TCP/IP",
    subtitle: "CS202 • Connectivité",
    hours: 45,
    status: "green",
    level: "L2 INFO",
    date: "Lun. 18 Octobre",
    time: "09:00 — 12:00 (Amphi A)",
    icon: Globe,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "6",
    name: "Réseaux TCP/IP",
    subtitle: "CS202 • Connectivité",
    hours: 45,
    status: "green",
    level: "L2 INFO",
    date: "Lun. 18 Octobre",
    time: "09:00 — 12:00 (Amphi A)",
    icon: Globe,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: "7",
    name: "Réseaux TCP/IP",
    subtitle: "CS202 • Connectivité",
    hours: 45,
    status: "green",
    level: "L2 INFO",
    date: "Lun. 18 Octobre",
    time: "09:00 — 12:00 (Amphi A)",
    icon: Globe,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
];

const ITEMS_PER_PAGE = 5;

const AVAILABLE_CLASSES = Array.from(new Set(COURSES.map((c) => c.level)));

export default function PageMesCours() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeClassFilter, setActiveClassFilter] = useState<string | null>(
    null,
  );

  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesSearch =
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.level.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesClass = activeClassFilter
        ? course.level === activeClassFilter
        : true;
      return matchesSearch && matchesClass;
    });
  }, [searchQuery, activeClassFilter]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeClassFilter]);

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <AppLayout>
      <main className="flex-1 overflow-y-auto p-8">
        {/* Top Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Rechercher un cours par nom, code ou classe..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* Bouton pour effacer la recherche s'il y a du texte */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                &times;
              </button>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center justify-center gap-2 px-6 py-3.5 border rounded-2xl text-sm font-bold transition-colors shadow-sm ${
                activeClassFilter || isFilterOpen
                  ? "bg-blue-50 border-blue-200 text-blue-600"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              }`}
            >
              <Filter
                size={18}
                className={
                  activeClassFilter ? "text-blue-600" : "text-blue-500"
                }
              />
              {activeClassFilter ? activeClassFilter : "Filtrer"}
            </button>

            {/* Menu déroulant des filtres */}
            {isFilterOpen && (
              <>
                {/* Overlay invisible pour fermer le menu quand on clique à côté */}
                <div
                  className="fixed inset-0 z-auto"
                  onClick={() => setIsFilterOpen(false)}
                ></div>
                <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-2xl shadow-xl z-10 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-2">
                    Filtrer par classe
                  </div>
                  <button
                    onClick={() => {
                      setActiveClassFilter(null);
                      setIsFilterOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                  >
                    Toutes les classes
                    {!activeClassFilter && (
                      <Check size={16} className="text-blue-500" />
                    )}
                  </button>
                  {AVAILABLE_CLASSES.map((cls) => (
                    <button
                      key={cls}
                      onClick={() => {
                        setActiveClassFilter(cls);
                        setIsFilterOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex items-center justify-between"
                    >
                      {cls}
                      {activeClassFilter === cls && (
                        <Check size={16} className="text-blue-500" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Courses Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col min-h-100">
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/50">
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-wider w-2/5">
                    Nom du cours
                  </th>
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Volume Horaire
                  </th>
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Classe
                  </th>
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Prochaine séance
                  </th>
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedCourses.length > 0 ? (
                  paginatedCourses.map((course) => (
                    <tr
                      key={course.id}
                      className="hover:bg-slate-50/50 transition-colors group"
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`${course.iconBg} ${course.iconColor} p-3 rounded-xl`}
                          >
                            <course.icon size={22} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-base mb-0.5">
                              {course.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              {course.subtitle}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-800">
                            {course.hours} Heures
                          </span>
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${course.status === "green" ? "bg-emerald-500" : "bg-amber-400"}`}
                          ></span>
                        </div>
                      </td>
                      <td className="p-6">
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-bold border border-slate-200">
                          {course.level}
                        </span>
                      </td>
                      <td className="p-6">
                        <div className="flex items-start gap-2">
                          <CalendarDays
                            size={16}
                            className="text-slate-400 mt-0.5"
                          />
                          <div>
                            <p className="font-bold text-slate-700 text-sm">
                              {course.date}
                            </p>
                            <p className="text-xs font-bold text-blue-500">
                              {course.time}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-right">
                        <button className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-sm shadow-fuchsia-200 transition-colors">
                          Gérer
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-slate-500">
                      Aucun cours ne correspond à votre recherche.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          {filteredCourses.length > 0 && (
            <div className="border-t border-gray-100 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm font-semibold text-gray-500">
                Affichage de{" "}
                <span className="text-gray-900 font-black">
                  {startIndex + 1}-
                  {Math.min(
                    startIndex + ITEMS_PER_PAGE,
                    filteredCourses.length,
                  )}
                </span>{" "}
                sur{" "}
                <span className="text-gray-900 font-black">
                  {filteredCourses.length}
                </span>{" "}
                dossiers
              </p>

              <div className="flex gap-1.5">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>

                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-9 h-9 flex items-center justify-center rounded-xl font-bold text-sm transition-colors ${
                      currentPage === idx + 1
                        ? "bg-primary text-white shadow-md shadow-primary/20"
                        : "bg-transparent text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 flex items-center justify-center rounded-xl border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </AppLayout>
  );
}
