"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { AppNavbar } from "./AppNavbar";
import { AppSidebar } from "./AppSidebar";
import BreadCumbCustomise from "../ui/BreadCumbCustomise";
import BreadCumbPage from "../ui/BreadCumbPage";
import { useAppLayoutStore } from "@/store/appLayoutStore";
import { Snackbar, Alert } from "@mui/material";

export default function AppLayout({
  children,
  title,
  subtitle,
  pageTitle,
  actionHeader,
  onRefresh,
}: {
  children: ReactNode;
  title: string;
  subtitle: string;
  pageTitle?: string;
  actionHeader?: any;
  onRefresh?: () => void;
}) {
  const { isCollapsed, setIsCollapsed, setIsAlertVisible, isAlertVisible, alertType, alert } =
    useAppLayoutStore();

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Fonction de mise à jour
    function handleResize() {
      setWindowSize({ width: window.innerWidth });
    }

    // Ajouter l'écouteur
    window.addEventListener("resize", handleResize);

    // Nettoyage de l'événement au démontage
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowSize.width < 1000 && isClient) {
    setIsCollapsed(true);
  }

  if (windowSize.width < 768 && isClient) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-50 p-6 text-center">
        <div className="max-w-md space-y-4">
          {/* Optionnel : Icône d'avertissement */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
            <svg
              className="h-8 w-8 text-amber-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-gray-900">Écran trop restreint</h2>

          <p className="text-gray-600">
            Veuillez utiliser un écran plus large pour accéder au dashboard. L'interface
            d'administration nécessite plus d'espace pour un affichage optimal.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen">
      <AppNavbar
        onChangeCollapsed={() => setIsCollapsed(!isCollapsed)}
        isCollapsed={isCollapsed}
        onRefresh={onRefresh}
      />
      <AppSidebar isCollapsed={isCollapsed} />
      <main
        className={`${isCollapsed ? "ml-20" : "ml-64"} flex-1 px-6 overflow-y-auto pt-24 transition-all duration-400`}
      >
        <Snackbar
          open={isAlertVisible}
          autoHideDuration={4000} // Disparaît après 4 secondes
          onClose={() => {
            setIsAlertVisible(false);
          }}
          tabIndex={50}
          anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position
        >
          <Alert
            severity={alertType}
            onClose={() => {
              setIsAlertVisible(false);
            }}
            sx={{ width: "100%" }}
            variant="filled"
          >
            {alert}
          </Alert>
        </Snackbar>

        <BreadCumbPage title={title} subtitle={subtitle} pageTitle={pageTitle}>
          {actionHeader}
        </BreadCumbPage>
        {children}
      </main>
    </div>
  );
}
