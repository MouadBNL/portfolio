import { ReactElement } from "react";

interface ALinkProps  {
  children: ReactElement,
  href?: string,
}

const ALink = ({children, href}: ALinkProps) => {
  return (
    <a href={href} className="text-lg flex items-center gap-2 border-b border-accent w-fit a-link hover:gap-4 transition-all">
      <span>
        {children}
      </span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5L19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </a>
  )
}

export default ALink;