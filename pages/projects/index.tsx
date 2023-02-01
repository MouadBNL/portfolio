import ProjectCard from "@/components/project-card"
import { Project } from "@/types/project"
import { createContentfulClient } from "@/utils/contentful"
import { Entry } from "contentful"
import Head from "next/head"

export const getStaticProps = async () => {
  const client = createContentfulClient()

  const res = await client.getEntries<Project>({ content_type: "project" })

  return {
    props: {
      projects: res.items,
    },
  }
}

interface ProjectsPage {
  projects: Entry<Project>[]
}

const ProjectsPage = ({ projects }: ProjectsPage) => {
  return (
    <>
      <Head>
        <title>Projets - Benali Mouad</title>
      </Head>
      <section className="text-gr-50 bg-gr-900 py-32 px-4">
        <div className="container mx-auto">
          <h1 className="mb-32 text-6xl font-bold text-center">Projets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard project={project.fields} key={project.sys.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default ProjectsPage
