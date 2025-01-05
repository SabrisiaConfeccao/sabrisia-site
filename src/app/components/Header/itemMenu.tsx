import Link from "next/link"

interface ItemMenuProps {
  url: string
  title: string
}

export function ItemMenu({ url, title }: ItemMenuProps) {
  return (
    <Link 
      href={url}
      className="flex items-center gap-4 font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-200 p-2 rounded"
    >
      {title}
    </Link>
  )
}
