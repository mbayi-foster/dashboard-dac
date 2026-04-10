"use client";
import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  Calendar,
  File,
  FileCode2,
  MonitorPlay,
} from "lucide-react";
import AppLayout from "@/components/layouts/AppLayout";

type DocType = "PDF" | "WORD" | "POWERPOINT";
type DocCategory = "Syllabus" | "TP";

interface DocumentItem {
  id: string;
  title: string;
  size: string;
  course: string;
  type: DocType;
  category: DocCategory;
  date: string;
}

// --- DONNÉES SIMULÉES ---
const MOCK_DATA: DocumentItem[] = [
  {
    id: "1",
    title: "Syllabus_Algorithmique_V2.pdf",
    size: "1.2 MB",
    course: "Algorithmique Avancée",
    type: "PDF",
    category: "Syllabus",
    date: "12 Oct 2023",
  },
  {
    id: "2",
    title: "TP1_Installation_SQL.docx",
    size: "850 KB",
    course: "Bases de Données SQL",
    type: "WORD",
    category: "TP",
    date: "14 Oct 2023",
  },
  {
    id: "3",
    title: "Cours_Intro_Secu.pptx",
    size: "4.5 MB",
    course: "Sécurité Informatique",
    type: "POWERPOINT",
    category: "Syllabus",
    date: "18 Oct 2023",
  },
  {
    id: "4",
    title: "Examen_Blanc_L2.pdf",
    size: "2.1 MB",
    course: "Réseaux TCP/IP",
    type: "PDF",
    category: "TP",
    date: "20 Oct 2023",
  },
  {
    id: "5",
    title: "Projet_Fin_Etude_Gabarit.docx",
    size: "1.5 MB",
    course: "Méthodologie",
    type: "WORD",
    category: "Syllabus",
    date: "22 Oct 2023",
  },
  {
    id: "6",
    title: "TP2_Requetes_Avancees.pdf",
    size: "920 KB",
    course: "Bases de Données SQL",
    type: "PDF",
    category: "TP",
    date: "25 Oct 2023",
  },
  {
    id: "7",
    title: "Presentation_Soutenance.pptx",
    size: "5.2 MB",
    course: "Communication",
    type: "POWERPOINT",
    category: "TP",
    date: "28 Oct 2023",
  },
  {
    id: "8",
    title: "Syllabus_Dev_Web.pdf",
    size: "3.1 MB",
    course: "Développement Web",
    type: "PDF",
    category: "Syllabus",
    date: "01 Nov 2023",
  },
];

export default function PageDocuments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<DocCategory | "ALL">(
    "ALL",
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filteredDocuments = useMemo(() => {
    return MOCK_DATA.filter((doc) => {
      const matchesSearch =
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.course.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "ALL" || doc.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalItems = filteredDocuments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentDocuments = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredDocuments.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredDocuments, currentPage]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const getFileIcon = (type: DocType) => {
    switch (type) {
      case "PDF":
        return <FileCode2 className="text-red-500 w-6 h-6" />;
      case "WORD":
        return <File className="text-blue-500 w-6 h-6" />;
      case "POWERPOINT":
        return <MonitorPlay className="text-orange-500 w-6 h-6" />;
    }
  };

  const getCategoryBadge = (category: DocCategory) => {
    return category === "Syllabus" ? (
      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
        Syllabus
      </span>
    ) : (
      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
        TP
      </span>
    );
  };

  return (
    <AppLayout>
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* SEARCH & FILTER */}
        <div className="flex space-x-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par titre de document, catégorie..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Simple Filter Dropdown / Button logic */}
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-200 text-gray-700 py-3 pl-12 pr-8 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value as DocCategory | "ALL")
              }
            >
              <option value="ALL">Tous les filtres</option>
              <option value="Syllabus">Syllabus</option>
              <option value="TP">TP</option>
            </select>
            <Filter className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
          </div>
        </div>

        {/* DATA TABLE */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-4">Titre du document</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Catégorie</th>
                <th className="px-6 py-4">Date d&apos;ajout</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {currentDocuments.length > 0 ? (
                currentDocuments.map((doc) => (
                  <tr
                    key={doc.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 flex items-center">
                      <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mr-4 shrink-0">
                        {getFileIcon(doc.type)}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">
                          {doc.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {doc.size} • {doc.course}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-600">
                      {doc.type}
                    </td>
                    <td className="px-6 py-4">
                      {getCategoryBadge(doc.category)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {doc.date}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Visualiser
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-gray-500"
                  >
                    Aucun document trouvé pour cette recherche.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* PAGINATION */}
          <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
            <p className="text-sm text-gray-500 font-medium">
              Affichage de{" "}
              <span className="font-bold text-gray-800">
                {currentDocuments.length}
              </span>{" "}
              documents sur{" "}
              <span className="font-bold text-gray-800">{totalItems}</span> au
              total
            </p>

            <div className="flex items-center space-x-1">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                    currentPage === idx + 1
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
