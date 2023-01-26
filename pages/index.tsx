import type { NextPage } from "next";

import DefaultLayout from "@/layouts/default/default-layout";
import Button from "@/components/button";
import ALink from "@/components/a-link";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <>
        <section className="bg-gr-900 text-gr-50 relative">
          <div className="absolute bottom-0 right-16">
            <span className="block mb-4 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" style={{'textOrientation': 'mixed', 'writingMode': 'vertical-rl'}}>mouadbnl.2k01@gmail.com</span>
            <div className="h-28 bg-primary mx-auto" style={{'width': '2px'}}></div>
          </div>
          <div className="min-h-screen flex items-center justify-center container mx-auto flex-col py-28">
            <div className="w-7/12 mb-36">
              <h2 className="text-6xl text-center font-bold mb-8">
                Bienvenue, je suis Benali Mouad, Développeur web
              </h2>
              <p className="text-xl text-center text-gray-400 w-10/12 mx-auto mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum
              </p>
              <div className="flex justify-center">
                <Button>
                  <>Contact me</>
                </Button>
              </div>
            </div>

            <div className="flex items-stretch justify-between w-9/12">
              <div className="w-1/3 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-4">À propos de moi</h3>
                  <p className="text-gr-400 text-lg text-justify">
                    Etudiant en génie logiciel passionné par le développement
                    web. Je travaille avec Laravel/PHP, NodeJS, Vue.js et
                    TailwindCSS, et j'ai hâte de mettre mes connaissances à
                    profit dans un cadre professionnel.
                  </p>
                </div>
                <div>
                  <ALink href="#">
                    <>Voir mon blog</>
                  </ALink>
                </div>
              </div>
              <div className="w-1 bg-gr-400" style={{ width: "1px" }}></div>
              <div className="w-1/3 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-4">Mon travail</h3>
                  <p className="text-gr-400 text-lg text-justify">
                    J'ai de l'expérience dans la création d'applications Web
                    dynamiques et réactives, et je cherche toujours à apprendre
                    et à grandir en tant que développeur.
                  </p>
                </div>
                <div>
                  <ALink href="#">
                    <>Voir mes projets</>
                  </ALink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gr-800 min-h-screen"></section>
      </>
    </DefaultLayout>
  );
};

export default Home;
