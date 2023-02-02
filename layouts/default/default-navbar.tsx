import Button from "@/components/UI/button"
import Link from "next/link"
import { useRef, useState } from "react"

export const DefaultNavbar = () => {
  // const navRef = useRef<HTMLDivElement | null>(null)
  const [navOpen, setNavOpen] = useState(false)
  const toggleNavBar = () => {
    // navRef.current?.classList.toggle("top-28")
    // navRef.current?.classList.toggle("opacity-100")
    // navRef.current?.classList.toggle("top-56")
    // navRef.current?.classList.toggle("opacity-0")
    setNavOpen(!navOpen)
  }

  return (
    <nav>
      <div
        className={
          "absolute md:opacity-100 px-4 md:px-0 inset-0 md:static transition-all" +
          (navOpen ? " top-28 opacity-100" : " top-56 opacity-0")
        }
      >
        <ul className="flex gap-4 text-gr-200 text-lg flex-col md:flex-row bg-gr-900 bg-opacity-100 md:bg-opacity-0 rounded-lg p-4 md:p-0 relative md:border-0 border border-gr-700">
          <li>
            <Link
              onClick={() => {
                setNavOpen(false)
              }}
              className="block px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded"
              href="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setNavOpen(false)
              }}
              className="block px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded"
              href="/projects"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setNavOpen(false)
              }}
              className="block px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded"
              href="#"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setNavOpen(false)
              }}
              className="block px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded"
              href="#"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setNavOpen(false)
              }}
              className="block px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded"
              href="#"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="block md:hidden">
        <Button onClick={toggleNavBar}>
          <>
            {navOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </>
        </Button>
      </div>
    </nav>
  )
}
