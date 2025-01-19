import Link from "next/link"

interface ItemMenuProps {
  url: string
  title: string
  active: boolean
}

export function ItemMenu({ url, title, active }: ItemMenuProps) {
  return (
    <Link 
      href={url}
      className={`flex items-center gap-4 font-semibold ${active ? 'border-b-2 border-green-600' : ''} hover:bg-green-600 hover:text-white transition-all duration-200 p-2 hover:rounded hover:border-none`}
    >
      <span className="w-full text-center">
        {title}
      </span>
    </Link>
  )
}
