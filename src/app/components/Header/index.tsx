import Image from "next/image"
import { GridContainer } from "../GridContainer"
import { ItemMenu } from "./itemMenu"
import Link from "next/link"

const itemsMenu = [
  {
    url: '/',
    title: 'Início'
  },
  {
    url: '/sobre',
    title: 'Sobre'
  },
  {
    url: '/multimarcas',
    title: 'Multimarcas'
  },
  {
    url: '/fardamentos',
    title: 'Fardamentos'
  }
]

export function Header() {
  return (
    <header className="sticky w-full top-0 z-50 flex items-center mb-4">
      <GridContainer className='flex items-center justify-between border-b-2 border-green-600'>
        <Link href="/"
          className="flex items-center gap-10"
        >
          <Image
            src='/logo-sabrisia.svg'
            alt='Logo Sabrísia'
            width={150}
            height={50}
            className="h-auto"
          />
        </Link>
        <nav className="flex items-center gap-8">
          <ul className="flex gap-4">
            {itemsMenu.map((item, index) => (
              <li key={index}>
                <ItemMenu url={item.url} title={item.title} />
              </li>
            ))}
          </ul>
        </nav>
      </GridContainer>
    </header>
  )
}