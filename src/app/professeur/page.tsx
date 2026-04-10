"use client";
import AppLayout from "@/components/layouts/AppLayout";
import { BookOpen, CloudUpload, Users } from "lucide-react";

import { useState } from "react";
import StatCard from "./components/StatCard";
import CourseList from "./components/CourseList";
import TasksSidebar from "./components/TasksSidebar";
import UploadModal from "./components/UploadModal";

export default function PageProfesseur() {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  return (
    <AppLayout>
      <main className="flex-1 overflow-y-auto p-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Nombre de cours"
            value="12"
            subtitle="↗ +2 ce semestre"
            icon={BookOpen}
            bgClass="bg-blue-50"
            colorClass="text-blue-500"
            subtitleColor="text-emerald-500"
          />
          <StatCard
            title="Documents téléversés"
            value="148"
            subtitle="84% de l'objectif atteint"
            icon={CloudUpload}
            bgClass="bg-fuchsia-50"
            colorClass="text-fuchsia-500"
            subtitleColor="text-slate-400"
          />
          <StatCard
            title="Étudiants encadrés"
            value="452"
            subtitle="Sur 4 départements"
            icon={Users}
            bgClass="bg-amber-50"
            colorClass="text-amber-500"
            subtitleColor="text-slate-400"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <CourseList />

          {/* Right Sidebar - Tasks */}
          <div className="xl:col-span-1">
            <TasksSidebar onOpenUpload={() => setIsUploadModalOpen(true)} />
          </div>
        </div>
        <UploadModal
          isOpen={isUploadModalOpen}
          onClose={() => setIsUploadModalOpen(false)}
        />
      </main>
    </AppLayout>
  );
}
