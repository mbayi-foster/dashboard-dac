import {
  MoreVertical,
  Code,
  Database,
  ShieldCheck,
  Search,
  Filter,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import React, { useState, useMemo } from "react";

// --- TYPES ---
type Course = {
  id: string;
  name: string;
  code: string;
  semester: string;
  hours: number;
  level: string;
  date: string;
  time: string;
  icon: React.ElementType;
};

// --- DATA MOCKS ---
const COURSES: Course[] = [
  {
    id: "1",
    name: "Algorithmique Avancée",
    code: "CS301",
    semester: "Semestre 2",
    hours: 45,
    level: "L3",
    date: "12 Octobre",
    time: "10:00 - 12:00",
    icon: Code,
  },
  {
    id: "2",
    name: "Bases de Données SQL",
    code: "CS204",
    semester: "Semestre 2",
    hours: 60,
    level: "L2",
    date: "12 Octobre",
    time: "14:30 - 16:30",
    icon: Database,
  },
  {
    id: "3",
    name: "Sécurité Informatique",
    code: "CS405",
    semester: "Semestre 1",
    hours: 30,
    level: "M1",
    date: "14 Octobre",
    time: "08:00 - 11:00",
    icon: ShieldCheck,
  },
];

const ITEMS_PER_PAGE = 3;

const AVAILABLE_CLASSES = Array.from(new Set(COURSES.map((c) => c.level)));

export default function CourseList() {
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
    <div className="xl:col-span-2 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-800">
            Mes Cours Assignés
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Rechercher un cours..."
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64 shadow-sm"
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
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 text-xs uppercase tracking-wider border-b border-slate-100">
                <th className="p-6 font-semibold">Nom du cours</th>
                <th className="p-6 font-semibold">Volume Horaire</th>
                <th className="p-6 font-semibold">Classe</th>
                <th className="p-6 font-semibold">Prochaine séance</th>
                <th className="p-6 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedCourses.length > 0 ? (
                paginatedCourses.map((course) => (
                  <tr
                    key={course.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-50 text-blue-500 p-3 rounded-xl">
                          <course.icon size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-800">
                            {course.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            Code: {course.code} • {course.semester}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <p className="font-bold text-slate-800">{course.hours}</p>
                      <p className="text-xs text-slate-500">Heures</p>
                    </td>
                    <td className="p-6">
                      <span className="bg-fuchsia-100 text-fuchsia-600 px-3 py-1 rounded-full text-xs font-bold">
                        {course.level}
                      </span>
                    </td>
                    <td className="p-6">
                      <p className="font-bold text-slate-800">{course.date}</p>
                      <p className="text-xs text-emerald-500 font-medium">
                        {course.time}
                      </p>
                    </td>
                    <td className="p-6 text-center">
                      <button className="text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreVertical size={20} />
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
        {/* Pagination */}
        {filteredCourses.length > 0 && (
          <div className="border-t border-gray-100 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-semibold text-gray-500">
              Affichage de{" "}
              <span className="text-gray-900 font-black">
                {startIndex + 1}-
                {Math.min(startIndex + ITEMS_PER_PAGE, filteredCourses.length)}
              </span>{" "}
              sur{" "}
              <span className="text-gray-900 font-black">
                {filteredCourses.length}
              </span>{" "}
              dossiers
            </p>

            <div className="flex gap-1.5">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
    </div>
  );
}
