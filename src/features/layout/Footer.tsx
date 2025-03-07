import React from 'react'
import { FaInstagramSquare, FaFacebook } from 'react-icons/fa'
import { Typography } from "@/components/ui/typography";
import { Layout, LayoutContent } from "@/features/page/layout";
import { SiteConfig } from "@/site-config";
import Link from "next/link";

const footerContent = {
  footerLinks: [
    {
      heading: 'Site Map',
      links: [
        { href: '/', label: 'Accueil' },
        { href: '/contact', label: 'Contact' },
        { href: '/prestations', label: 'Prestations' },
        { href: '/team', label: 'Team', badge: 'Nouveau' },
      ],
    },
    {
      heading: 'Ressources',
      links: [
        { href: '/posts', label: 'Blog', badge: 'Nouveau' },
        { href: '/prestations/#E-Books', label: 'E-Books'},
        { href: '/prestations/#pack', label: 'Packs',badge: 'Nouveau' },
      ],
    },
    {
      heading: 'Compte',
      links: [
        { href: '/account', label: 'User' },
        { href: '/dashboard', label: 'Admin'},
      ],
    },
  ],
}

export const Footer = () => {
  return (
    <footer>
      <hr className="bg-[#09090b]"/>
      <div className="transform-gpu blur-3xl">
        <div className="absolute left-0 -z-20 h-48 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
      </div>
      <Layout className="mt-12 pb-12">
        <LayoutContent className="flex justify-around max-sm:flex-col">
          <div className="flex flex-col gap-4 ">
            <div className="space-y-1 ">
              <Typography variant="h2" className="text-orange-500">{SiteConfig.title}</Typography>
              <Typography >{SiteConfig.company.name}</Typography>
              <Typography >{SiteConfig.company.address}</Typography>
            </div>

            <div className="mt-4 flex pb-10">
              <Link href="https://www.instagram.com/unlcoaching.school/" aria-label="Instagram" className="mr-4 text-2xl hover:text-orange-500  ">
                <FaInstagramSquare />
              </Link>
              <Link href="https://www.facebook.com/Unlcoaching" aria-label="Facebook" className="mr-4 text-2xl hover:text-orange-500 ">
                <FaFacebook />
              </Link>
            </div>           
          </div>

          <div className=" max-sm-mx-auto justify-beteween grid grid-cols-2 gap-4 md:grid-cols-4">
            {footerContent.footerLinks.map((item) => (
              <div key={item.heading}>
                <Typography variant="large" className="mb-3 text-gray-400">{item.heading}</Typography>
                <ul>
                  {item.links.map((link: { href: string; label: string; badge?: string; target?: string }) => (
                    <li key={link.label} className="mb-2">
                      <Link
                        href={link.href}
                        className={`transition-all ease-in-out hover:text-orange-500 ${link.badge ? 'flex items-center gap-0 md:gap-2' : ''}`}
                      >
                        {link.label}
                        {link.badge && (
                          <span className="ml-2 rounded-full border border-orange-500 bg-orange-100 px-1 py-0.5 text-[10px] text-orange-500 ">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </LayoutContent>
      </Layout>
        <div className="transform-gpu blur-3xl">
          <div className="absolute right-0 -z-20 h-64 w-56 bg-gradient-to-tr from-orange-500 to-orange-800 opacity-30 md:opacity-50"></div>
        </div>
    </footer>
  )
}
