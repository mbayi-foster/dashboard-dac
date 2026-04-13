import { updateUserStatus } from "@/data/actions/admins";
import { User } from "@/data/models/models";
import { ChangeUserStatusFormSchema } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FullPageLoader from "./FullPageLoader";
import { useAppLayoutStore } from "@/store/appLayoutStore";
interface ChangeUserStatusModalProps {
  user?: User;
  isOpen: boolean;
  onClose?: any;
  status: { value: string; label: string }[];
  updateAgentsList: any;
}
export default function ChangeUserStatusModal({
  user,
  isOpen = false,
  onClose,
  status = [],
  updateAgentsList,
}: ChangeUserStatusModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ChangeUserStatusFormSchema),

    // Optionnel : garder les valeurs par défaut
    // defaultValues: { matricule: "", email: "" }
  });

  const { setAlert, setAlertType, setIsAlertVisible } = useAppLayoutStore();

  const onSubmit = async (data: any) => {
    try {
      setIsLoading(true);
      const res = await updateUserStatus(user?.id ?? "", data.status);
      if (res) {
        updateAgentsList && updateAgentsList(res);
        onClose();
        setAlertType("success");
        setAlert("Status mis à jour avec succès !");
        setIsAlertVisible(true);
      } else {
        setAlertType("error");
        setAlert("Erreur lors de la mise à jour du status !");
        setIsAlertVisible(true);
      }
    } catch (error) {
      setAlertType("error");
      setAlert("Erreur lors de la mise à jour du status !");
      setIsAlertVisible(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (user) {
      reset({
        status: user?.status as "EN_COURS" | "ACTIVE" | "DISABLED" | "SUPPRIME" | undefined,
      });
    }
  }, [user]);
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm flex justify-center items-start overflow-y-auto py-6 sm:py-12 px-4"
        onClick={onClose}
      >
        <div
          className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative animate-in fade-in zoom-in duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 pb-4 flex justify-between items-start">
            <div>
              <h2 className="text-xl font-black text-gray-900 leading-tight">
                {user?.prenom} {user?.nom}
              </h2>
              <span className="text-sm font-light">{user?.matricule}</span>
              <p className="text-primary text-sm font-semibold mt-1">
                Mis à jour du status de l'agent
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer"
            >
              <X size={28} />
            </button>
          </div>
          <form className="p-8 pt-2 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2 mb-4">
              <label className="text-sm font-bold text-gray-700 ml-1">Status</label>
              <div className="flex items-center bg-primary/5 rounded-2xl">
                <select
                  {...register("status")}
                  name="status"
                  id="status"
                  className="block w-full px-3 py-2.5 text-heading text-sm rounded-2xl bg-primary/5 border-transparent"
                >
                  <option>Choisir le status</option>
                  {status.map((s) => (
                    <option value={s.value}>{s.label}</option>
                  ))}
                </select>
              </div>
              {errors?.status && (
                <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="flex cursor-pointer items-center gap-3 bg-primary hover:bg-hover text-white px-5 py-2 rounded-2xl font-black text-sm uppercase tracking-wider shadow-xl shadow-primary/30 transition-all active:scale-95"
            >
              Mis à jour
              <ArrowRight size={20} strokeWidth={3} />
            </button>
          </form>
        </div>
      </div>
      <FullPageLoader loading={isLoading} message="Création du compte en cours..." />
    </>
  );
}
