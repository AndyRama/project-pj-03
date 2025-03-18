'use client'

import React, { useState } from 'react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <nav className="mb-16 flex items-center justify-between">
            <div className="text-2xl font-bold">AutoPilot</div>
            <div className="hidden space-x-8 md:flex">
              <a href="#fonctionnalites" className="transition hover:text-blue-200">Fonctionnalités</a>
              <a href="#avantages" className="transition hover:text-blue-200">Avantages</a>
              <a href="#temoignages" className="transition hover:text-blue-200">Témoignages</a>
              <a href="#contact" className="transition hover:text-blue-200">Contact</a>
            </div>
            <button className="rounded-lg bg-white px-5 py-2 font-medium text-blue-700 transition hover:bg-blue-50">
              Se connecter
            </button>
          </nav>

          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-10 md:mb-0 md:w-1/2">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Automatisez vos processus administratifs et gagnez en productivité
              </h1>
              <p className="mb-8 text-xl">
                Notre solution tout-en-un simplifie la gestion documentaire, le marketing, le service client et la fidélisation client pour les entreprises et PME.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button 
                  className="rounded-lg bg-white px-8 py-3 text-lg font-medium text-blue-700 transition hover:bg-blue-50"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}    
                >
                  Réserver une démo
                </button>
                <button className="rounded-lg border-2 border-white bg-transparent px-8 py-3 text-lg font-medium transition hover:bg-white hover:text-blue-700">
                  En savoir plus
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/api/placeholder/600/400" alt="Dashboard d'automatisation" className="rounded-xl shadow-2xl" />
            </div>
          </div>
        </div>
      </header>

      {/* Problématiques Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Les défis quotidiens qui freinent votre croissance</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="size-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Gestion documentaire chaotique</h3>
              <p className="text-gray-600">Des heures perdues à chercher, classer et traiter manuellement vos documents administratifs.</p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="size-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Marketing inefficace</h3>
              <p className="text-gray-600">Des actions marketing désorganisées et sans suivi cohérent pour mesurer leur efficacité.</p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="size-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Service client débordé</h3>
              <p className="text-gray-600">Des clients mécontents et des équipes sous pression face à l'afflux de demandes.</p>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-md transition hover:shadow-lg">
              <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="size-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Perte de clients</h3>
              <p className="text-gray-600">Incapacité à suivre et reconquérir vos anciens clients par manque d'outils adaptés.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Solution */}
      <section id="fonctionnalites" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Une plateforme intelligente qui transforme votre entreprise</h2>
          
          <div className="grid gap-12 md:grid-cols-2">
            <div className="flex items-start">
              <div className="mr-5 rounded-full bg-blue-100 p-3">
                <svg className="size-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Automatisation documentaire</h3>
                <p className="text-gray-600">Classement, archivage et traitement intelligents de tous vos documents administratifs grâce à l'IA.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-5 rounded-full bg-blue-100 p-3">
                <svg className="size-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Marketing automatisé</h3>
                <p className="text-gray-600">Campagnes programmées, personnalisées et suivies pour convertir plus efficacement vos prospects.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-5 rounded-full bg-blue-100 p-3">
                <svg className="size-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Service client augmenté</h3>
                <p className="text-gray-600">Réponses automatisées aux questions fréquentes et suivi personnalisé des demandes complexes.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-5 rounded-full bg-blue-100 p-3">
                <svg className="size-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">Fidélisation client</h3>
                <p className="text-gray-600">Détection des signaux d'abandon et campagnes de reconquête automatisées pour garder vos clients actifs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section id="avantages" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Les bénéfices concrets pour votre entreprise</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-8 text-center shadow">
              <div className="mb-4 text-4xl font-bold text-blue-600">70%</div>
              <h3 className="mb-2 text-xl font-semibold">Gain de temps</h3>
              <p className="text-gray-600">De temps économisé sur les tâches administratives répétitives.</p>
            </div>
            
            <div className="rounded-xl bg-white p-8 text-center shadow">
              <div className="mb-4 text-4xl font-bold text-blue-600">30%</div>
              <h3 className="mb-2 text-xl font-semibold">Réduction des coûts</h3>
              <p className="text-gray-600">Diminuez vos frais de gestion en moyenne par automatisation.</p>
            </div>
            
            <div className="rounded-xl bg-white p-8 text-center shadow">
              <div className="mb-4 text-4xl font-bold text-blue-600">25%</div>
              <h3 className="mb-2 text-xl font-semibold">Croissance du CA</h3>
              <p className="text-gray-600">Développez votre activité sans augmenter proportionnellement vos ressources.</p>
            </div>
          </div>
        </div>
      </section>
         {/* Comment ça marche */}
         <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Une mise en place simple et rapide</h2>
          
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">1</div>
              <h3 className="mb-3 text-xl font-semibold">Analyse</h3>
              <p className="text-gray-600">Nous évaluons vos besoins et processus actuels pour personnaliser la solution.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">2</div>
              <h3 className="mb-3 text-xl font-semibold">Configuration</h3>
              <p className="text-gray-600">Nous installons et personnalisons la solution selon vos spécificités métier.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">3</div>
              <h3 className="mb-3 text-xl font-semibold">Formation</h3>
              <p className="text-gray-600">Nous formons vos équipes à l'utilisation optimale de notre plateforme.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">4</div>
              <h3 className="mb-3 text-xl font-semibold">Support</h3>
              <p className="text-gray-600">Nous assurons un accompagnement continu pour maximiser vos résultats.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">Ce que nos clients disent</h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative rounded-xl bg-white p-8 shadow">
              <div className="absolute -left-4 -top-4 flex size-12 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
                "
              </div>
              <p className="mb-6 text-gray-600">Depuis l'implémentation de cette solution, nous avons réduit de 65% le temps consacré à l'administratif. Nos équipes peuvent enfin se concentrer sur notre cœur de métier.</p>
              <div className="flex items-center">
                <div className="mr-4 size-12 rounded-full bg-gray-300"></div>
                <div>
                  <h4 className="font-semibold">Marie D.</h4>
                  <p className="text-sm text-gray-500">Directrice PME</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl bg-white p-8 shadow">
              <div className="absolute -left-4 -top-4 flex size-12 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
                "
              </div>
              <p className="mb-6 text-gray-600">Notre service client a gagné en efficacité et notre taux de satisfaction a augmenté de 45%. L'automatisation nous permet de traiter plus de demandes avec la même équipe.</p>
              <div className="flex items-center">
                <div className="mr-4 size-12 rounded-full bg-gray-300"></div>
                <div>
                  <h4 className="font-semibold">Thomas L.</h4>
                  <p className="text-sm text-gray-500">Responsable Service Client</p>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-xl bg-white p-8 shadow">
              <div className="absolute -left-4 -top-4 flex size-12 items-center justify-center rounded-full bg-blue-600 text-2xl text-white">
                "
              </div>
              <p className="mb-6 text-gray-600">La solution a transformé notre approche marketing. Nous avons amélioré notre taux de conversion de 35% et réduit nos coûts d'acquisition client de près de 28%.</p>
              <div className="flex items-center">
                <div className="mr-4 size-12 rounded-full bg-gray-300"></div>
                <div>
                  <h4 className="font-semibold">Sophie M.</h4>
                  <p className="text-sm text-gray-500">Directrice Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-bold">Prêt à transformer votre entreprise ?</h2>
            <p className="text-xl">Réservez une démo gratuite et découvrez comment notre solution peut répondre à vos besoins spécifiques.</p>
          </div>
          
          <form className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="mb-2 block font-medium text-gray-700">Nom</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Votre nom"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="company" className="mb-2 block font-medium text-gray-700">Entreprise</label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Nom de votre entreprise"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="votre@email.com"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Réserver ma démo gratuite
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold">AutoPilot</h3>
              <p className="text-gray-400">Solutions d'automatisation pour les entreprises et PME.</p>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold">Liens utiles</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 transition hover:text-white">À propos</a></li>
                <li><a href="#" className="text-gray-400 transition hover:text-white">Fonctionnalités</a></li>
                <li><a href="#" className="text-gray-400 transition hover:text-white">Tarifs</a></li>
                <li><a href="#" className="text-gray-400 transition hover:text-white">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">contact@autopilot.fr</li>
                <li className="text-gray-400">+33 1 23 45 67 89</li>
                <li className="text-gray-400">12 rue de l'Innovation, 75001 Paris</li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4 font-semibold">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 transition hover:text-white">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.193-7.715-2.157-10.141-5.126-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.007-.429-.018-.639.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition hover:text-white">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} AutoPilot. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Modal de confirmation */}
      {showModal && (
        <div className="bg-opacity/50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="max-w-md rounded-xl bg-white p-8">
            <h3 className="mb-4 text-2xl font-bold">Merci pour votre demande !</h3>
            <p className="mb-6 text-gray-600">Nous avons bien reçu votre demande de démo. Un membre de notre équipe vous contactera dans les 24h pour organiser un rendez-vous.</p>
            <button 
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              onClick={() => setShowModal(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
