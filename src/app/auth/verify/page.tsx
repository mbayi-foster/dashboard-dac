"use client"

import { GraduationCap, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { MdEmail } from "react-icons/md";
import LogoDac from "@/assets/images/favicon.svg";
import Link from "next/link";

export default function VerifyPage() {
   const [code, setCode] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
  
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  
    const handleChange = (value: string, index: number) => {
      if (!/^[0-9]?$/.test(value)) return;
  
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
  
      if (value && index < 5) {
        inputsRef.current[index + 1]?.focus();
      }
    };
  
    const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
      if (e.key === "Backspace" && !code[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const finalCode = code.join("");
  
      if (finalCode.length !== 6) {
        setError("Code invalide");
        return;
      }
  
      setLoading(true);
      setError("");
  
      try {
        const res = await fetch("/api/auth/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code: finalCode }),
        });
  
        if (!res.ok) {
          throw new Error("Code incorrect");
        }
  
        alert("Compte vérifié !");
        window.location.href = "/auth/login";
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    const handleResend = async () => {
      // try {
      //   await fetch("/api/auth/resend-code", {
      //     method: "POST",
      //   });
      //   alert("Code renvoyé !");
      // } catch {
      //   alert("Erreur lors du renvoi");
      // }
    };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
       <div className="w-full min-h-screen flex flex-col justify-center items-center">
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
              className="bg-white p-6 rounded-xl shadow w-[400px] text-center"
            >
              <div className="w-full flex justify-center items-center">
                <MdEmail
                  size={20}
                  className="text-secondary mb-2 bg-secondary/40 w-14 text-center h-14 rounded-full p-2"
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">Vérifiez votre email</h2>
      
              <p className="text-gray-500 text-sm mb-4">
               Saisissez le code à 6 chiffres qui vous a été envoyé par courriel.
              </p>
      
              {/* OTP INPUTS */}
              <div className="flex justify-between mb-4">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={digit}
                    ref={(el) => {
                      inputsRef.current[index] = el;
                    }}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="w-12 h-12 text-center border rounded text-lg focus:outline-blue-500"
                  />
                ))}
              </div>
      
              {/* ERROR */}
              {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      
              {/* BUTTON */}
              <button
                disabled={loading}
                className="w-full bg-secondary text-white py-2 rounded-lg mb-3"
              >
                {loading ? "Verification..." : "Verify Account"}
              </button>
      
              {/* RESEND */}
              <p className="text-sm text-gray-500">
                Vous n'avez pas reçu le code ?{" "}
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-blue-500"
                >
                  Renvoyer le code
                </button>
              </p>
              <div className="w-full flex justify-center items-center text-gray-500 mt-4 gap-2">
                
                <Link
                  href="/auth/login"
                  className="flex justify-center items-center text-gray-500 hover:underline hover:text-secondary duration-300 transition-colors"
                >
                  <ArrowLeft size={15} className="me-1" />
                  Annuler
                </Link>
                <div className="bg-gray-500 w-[1.2px] h-4.5"/>
                <Link
                  href="#"
                  className="flex justify-center items-center text-gray-500 hover:underline hover:text-secondary duration-300 transition-colors"
                >
                  Contacter l'assistance
                </Link>
              </div>
            </form>
          </div>
    </div>
  );
}