import { create } from "zustand";

interface AppLayoutProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  isAlertVisible: boolean;
  setIsAlertVisible: (visible: boolean) => void;
  alert: string;
  setAlert: (message: string) => void;
  alertType: "success" | "error" | "info" | "warning";
  setAlertType: (type: "success" | "error" | "info" | "warning") => void;
}

export const useAppLayoutStore = create<AppLayoutProps>()((set) => ({
  isCollapsed: false,
  setIsCollapsed: (collapsed) => set({ isCollapsed: collapsed }),
  isAlertVisible: false,
  setIsAlertVisible: (visible) => set({ isAlertVisible: visible }),
  alert: "",
  setAlert: (message) => set({ alert: message }),
  alertType: "info",
  setAlertType: (type) => set({ alertType: type }),
}));
