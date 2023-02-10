import Link from "next/link"
import { ReactElement } from "react"

interface ALinkProps {
  children: ReactElement
  href?: string
  target?: "_blank" | string
  ariaLabel?: string
}

const ALink = ({ children, href, target, ariaLabel }: ALinkProps) => {
  return (
    <Link
      aria-label={ariaLabel ?? "link"}
      target={target}
      href={href ?? "#"}
      className="text-lg text-gr-50 flex items-center gap-2 border-b border-accent w-fit a-link hover:gap-4 transition-all"
    >
      <span>{children}</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5L19 12L12 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  )
}

export default ALink
