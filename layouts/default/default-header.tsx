import Link from "next/link"
import { DefaultNavbar } from "./default-navbar"

const DefaultHeader = () => {
  return (
    <header
      className="bg-gr-900 bg-opacity-50 text-gr-50 fixed top-0 left-0 right-0 z-50 px-4"
      id="main-header"
    >
      <div className="container mx-auto py-6 flex justify-between items-center">
        <h1 id="name" className="text-2xl font-bold">
          <span className="font-light">Benali</span> Mouad.
        </h1>

        <DefaultNavbar />
      </div>
    </header>
  )
}

export default DefaultHeader
