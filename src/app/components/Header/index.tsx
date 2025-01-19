'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { ItemMenu } from './itemMenu';

const itemsMenu = [
  {
    url: '/',
    title: 'Início',
  },
  {
    url: '/sobre',
    title: 'Sobre',
  },
  {
    url: '/multimarcas',
    title: 'Multimarcas',
  },
  {
    url: '/fardamentos',
    title: 'Fardamentos',
  },
];

export function Header() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="sticky w-full top-0 z-50 flex items-center">
      <motion.section 
        className={`w-full max-w-container mx-auto px-3 flex items-center justify-between ${scrolled ? 'border-b-2 border-green-600' : ''}`}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="flex items-center gap-10">
          <Image
            src="/logo-sabrisia.svg"
            alt="Logo Sabrísia"
            width={150}
            height={100}
            className="h-auto w-[150]"
            priority={true}
          />
        </Link>
        <nav className="flex items-center gap-8 text-xl">
          <ul className="hidden md:flex gap-4">
            {itemsMenu.map((item, index) => (
              <li key={index}>
                <ItemMenu 
                  url={item.url} 
                  title={item.title}
                  active={pathname === item.url}
                />
              </li>
            ))}
          </ul>
          <button onClick={toggleNav} className={`md:hidden text-3xl ${navOpen ? 'text-white' : ''} z-50`}>
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </motion.section>
      {navOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-40">
          <ul className="flex flex-col gap-4 text-white text-4xl">
            {itemsMenu.map((item, index) => (
              <li key={index}>
                <ItemMenu 
                  url={item.url} 
                  title={item.title}
                  active={pathname === item.url}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
