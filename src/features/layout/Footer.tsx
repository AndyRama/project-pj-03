import React from 'react'
import { FaInstagramSquare, FaFacebook, FaLinkedin } from 'react-icons/fa'
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
        { href: '/posts', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
        { href: '/prestations', label: 'Prestations' },
        { href: '/team', label: 'Team', badge: 'Nouveau' },
      ],
    },
    {
      heading: 'Pack',
      links: [
        { href: '/prestations/#pack', label: 'Débutant' },
        { href: '/prestations/#pack', label: 'Intermédiaire' },
        { href: '/prestations/#pack', label: 'Confirmé' },
      ],
    },
  ],
}

export const Footer = () => {
  return (
    <footer>
      <hr className="bg-[#09090b]"/>
      <Layout className="mt-12 pb-12">
        <LayoutContent className="flex justify-around max-sm:flex-col">
          <div className="flex flex-col gap-4 ">
            <div className="space-y-1 ">
              <Typography variant="h2" className="text-orange-500">{SiteConfig.title}</Typography>
              <Typography >{SiteConfig.company.name}</Typography>
              <Typography >{SiteConfig.company.address}</Typography>
            </div>

            <div className="mt-4 flex pb-10">
              <Link href="#" aria-label="Instagram" className="mr-4 text-2xl hover:text-orange-500  ">
                <FaInstagramSquare />
              </Link>
              <Link href="#" aria-label="Facebook" className="mr-4 text-2xl hover:text-orange-500 ">
                <FaFacebook />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-2xl hover:text-orange-500 ">
                <FaLinkedin />
              </Link>
            </div>           
          </div>

          <div className=" max-sm-mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
            {footerContent.footerLinks.map((item) => (
              <div key={item.heading}>
                <Typography variant="large" className="mb-3 text-gray-400">{item.heading}</Typography>
                <ul>
                  {item.links.map((link) => (
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
    </footer>
  )
}
