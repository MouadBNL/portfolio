import Link from "next/link";

const DefaultHeader = () => {
  return (
    <header className="bg-gr-900 bg-opacity-50 text-gr-50 fixed top-0 left-0 right-0 z-50" id="main-header">
      <div className="container mx-auto py-6 flex justify-between items-center">
        <h1 id="name" className="text-2xl font-bold">
          <span className="font-light">Benali</span> Mouad.
        </h1>

        <nav>
          <ul className="flex gap-4 text-gr-200 text-lg">
            <li className="px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded">
              <Link href="/">
                  Accueil
              </Link>
            </li>
            <li className="px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded">
              <Link href="#">
                  Projets
              </Link>
            </li>
            <li className="px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded">
              <Link href="#">
                  À propos
              </Link>
            </li>
            <li className="px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded">
              <Link href="#">
                  Blog
              </Link>
            </li>
            <li className="px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded">
              <Link href="#">
                  Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default DefaultHeader;
