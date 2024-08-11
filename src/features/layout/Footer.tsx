import React from 'react'
// import { BiSolidHeart } from 'react-icons/bi'
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
        { href: '/team', label: 'Team', badge: 'Coup de 🧡' },
      ],
    },
    {
      heading: 'Pack',
      links: [
        { href: '/prestations/#pack', label: 'Débutant', badge: 'New' },
        { href: '/prestations/#pack', label: 'Intermédiaire' },
        { href: '/prestations/#pack', label: 'Confirmé' },
      ],
    },
    {
      heading: 'Ressources',
      links: [
        { href: '/posts', label: 'Blog' },
        { href: '/', label: 'School' },
        { href: '/prestations/#E-Books', label: 'E-Books', badge: 'New' },
      ],
    },
  ],
}

export const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D]">
      <Layout className="mt-12 pb-12">
        <LayoutContent className="flex justify-between max-sm:flex-col">
          <div className="flex flex-col gap-4 ">
            <div className="space-y-1 ">
              <Typography variant="h3" className="text-orange-500">{SiteConfig.title}</Typography>
              <Typography className="text-white">{SiteConfig.company.name}</Typography>
              <Typography className="text-white">{SiteConfig.company.address}</Typography>
            </div>
            <div className="mt-5 flex">
              <Link href="#" aria-label="Instagram" className="mr-4 text-2xl text-white hover:text-orange-200">
                <FaInstagramSquare />
              </Link>
              <Link href="#" aria-label="Facebook" className="mr-4 text-2xl text-white hover:text-orange-200">
                <FaFacebook />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-2xl text-white hover:text-orange-200">
                <FaLinkedin />
              </Link>
            </div>
           
          </div>

          <div className=" grid grid-cols-2 gap-4 sm:grid-cols-3">
            {footerContent.footerLinks.map((item) => (
              <div key={item.heading}>
                <Typography variant="large" className="mb-3 text-gray-400">{item.heading}</Typography>
                <ul>
                  {item.links.map((link) => (
                    <li key={link.label} className="mb-2">
                      <Link
                        href={link.href}
                        className={`text-white transition-all ease-in-out hover:text-orange-500 ${link.badge ? 'flex items-center gap-2' : ''}`}
                      >
                        {link.label}
                        {link.badge && (
                          <span className="ml-2 rounded-full border border-orange-500 bg-orange-100 px-1 py-0.5 text-[10px] text-orange-500">
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

          {/* <div className="flex flex-row items-end gap-4 md:flex-col">
            <Typography variant="large">Legal</Typography>
            <Typography as={Link} variant="muted" className="hover:underline" href="/legal/terms">
              Terms
            </Typography>
            <Typography as={Link} variant="muted" className="hover:underline" href="/legal/privacy">
              Privacy
            </Typography>
          </div> */}
        </LayoutContent>
      </Layout>
    </footer>
  )
}
