import { Sexe } from "@/data/models/models";
import * as z from "zod";

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export const LoginFormSchema = z.object({
  email: z.email({ error: "Veillez entrer une adresse email valide" }).trim(),
  password: z.string().min(6).max(100),
});

export const CreateUserFormSchema = z.object({
  nom: z
    .string()
    .min(2, { message: "Le nom doit comporter au moins 2 caractères" })
    .max(50, { message: "Le nom ne peut pas dépasser 50 caractères" })
    .trim(),
  postnom: z
    .string()
    .min(2, { message: "Le postnom doit comporter au moins 2 caractères" })
    .max(50, { message: "Le postnom ne peut pas dépasser 50 caractères" })
    .trim(),
  prenom: z
    .string()
    .min(2, { message: "Le prénom doit comporter au moins 2 caractères" })
    .max(50, { message: "Le prénom ne peut pas dépasser 50 caractères" })
    .trim(),
  email: z.email({ error: "Veillez entrer une adresse email valide" }).trim(),
  sexe: z.enum(Sexe, { message: "Le genre doit être sélectionné" }).default(Sexe.MALE),
  telephone: z
    .string()
    .min(10, {
      message: "Le numéro de téléphone doit comporter au moins 10 chiffres",
    })
    .max(15, {
      message: "Le numéro de téléphone ne peut pas dépasser 15 chiffres",
    })
    .trim()
    .nullable(),
  roles: z.array(z.number()).min(1, { message: "Veuillez sélectionner au moins un rôle" }),
});

export const ChangeUserStatusFormSchema = z.object({
  status: z.enum(["EN_COURS", "ACTIVE", "DISABLED", "SUPPRIME"], {
    message: "Viellez choisir un status valide.",
  }),
});
