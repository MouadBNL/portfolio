import Button from "@/components/UI/button"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"

export const DefaultNavbar = () => {
  const router = useRouter()
  const navRef = useRef<HTMLDivElement | null>(null)
  const [navOpen, setNavOpen] = useState(false)
  const toggleNavBar = () => {
    navOpen ? closeNav() : openNav()
    setNavOpen(!navOpen)
  }

  const openNav = () => {
    navRef.current?.classList.remove("hidden")
    setTimeout(() => {
      navRef.current?.classList.remove("-left-9")
      navRef.current?.classList.remove("opacity-0")
      navRef.current?.classList.add("left-0")
      navRef.current?.classList.add("opacity-100")
    }, 100)
  }

  const closeNav = () => {
    navRef.current?.classList.add("-left-9")
    navRef.current?.classList.add("opacity-0")

    navRef.current?.classList.remove("left-0")
    navRef.current?.classList.remove("opacity-100")
    setTimeout(() => {
      navRef.current?.classList.add("hidden")
    }, 1000)
  }

  useEffect(() => {
    navRef.current?.classList.add("hidden")
    router.events.on("routeChangeStart", closeNav)
    console.log(navRef.current)
  }, [])

  return (
    <nav>
      <div
        ref={navRef}
        className={
          "absolute md:opacity-100 px-4 md:px-0 inset-0 md:static transition-all top-28 duration-1000 -left-9 opacity-0"
        }
      >
        <ul className="flex gap-4 text-gr-200 text-lg flex-col md:flex-row bg-gr-900 bg-opacity-100 md:bg-opacity-0 rounded-lg p-4 md:p-0 relative md:border-0 border border-gr-700">
          <li>
            <Link
              onClick={closeNav}
              className="block px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded"
              href="/"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              className="block px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded"
              href="/projects"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              className="block px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded"
              href="#"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
              className="block px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded"
              href="#"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              onClick={closeNav}
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
