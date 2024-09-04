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

      <div className="mt-10 flex justify-center lg:justify-end">
        <button 
          className="mr-0 rounded bg-orange-500 px-4 py-2 text-white hover:bg-transparent lg:mr-20 xl:mr-32 2xl:mr-80"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Masquer le formulaire" : "Formulaire d'inscription"}
        </button>
      </div>

      {showForm && <ContactForm className="mt-20" />}
    </>
  );
}
 