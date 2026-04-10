"use client";
import { useState, useEffect } from "react";
import {
  Calendar,
  dateFnsLocalizer,
  Event as CalendarEvent,
} from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { fr } from "date-fns/locale";

import AppLayout from "@/components/layouts/AppLayout";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { MapPin, Info } from "lucide-react";

const locales = {
  fr: fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 1 }),
  getDay,
  locales,
});

const BASE_DATE = new Date(2026, 4, 13);
const getDayDate = (offsetDays: number) =>
  new Date(BASE_DATE.getTime() + offsetDays * 24 * 60 * 60 * 1000);

// Étendre l'interface Event de base pour inclure nos données perso
interface DACEvent extends CalendarEvent {
  id: number;
  level: string;
  room: string;
  type: "lecture" | "tp";
  badge?: string;
}

const EVENTS: DACEvent[] = [
  {
    id: 1,
    title: "Algorithmique Avancée",
    start: new Date(getDayDate(0).setHours(8, 0, 0, 0)),
    end: new Date(getDayDate(0).setHours(10, 0, 0, 0)),
    level: "L2 INFO",
    room: "SALLE 102",
    type: "lecture",
  },
  {
    id: 2,
    title: "Intro au Cloud",
    start: new Date(getDayDate(0).setHours(10, 0, 0, 0)),
    end: new Date(getDayDate(0).setHours(11, 30, 0, 0)),
    level: "L1 BASE",
    room: "SALLE 204",
    type: "lecture",
  },
  {
    id: 3,
    title: "Architecture Réseaux & Sécurité",
    start: new Date(getDayDate(1).setHours(9, 0, 0, 0)),
    end: new Date(getDayDate(1).setHours(12, 0, 0, 0)),
    level: "L3 RÉSEAUX",
    badge: "TP",
    room: "LABO CISCO",
    type: "tp",
  },
  {
    id: 4,
    title: "Mathématiques Discrètes",
    start: new Date(getDayDate(3).setHours(8, 0, 0, 0)),
    end: new Date(getDayDate(3).setHours(9, 30, 0, 0)),
    level: "L2 INFO",
    room: "AMPHI B",
    type: "lecture",
  },
  {
    id: 5,
    title: "Base de Données",
    start: new Date(getDayDate(3).setHours(13, 0, 0, 0)),
    end: new Date(getDayDate(3).setHours(14, 30, 0, 0)),
    level: "L2 INFO",
    room: "SALLE 102",
    type: "lecture",
  },
  {
    id: 6,
    title: "Systèmes d'Exploitation",
    start: new Date(getDayDate(3).setHours(14, 30, 0, 0)),
    end: new Date(getDayDate(3).setHours(16, 0, 0, 0)),
    level: "L2 INFO",
    room: "SALLE 102",
    type: "lecture",
  },
  {
    id: 7,
    title: "Data Mining",
    start: new Date(getDayDate(4).setHours(10, 0, 0, 0)),
    end: new Date(getDayDate(4).setHours(11, 30, 0, 0)),
    level: "M1 DATA",
    room: "AMPHI C",
    type: "lecture",
  },
  {
    id: 8,
    title: "TP Programmation Avancée",
    start: new Date(getDayDate(4).setHours(13, 0, 0, 0)),
    end: new Date(getDayDate(4).setHours(15, 0, 0, 0)),
    level: "L2 INFO",
    badge: "TP",
    room: "LABO 1",
    type: "tp",
  },
];

const CustomEvent = ({ event }: { event: DACEvent }) => {
  const bgClass = event.type === "lecture" ? "bg-blue-500" : "bg-fuchsia-500";

  return (
    <div
      className={`h-full w-full rounded-lg p-2 flex flex-col justify-start border border-white/10 overflow-hidden shadow-sm hover:opacity-90 transition-opacity ${bgClass}`}
    >
      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
        <span className="text-[9px] font-bold bg-white/20 text-white px-1.5 py-0.5 rounded uppercase tracking-wider">
          {event.level}
        </span>
        {event.badge && (
          <span className="text-[9px] font-bold bg-white text-fuchsia-600 px-1.5 py-0.5 rounded uppercase tracking-wider">
            {event.badge}
          </span>
        )}
      </div>
      <span className="font-bold text-xs leading-tight text-white mb-1 line-clamp-2">
        {event.title}
      </span>
      <div className="mt-auto flex items-center gap-1 text-[10px] font-medium text-white/80 truncate">
        <MapPin size={10} />
        {event.room}
      </div>
    </div>
  );
};

export default function PageEmploiTemps() {
  const [view, setView] = useState<"week" | "day">("week");
  const [date, setDate] = useState(BASE_DATE);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppLayout>
      <main className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex-1 flex flex-col overflow-hidden p-4">
          <style>{`
              .rbc-calendar { font-family: inherit; }
              .rbc-header { padding: 12px 0; font-weight: 700; color: #94a3b8; font-size: 0.75rem; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; }
              .rbc-today { background-color: #f8fafc; }
              .rbc-time-view { border: none; }
              .rbc-time-header { border-bottom: 1px solid #e2e8f0; margin-bottom: 8px; }
              .rbc-timeslot-group { border-bottom: 1px solid #f1f5f9; min-height: 60px; }
              .rbc-time-content { border-top: none; }
              .rbc-day-slot .rbc-events-container { margin-right: 8px; }
              .rbc-event { background: transparent !important; border: none !important; padding: 0 !important; }
              .rbc-event:focus { outline: none; }
              .rbc-allday-cell { display: none; }
              .rbc-time-view .rbc-allday-cell { display: none; }
            `}</style>

          <Calendar
            localizer={localizer}
            events={EVENTS}
            startAccessor="start"
            endAccessor="end"
            defaultView="week"
            view={isMobile ? "day" : view}
            views={isMobile ? ["day"] : ["week", "day"]}
            onView={(newView) => setView(newView as "week" | "day")}
            date={date}
            onNavigate={(newDate) => setDate(newDate)}
            min={new Date(0, 0, 0, 8, 0, 0)}
            max={new Date(0, 0, 0, 18, 0, 0)}
            culture="fr"
            messages={{
              week: "Hebdomadaire",
              day: "Journalier",
              today: "Aujourd'hui",
              previous: "Précédent",
              next: "Suivant",
            }}
            components={{
              event: CustomEvent,
            }}
          />
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-600 bg-white p-4 rounded-xl border border-slate-200">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500 shadow-sm"></span>
              Cours Magistral
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-fuchsia-500 shadow-sm"></span>
              Travaux Pratiques / Session Spéciale
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Info size={16} />
            Cliquez ou glissez pour interagir
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
