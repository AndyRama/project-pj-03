'use client';

import { useState } from "react";
import SubHero from "@/features/landing/SubHero";
import CardContact from "@/features/contact/card/CardContact";
import ContactForm from "@/features/contact/card/ContactForm";

export default function Page() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <SubHero className={""} title={"contacter"} subTitle={"Pour me"} />

      <CardContact/>

      <div className="flex justify-center mt-10">
        <button 
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Masquer le formulaire" : "Formulaire d'inscription"}
        </button>
      </div>

      {showForm && <ContactForm className="mt-20" />}
    </>
  );
}
