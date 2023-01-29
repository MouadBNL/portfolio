const DefaultFooter = () => {
  return (
    <footer className="mt-auto bg-gr-900 py-24 text-gr-50 border-t border-gr-700 px-4">
      <div className="container mx-auto">
        <div className="flex items-center flex-col gap-y-8 md:flex-row justify-between items-stretch pb-8 mb-8 border-b border-gray-600">
          <div>
            <div className="flex items-center">
              <div className="bg-gr-300 rounded-full h-32 w-32 mr-4 lg:mr-11 flex-shrink-0"></div>
              <div>
                <h2 className="text-4xl font-bold">Benali Mouad</h2>
                <h3 className="text-xl text-gr-400">
                  Élève ingénieur à l'ENSA de Kénitra
                </h3>
              </div>
            </div>
            {/* <span>Here social media links</span> */}
          </div>

          <div className="flex flex-col">
            <h2 className="text-5xl font-bold mb-4">Contact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-8 gap-8 lg:gap-x-14 mt-auto">
              <div>
                <h4 className="text-lg text-gr-400 mb-4 font-medium">
                  Mon Email
                </h4>
                <h5 className="underline">mouadbnl.2k01@gmail.com</h5>
              </div>
              <div>
                <h4 className="text-lg text-gr-400 mb-4 font-medium">
                  Telephone
                </h4>
                <h5 className="underline">+212 6 50 83 14 03</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <nav className="hidden lg:block">
            <ul className="flex gap-4 text-gr-400 text-lg">
              <li className="px-4 py-1 bg-transparent hover:text-white hover:cursor-pointer transition">
                Accueil
              </li>
              <li className="px-4 py-1 bg-transparent hover:text-white hover:cursor-pointer transition">
                Projets
              </li>
              <li className="px-4 py-1 bg-transparent hover:text-white hover:cursor-pointer transition">
                À propos
              </li>
              <li className="px-4 py-1 bg-transparent hover:text-white hover:cursor-pointer transition">
                Blog
              </li>
              <li className="px-4 py-1 bg-transparent hover:text-white hover:cursor-pointer transition">
                Contact
              </li>
            </ul>
          </nav>

          <p className="text-lg">Made with ❤ by Benali Mouad © 2023</p>
        </div>
      </div>
    </footer>
  )
}

export default DefaultFooter
