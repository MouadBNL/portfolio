const DefaultHeader = () => {
  return (
    <header className="bg-gr-900 bg-opacity-50 text-gr-50 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto py-6 flex justify-between items-center">
        <h1 id="name" className="text-2xl font-bold">
          <span className="font-light">Benali</span> Mouad.
        </h1>

        <nav>
          <ul className="flex gap-4 text-gr-400 text-lg">
            <li className="px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded">Accueil</li>
            <li className="px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded">Projets</li>
            <li className="px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded">À propos</li>
            <li className="px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded">Blog</li>
            <li className="px-4 py-1 bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer transition rounded">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default DefaultHeader;
