"use client"
import Image from "next/image";
import LogoDac from "@/assets//images/favicon.svg";
import { ArrowLeft, ArrowRightCircle, CheckCircle, Eye, EyeOff, GraduationCap } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ResetPasswordPage() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const [showPassword, setShowPassword] = useState(false);
  
    // VALIDATION
    const isLengthValid = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
    const hasNumber = /[0-9]/.test(password);
  
    const isMatch = password === confirmPassword;
  
    // FORCE PASSWORD
    const getStrength = () => {
      let score = 0;
      if (isLengthValid) score++;
      if (hasUpperCase) score++;
      if (hasSpecialChar) score++;
      if (hasNumber) score++;
  
      return score;
    };
  
    const strength = getStrength();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!isMatch) {
        alert("Les mots de passe ne correspondent pas");
        return;
      }
  
      if (strength < 2) {
        alert("Mot de passe trop faible");
        return;
      }
  
      console.log("Mot de passe mis à jour :", password);
    };
  
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="flex items-center justify-center gap-8 mb-8 p-4 rounded-lg">
        <Image 
          src={LogoDac} 
          alt="DAC" 
          width={60} 
          height={60}
          className="drop-shadow-md"
        />
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
      className="bg-white p-6 rounded-xl shadow w-87.5"
    >
      <h2 className="text-xl font-bold mb-2 text-center">
        Créer un nouveau mot de passe
      </h2>

      <p className="text-sm text-gray-500 mb-4 text-center">
        Votre nouveau mot de passe doit être différent des précédents.
      </p>

      {/* PASSWORD */}
      <div className="mb-3">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nouveau mot de passe
        </label>
        <div className="flex items-center bg-gray-400/10 rounded-xl px-5 border-2 border-gray-500 transition-border focus-within:ring-2 focus-within:ring-primary/40 transition-all">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Nouveau mot de passe"
            className="w-full p-2 border-none bg-transparent rounded placeholder:text-gray-500 text-gray-700 font-medium focus:ring-0 focus:outline-none outline-none ring-0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <EyeOff
              size={20}
              className="text-gray-500 shrink-0 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Eye
              size={20}
              className="text-gray-500 shrink-0 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
      </div>

      {/* STRENGTH BAR */}
      <div className="flex gap-1 mb-2">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={`h-1 flex-1 ${
              strength >= level ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-xs text-primary mb-3">
        {strength === 1 && "Weak"}
        {strength === 2 && "Fairly Strong"}
        {strength === 3 && "Strong"}
        {strength === 4 && "Very Strong"}
      </p>

      {/* CONFIRM PASSWORD */}
      <div className="mb-3">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700 mb-1 mt-1"
        >
          Confirmer le mot de passe
        </label>
        <div className="flex items-center bg-gray-400/10 rounded-xl px-5 border-2 border-gray-500 transition-border focus-within:ring-2 focus-within:ring-primary/40 transition-all">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmer le mot de passe"
            className="w-full p-2 border-none bg-transparent rounded placeholder:text-gray-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {showPassword ? (
            <EyeOff
              size={20}
              className="text-gray-500 shrink-0 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Eye
              size={20}
              className="text-gray-500 shrink-0 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
      </div>

      {/* RULES */}
      <div className="text-sm mb-4 bg-gray-400/10 p-3 rounded-2xl">
        <h3 className="uppercase font-semibold text-sm text-gray-500">
          Exigences de sécurité
        </h3>
        <p className={isLengthValid ? "text-green-500" : "text-gray-400"}>
          <CheckCircle size={20} className="inline-block ml-1" /> Minimum 8 caractères
        </p>
        <p className={hasUpperCase ? "text-green-500" : "text-gray-400"}>
          <CheckCircle size={20} className="inline-block ml-1" /> Une lettre majuscule
        </p>
        <p className={hasSpecialChar ? "text-green-500" : "text-gray-400"}>
          <CheckCircle size={20} className="inline-block ml-1" /> Un caractère spécial
        </p>
        <p className={hasNumber ? "text-green-500" : "text-gray-400"}>
          <CheckCircle size={20} className="inline-block ml-1" /> Un chiffre
        </p>
      </div>

      {/* BUTTON */}
      <button className="w-full bg-primary text-white p-2 rounded-xl cursor-pointer transition-shadow hover:shadow-2xl">
        Changer le mot de passe{" "}
        <ArrowRightCircle size={20} className="inline-block ml-1" />
      </button>

      <div className="w-full flex justify-center items-center mt-2">
        <Link
          href="auth/login"
          className="text-black hover:underline text-center text-sm"
        >
          <ArrowLeft size={15} className="inline-block mr-1" />Retour à la page de connexion
        </Link>
      </div>
    </form>
        </div>
    );
}
