"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoDac from "@/assets/images/favicon.svg";
import { ArrowLeft, ArrowRight, GraduationCap, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function page() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email");
      return;
    }
    if (!email.includes("@")) {
      alert("Email invalide");
      return;
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center py-8 px-4">
      <div className="flex flex-col flex-1 items-center justify-center gap-4 w-full">
        <div className="flex items-center justify-center gap-8 mb-8 p-4 rounded-lg">
          <Image src={LogoDac} alt="DAC" width={60} height={60} className="drop-shadow-md" />
          <div className="w-px h-16 bg-gray-200"></div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 border border-indigo-200 p-3 rounded-xl shadow-sm">
              <GraduationCap size={24} className="text-indigo-600" />
            </div>
            <p className="uppercase text-xs text-gray-600 font-semibold tracking-wide">
              Partner University
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-87.5 flex flex-col justify-center items-center bg-white p-6 rounded-xl shadow-sm"
        >
          <h1 className="font-bold text-xl mb-4 text-center">
            Demande de réinitialisation du mot de passe
          </h1>
          <p className="text-center text-gray-400 text-sm">
            Saisissez votre adresse e-mail pour recevoir un code permettant de réinitialiser votre
            mot de passe.
          </p>
          <div className="w-full mt-4 flex flex-col gap-1">
            <label htmlFor="email" className="mb-1 font-semibold">
              Adresse email
            </label>
            <div className="flex items-center bg-gray-400/10 rounded-lg ring-2 ring-gray-300 px-5 focus-within:ring-2 focus-within:ring-primary/40 transition-all">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-none py-2 px-3 focus:outline-none font-medium ring-0 focus:ring-0 bg-transparent placeholder:text-gray-500 text-gray-700"
                placeholder="example@mail.com"
              />
              <Mail size={20} className="text-gray-500 shrink-0" />
            </div>
          </div>
          <button
            className="text-sm w-full bg-primary hover:bg-primary/60 mt-3 cursor-pointer text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
            onClick={() => {
              router.push("/auth/verify");
            }}
          >
            <ArrowRight className="inline mr-2" size={14} />
            Envoyer le code
          </button>
          <Link
            href={"/auth/login"}
            className="text-secondary mt-8 text-sm font-medium hover:underline"
          >
            <ArrowLeft className="inline mr-2" size={14} />
            Retour à la page de connexion
          </Link>
        </form>
        <p className="text-center text-gray-400 text-sm">
          @2026 Digital Academy Congo, All rights reserved
        </p>
      </div>
    </div>
  );
}
