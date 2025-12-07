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
        { href: '/posts', label: 'Blog', badge: 'Nouveau' },
      ],
    },
    {
      heading: 'Services',
      links: [
        { href: '/prestations', label: 'Prestations' },
        { href: '/team', label: 'Team', badge: 'Nouveau' },
      ],
    },
    {
      heading: 'Ressource',
      links: [
        { href: '/prestations/#E-Books', label: 'E-Books'},
        { href: '/prestations/#pack', label: 'Packs',badge: 'Nouveau' },
      ],
    },
    {
      heading: 'Compte',
      links: [
        { href: '/account', label: 'User' },
        { href: 'https://googlechrome.github.io/lighthouse/viewer/?psiurl=https%3A%2F%2Fwww.unlcoaching.com%2F&strategy=desktop&category=performance&category=accessibility&category=best-practices&category=seo&utm_source=lh-chrome-ext#', label: 'Performance', target: '_blank' },
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
                          <span className="ml-2 rounded-full border border-orange-700 bg-orange-50 px-1 py-0.5 text-[10px] font-semibold text-orange-800">
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