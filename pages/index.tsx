import type { NextPage } from "next";

import DefaultLayout from "@/layouts/default/default-layout";
import Button from "@/components/UI/button";
import ALink from "@/components/UI/a-link";
import Section from "@/components/UI/section";
import SkillCard from "@/components/skill-card";
import ProjectCard from "@/components/project-card";
import ContactForm from "@/components/contact-form";

import { Entry, createClient } from "contentful";
import { useEffect } from "react";
import { Project } from "@/types/project";

export async function getStaticProps() {
  try {
    
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
    })
  
    const res = await client.getEntries({ content_type: 'project'})
  
    return {
      props: {
        projects: res.items
      }
    }
  } catch (error) {
    return {
      props: {
        projects: null
      }
    }
  }
}

interface HomePageProps {
  projects: Entry<Project>[]
}

const Home = ({ projects }: HomePageProps) => {
  console.log(projects)
  return (
    <DefaultLayout>
      <>
        <section className="bg-gr-900 text-gr-50 relative z-0">
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
              <div className="w-4/12 flex flex-col flex-grow-0 flex-shrink-0">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-4">À propos de moi</h3>
                  <p className="text-gr-400 text-lg text-justify">
                    Etudiant en génie logiciel passionné par le développement
                    web. Je travaille avec Laravel/PHP, NodeJS, Vue.js et
                    TailwindCSS, et j'ai hâte de mettre mes connaissances à
                    profit dans un cadre professionnel.
                  </p>
                </div>
                <div className="mt-auto">
                  <ALink href="#">
                    <>Voir mon blog</>
                  </ALink>
                </div>
              </div>
              <div className="w-1 bg-gr-400" style={{ width: "1px" }}></div>
              <div className="w-4/12 flex flex-col flex-grow-1 flex-shrink-0">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-4">Mon travail</h3>
                  <p className="text-gr-400 text-lg text-justify">
                    J'ai de l'expérience dans la création d'applications Web
                    dynamiques et réactives, et je cherche toujours à apprendre
                    et à grandir en tant que développeur.
                  </p>
                </div>
                <div className="mt-auto">
                  <ALink href="#">
                    <>Voir mes projets</>
                  </ALink>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Section backgroundColor="bg-gr-800" title="Skills">
          <>
            <h2 className="text-4xl w-1/2 font-bold mb-12">Une liste des compétences que j'ai développées au fil du temps</h2>

            <div className="grid grid-cols-4 gap-8">
              <SkillCard name="Javascript" />
              <SkillCard name="Javascript" />
              <SkillCard name="Javascript" />
              <SkillCard name="Javascript" />
              <SkillCard name="Javascript" />
              <SkillCard name="Javascript" />
              <SkillCard name="Javascript" />
              <SkillCard name="Javascript" />
            </div>
          </>
        </Section>


        <Section backgroundColor="bg-gr-900" title="Projets">
          <>
            <div className="mb-12 flex justify-between items-start">
              <h2 className="text-4xl w-4/12 font-bold">Découvrez les derniers projets que j'ai réalisés</h2>

              <ALink href="#"><>Voir tous les projets</></ALink>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {/* <ProjectCard title="PFE Insight" icon={<>F</>} technologies={['VueJs', 'Laravel']} github="test" demo="test" />
              <ProjectCard title="FEE7 Platform" technologies={['VueJs', 'Laravel', 'fdsgsd', 'fdgsfgdsf', 'fdgsfdgs']} github="test" demo="test" />
              <ProjectCard title="Judge0 package" technologies={['ReactJS', 'Laravel', 'Judge0']} github="test" /> */}

              {projects.map(p => (
                <ProjectCard project={p.fields} key={p.sys.id}/>
              ))}
            </div>
          </>
        </Section>


        <Section backgroundColor="bg-gr-800" title="Contact">
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-gr-50 w-2/3 mb-8">Intéressé par mon travail ? Prenons contact !</h2>

                <h4 className="text-gr-300 text-xl mb-4">Mon email</h4>
                <ALink href="#"><>mouadbnl.2k01@gmail.com</></ALink>
              </div>

              <ContactForm />
            </div>
          </>
        </Section>
      </>
    </DefaultLayout>
  );
};

export default Home;
